namespace hybrid_litegraph.ViewModel
{
    using CommunityToolkit.Mvvm.ComponentModel;
    using hybrid_litegraph.bridge;
    using hybrid_litegraph.Pages;
    using System.Collections.ObjectModel;
    using System.Windows.Input;
    using Wpf.Ui;
    using Wpf.Ui.Controls;

    public class AddTestDemoCommand : ICommand
    {
        public AddTestDemoCommand()
        {
     
        }


        public event EventHandler CanExecuteChanged;

        public bool CanExecute(object parameter)
        {
            return true;
        }

        public async void Execute(object parameter)
        {
            await LiteGraphBridge.LGraphBridge.createNodeByLoad(new LiteGraphNode
            {
               fake_id=100,
               nodeType= "test.testjob",
               pos= new decimal[] { 100,100},
               title= "test.testjob",
               uid=100
            });
        }

 
    }
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
                    },
                                       new NavigationViewItem()
                    {
                        Content = "AddTestDemo",
                        Icon = new SymbolIcon { Symbol = SymbolRegular.Add28 },
                        TargetPageType = null,
                        Command=new AddTestDemoCommand()
                    }
                ];
        }
    }
}
