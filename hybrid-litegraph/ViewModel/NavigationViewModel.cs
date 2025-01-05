namespace hybrid_litegraph.ViewModel
{
    using CommunityToolkit.Mvvm.ComponentModel;
    using hybrid_litegraph.Pages;
    using System.Collections.ObjectModel;
    using Wpf.Ui.Controls;

    public partial class NavigationViewModel : ObservableObject
    {
        [ObservableProperty]
        private ObservableCollection<object> _navigationItems = [];

        public NavigationViewModel()
        {
            NavigationItems =
                [
                    new NavigationViewItem()
                    {
                        Content = "Home",
                        Icon = new SymbolIcon { Symbol = SymbolRegular.Home24 },
                        TargetPageType = typeof(MainPage)
                    }
                ];
        }
    }
}
