using Wpf.Ui.Controls;
using hybrid_litegraph.ViewModel;
using Wpf.Ui;
using hybrid_litegraph.Pages;

namespace hybrid_litegraph
{
    /// <summary>
    /// MainWindow.xaml 的交互逻辑
    /// </summary>
    public partial class MainWindow : FluentWindow
    {
        public IPageService PageService { get; set; }
        public MainWindow(INavigationService navigationService, IPageService pageService, NavigationViewModel model)
        {
            DataContext = model;
            this.PageService = pageService;
            InitializeComponent();
            RootNavigationView.SetPageService(pageService);
            RootNavigationView.Loaded += (s, e) => {
                RootNavigationView.Navigate(typeof(MainPage));
            };
        }
    }
}
