using System.Windows;
using Microsoft.Extensions.DependencyInjection;
using Wpf.Ui;
using hybrid_litegraph.Pages;
using hybrid_litegraph.Services;
using hybrid_litegraph.ViewModel;

namespace hybrid_litegraph
{
    /// <summary>
    /// App.xaml 的交互逻辑
    /// </summary>
    public partial class App : Application
    {
        private static ServiceProvider serviceProvider;
        public App()
        {
            ServiceCollection services = new ServiceCollection();
            ConfigureServices(services);
            serviceProvider = services.BuildServiceProvider();
        }

        protected override void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);
            var mainWindow = serviceProvider.GetService<MainWindow>();
            mainWindow.Show();
        }

        private void ConfigureServices(ServiceCollection services)
        {
            services.AddSingleton<INavigationService, NavigationService>();
            services.AddSingleton<IPageService, PageService>();
            services.AddSingleton<MainWindow>();
            services.AddSingleton<NavigationViewModel>();
            services.AddSingleton<MainPage>();
            // services.

        }


        public static T GetRequiredService<T>()
     where T : class
        {
            return serviceProvider.GetRequiredService<T>();
        }
    }
}
