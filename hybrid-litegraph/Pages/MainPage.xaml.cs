using dotnetCampus.Threading;
using hybrid_litegraph.bridge;
using Microsoft.Web.WebView2.Core;
using System.Runtime.InteropServices;
using System.Windows;
using System.Windows.Controls;

namespace hybrid_litegraph.Pages
{
    /// <summary>
    /// MainPage.xaml 的交互逻辑
    /// </summary>
    public partial class MainPage : Page
    {
        private bool Loaded_ = false;
        private static readonly string w3root_ = AppDomain.CurrentDomain.SetupInformation.ApplicationBase + "web-app";
        public MainPage()
        {
            InitializeComponent();
            Loaded += MainWindow_Loaded;
        }

        private async void MainWindow_Loaded(object sender, RoutedEventArgs e)
        {
            await InitWebView();
        }

        private async Task InitWebView()
        {
            AsyncAutoResetEvent navigationStartingEvent = null;
            AsyncAutoResetEvent navigationCompletedEvent = null;
            do
            {
                try
                {
                    if (Loaded_)
                        break;
                    await webView.EnsureCoreWebView2Async(null);
                    webView.CoreWebView2.AddHostObjectToScript("bridges", new Bridges());
                    JSMapExecutorExt.coreWebView_ = webView.CoreWebView2;
                    navigationStartingEvent = new AsyncAutoResetEvent(false);
                    navigationCompletedEvent = new AsyncAutoResetEvent(false);
                    webView.CoreWebView2.SetVirtualHostNameToFolderMapping("127.0.0.1",
                        w3root_, CoreWebView2HostResourceAccessKind.Allow);
                    ulong id = 0;
                    webView.CoreWebView2.NavigationStarting += (s, e) =>
                    {
                        id = e.NavigationId;
                        navigationStartingEvent.Set();
                    };
                    webView.CoreWebView2.NavigationCompleted += (s, e) => {
                        if (id == e.NavigationId)
                            navigationCompletedEvent.Set();
                    };
                    webView.CoreWebView2.Navigate("http://127.0.0.1/index.html");
                    await navigationStartingEvent.WaitOneAsync();
                    await navigationCompletedEvent.WaitOneAsync();
                }
                finally
                {
                    Loaded_ = true;
                }
            } while (false);
            navigationStartingEvent?.Dispose();
            navigationCompletedEvent?.Dispose();
        }
    }
}
