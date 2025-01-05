<h2 id="Uezi0">应用</h2>

+ 示例为一个集成litegraph.js流程编辑器机器视觉相关的**hybrid-app**，主要开发语言为C#、html/js及C++。下图为大致技术架构图：

![](https://cdn.nlark.com/yuque/0/2025/png/52108939/1735833826839-4691f46d-0490-4bc8-8239-38f99341a7a4.png)

<h2 id="G3DcL">他山之石 可以攻玉</h2>
<h3 id="FnnBG">github上的节点编辑器</h3>
[https://github.com/topics/node-editor](https://github.com/topics/node-editor)

![baklavajs](https://cdn.nlark.com/yuque/0/2025/png/52108939/1735998914767-535efd8f-c0ee-442c-8677-5c61791bbcbe.png)

![CodeWire](https://cdn.nlark.com/yuque/0/2025/png/52108939/1735999012015-caf47a79-e8f9-4c82-8841-c68e8e886018.png)

<h3 id="Lo9Xp">ComfyUI中的节点编辑器litegraph.js</h3>
![ComfyUI](https://cdn.nlark.com/yuque/0/2025/png/52108939/1735999134795-a5a799dc-da99-4bc5-ab8d-4e56815549aa.png)

<font style="color:rgb(26, 26, 26);">ComfyUI中的节点编辑器依赖开源的litegraph.js项目。</font><font style="color:rgb(25, 27, 31);">Litegraph.js是一个 Javascript 节点图引擎库，可以实现类似</font>[<font style="color:rgb(25, 27, 31);">虚幻引擎</font>](https://zhida.zhihu.com/search?content_id=236189061&content_type=Article&match_order=1&q=%E8%99%9A%E5%B9%BB%E5%BC%95%E6%93%8E&zhida_source=entity)<font style="color:rgb(25, 27, 31);">的蓝图编程，包括一个编辑器来构建和测试节点图，支持浏览器和Node.js，可以轻松集成到任何现有的 Web 应用程序中，并且无需编辑器即可运行节点图。</font>

![litegraph.js](https://cdn.nlark.com/yuque/0/2025/png/52108939/1735999216290-d61c82e5-9c13-46bd-9f96-1bbd4a47b47a.png)

<h4 id="IgSdx">litegraph.js的主要特点</h4>
+ <font style="color:rgb(25, 27, 31);">在Canvas2D上渲染。放大/缩小和平移，易于渲染复杂界面，可在WebGLTexture内部使用</font>
+ <font style="color:rgb(25, 27, 31);">易于使用的编辑器。搜索框、键盘快捷键、多项选择、上下文菜单...</font>
+ <font style="color:rgb(25, 27, 31);">优化以支持每个节点图数百个节点。在编辑器上以及在执行时</font>
+ <font style="color:rgb(25, 27, 31);">可定制的主题。颜色、形状、背景</font>
+ <font style="color:rgb(25, 27, 31);">用于个性化节点的每个动作/绘图/事件的回调</font>
+ <font style="color:rgb(25, 27, 31);">支持子图，包含图本身的节点</font>
+ <font style="color:rgb(25, 27, 31);">实时模式系统。隐藏节点图，但调用节点来渲染它们想要的任何内容，对于创建 UI 很有用</font>
+ <font style="color:rgb(25, 27, 31);">节点图可以在 NodeJS 中执行</font>
+ <font style="color:rgb(25, 27, 31);">高度可定制的节点。颜色、形状、垂直或水平插槽、小部件、自定义渲染</font>
+ <font style="color:rgb(25, 27, 31);">易于集成到任何 JS 应用程序中。单个文件，无依赖项</font>

<h4 id="xBRuU">丰富的三方扩展</h4>
受益于ComfyUI的火爆，相对其他开源节点编辑器，litegraph.js有更多的三方开发者提供功能实用的三方插件。

![quick-connections](https://cdn.nlark.com/yuque/0/2025/gif/52108939/1735999338617-05f02568-a5e1-4226-94fa-6ef9d240bb3c.gif)

![ComfyUI的插件市场](https://cdn.nlark.com/yuque/0/2025/png/52108939/1735970888540-da302b28-f9e9-4ee6-9211-0ddec947b571.png)

<h2 id="o69ki">实现一个仿ComfyUI的客户端应用</h2>
<h3 id="mYmiA">技术选型</h3>
<h4 id="G5Sy3">Electron+Node.js+Python</h4>
[youtube](https://www.youtube.com/embed/Y2QcPt6L17k)

:::color3
参考[ComfyUI桌面](https://github.com/Comfy-Org/desktop)官方实现。

:::

:::success
**优点：**

:::

+ <font style="color:rgb(25, 27, 31);">跨平台</font>
+ <font style="color:rgb(25, 27, 31);">纯Web交互，丰富的前端框架，花哨酷炫的界面</font>
+ <font style="color:rgb(25, 27, 31);">业务逻辑python实现，有大量现成基建，适合AI、数据分析、深度学习相关开发</font>
+ <font style="color:rgb(25, 27, 31);">无需编译，易于调试，即写即用</font>

:::danger
**缺点：**

:::

+ <font style="color:rgb(25, 27, 31);">不利于native开发，不适合与自有图计算框架集成</font>
+ <font style="color:rgb(25, 27, 31);">效率及体验不如原生</font>
+ <font style="color:rgb(25, 27, 31);">需要一定的前端知识，有学习成本</font>

<h4 id="TSkc0">Qt+Cef</h4>
通过Qt+CEF实现交互界面，其中CEF组件通过现成封装好的[QCefView](https://cefview.github.io/QCefView/zh/docs/intros/)，UI组件可用[FluentUI](https://github.com/zhuzichu520/FluentUI?tab=readme-ov-file)模仿。

![](https://cdn.nlark.com/yuque/0/2025/png/52108939/1735999568129-ac4433a0-aefe-4d82-ad12-ad3b73c92852.png)

**参考**

[https://cefview.github.io/QCefView/zh/docs/intros/](https://cefview.github.io/QCefView/zh/docs/intros/)

[https://github.com/zhuzichu520/FluentUI?tab=readme-ov-file](https://github.com/zhuzichu520/FluentUI?tab=readme-ov-file)

:::success
**优点：**

:::

+ <font style="color:rgb(25, 27, 31);">跨平台</font>
+ <font style="color:rgb(25, 27, 31);">QML界面，效果花里胡哨</font>
+ <font style="color:rgb(25, 27, 31);">文档丰富，资料齐全</font>
+ <font style="color:rgb(25, 27, 31);">Native图框架易于集成，WebView与Qt互操作逻辑简单</font>
+ <font style="color:rgb(25, 27, 31);">原生应用，体验优于Electron</font>

:::danger
**缺点：**

:::

+ <font style="color:rgb(25, 27, 31);">开发效率较低、灵活便利不及纯Web</font>
+ <font style="color:rgb(25, 27, 31);">C++学习成本、心智负担</font>

<h4 id="vJqDM">WPF+Webview2</h4>
巨硬全家桶WPF+Webview2实现，UI组件采用[WPF Fluent UI](https://github.com/lepoco/wpfui)。

![](https://cdn.nlark.com/yuque/0/2025/png/52108939/1735981050089-418fd747-64ee-43fb-99dc-7d904c63fb76.png)

**参考**

[https://learn.microsoft.com/zh-cn/microsoft-edge/webview2/get-started/wpf](https://learn.microsoft.com/zh-cn/microsoft-edge/webview2/get-started/wpf)

[https://github.com/lepoco/wpfui](https://github.com/lepoco/wpfui)

:::success
**优点：**

:::

+ <font style="color:rgb(25, 27, 31);">高效开发，丰富的包管理、三方组件</font>
+ <font style="color:rgb(25, 27, 31);">界面花哨</font>
+ <font style="color:rgb(25, 27, 31);">巨硬出品稳定可靠，文档丰富，资料齐全</font>
+ <font style="color:rgb(25, 27, 31);">WebView与WPF交互逻辑简单</font>
+ <font style="color:rgb(25, 27, 31);">体验优于Electron</font>

:::danger
**缺点：**

:::

+ <font style="color:rgb(25, 27, 31);">相对Qt与Native直接互操作的便利而言，C#与C++还得再套一层胶水逻辑</font>
+ <font style="color:rgb(25, 27, 31);">不跨平台</font>

<h3 id="hLyvP">模仿之路</h3>
笔者作为多年的Windows开发，这里采用WPF+Webview2进行客户端GUI的实现，底层的图框架依旧为C++实现。

<h4 id="QaNRj">致敬外观</h4>
假定读者已按照[微软教程](https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/get-started/create-app-visual-studio?view=netdesktop-6.0)创建WPF应用工程并已打开对应工程。现在通过Fluent UI风格仿造一个ComfyUI基础外改，主要由侧边栏、标题栏、流程工作区构成。

![](https://cdn.nlark.com/yuque/0/2025/png/52108939/1735983851314-44bfd2e3-2bfc-4f9b-afa5-307e003c264a.png)

首先通过nuget命令依次安装所需的全部架包（[VS包管理器用法参考](https://learn.microsoft.com/zh-cn/nuget/consume-packages/install-use-packages-powershell)）。

```powershell
Install-Package WPF-UI
Install-Package Microsoft.Extensions.DependencyInjection
Install-Package CommunityToolkit.Mvvm
Install-Package dotnetCampus.AsyncWorkerCollection
Install-Package Newtonsoft.Json
Install-Package Microsoft.Web.WebView2
```

安装成功后对应工程下依赖项如图所示：

![](https://cdn.nlark.com/yuque/0/2025/png/52108939/1736002962805-ca33148a-f606-4558-a92b-46bc559ddb0f.png)

打开项目中的App.xaml，调整xaml代码如下：

```xml
<Application
    ...//这部分为原来的xaml描述勿动 以下进行替换即可
    xmlns:ui="http://schemas.lepo.co/wpfui/2022/xaml">
    <Application.Resources>
        <ResourceDictionary>
            <ResourceDictionary.MergedDictionaries>
                <ui:ThemesDictionary Theme="Dark" />
                <ui:ControlsDictionary />
            </ResourceDictionary.MergedDictionaries>
        </ResourceDictionary>
    </Application.Resources>
</Application>

```

参考[Navigation View | WPF UI](https://wpfui.lepo.co/documentation/navigation-view.html#using-navigation-in-the-mvvm)教程创建对应视图。具体步骤如下：

新建ViewModel目录并添加NavigationViewModel类

```csharp
namespace hybrid_litegraph.ViewModel
{
    using CommunityToolkit.Mvvm.ComponentModel;
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
                        Icon = new SymbolIcon { Symbol = SymbolRegular.Home24 }
                    }
                ];
        }
    }
}

```

新建Services目录并添加PageService类

```csharp
using System;
using System.Windows;
using Wpf.Ui;

namespace hybrid_litegraph.Services
{
    public class PageService : IPageService
    {
        /// <summary>
        /// Service which provides the instances of pages.
        /// </summary>
        private readonly IServiceProvider _serviceProvider;

        /// <summary>
        /// Initializes a new instance of the <see cref="PageService"/> class and attaches the <see cref="IServiceProvider"/>.
        /// </summary>
        public PageService(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        /// <inheritdoc />
        public T GetPage<T>()
            where T : class
        {
            if (!typeof(FrameworkElement).IsAssignableFrom(typeof(T)))
            {
                throw new InvalidOperationException("The page should be a WPF control.");
            }

            return (T)_serviceProvider.GetService(typeof(T));
        }

        /// <inheritdoc />
        public FrameworkElement GetPage(Type pageType)
        {
            if (!typeof(FrameworkElement).IsAssignableFrom(pageType))
            {
                throw new InvalidOperationException("The page should be a WPF control.");
            }

            return _serviceProvider.GetService(pageType) as FrameworkElement;
        }
    }
}

```

新建Services目录并在该目录下右键新增项添加MainPage页

![](https://cdn.nlark.com/yuque/0/2025/png/52108939/1736050766083-3ec9ec35-0863-47ba-a29f-0a77ac44117e.png)

选中App.xaml项并查看代码，修改代码为如下代码

```csharp
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

```

调整MainWindow的xaml及对应后台代码。

```xml
<ui:FluentWindow x:Class="hybrid_litegraph.MainWindow"
                 xmlns:ui="http://schemas.lepo.co/wpfui/2022/xaml"
                 xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
           xmlns:local="clr-namespace:hybrid_litegraph.ViewModel"
                 mc:Ignorable="d" 
    ExtendsContentIntoTitleBar="True"
    WindowBackdropType="Mica"
    WindowCornerPreference="Default"
    WindowStartupLocation="CenterScreen"
        Title="MainWindow" Height="450" Width="800" x:Name="window">
    <Grid>
        <Grid.RowDefinitions>
            <RowDefinition Height="Auto"/>
            <RowDefinition Height="*"/>
        </Grid.RowDefinitions>
        <ui:TitleBar
            x:Name="TitleBar"
            Title="LiteGraph Demo"
            Grid.Row="0"
            CloseWindowByDoubleClickOnIcon="True">
            <ui:TitleBar.Icon>
                <ui:SymbolIcon Symbol="Apps48" />
            </ui:TitleBar.Icon>
        </ui:TitleBar>
        <ui:NavigationView Margin="0,0,4,4" IsPaneOpen="False"  Grid.Row="1" OpenPaneLength="150"   x:Name="RootNavigationView" IsBackButtonVisible="Collapsed" PaneDisplayMode="Left"  
                Transition="FadeInWithSlide"      MenuItemsSource="{Binding NavigationItems, Mode=OneWay}" >
            <ui:NavigationView.Header>
                <Menu Background="#202020"
      Margin="0" >
                    <ui:MenuItem Header="Open" Icon="{ui:SymbolIcon FolderOpen24}" CommandParameter="{Binding  ElementName=window,Path=PageService}">
                    </ui:MenuItem>
                    <Separator />
                    <ui:MenuItem
              
           CommandParameter="{Binding  ElementName=window,Path=PageService}"
               Foreground="{DynamicResource PaletteGreenBrush}"
               Icon="{ui:SymbolIcon Play24}">
                    </ui:MenuItem>
                </Menu>
            </ui:NavigationView.Header>
            <ui:NavigationView.AutoSuggestBox>
                <ui:AutoSuggestBox x:Name="AutoSuggestBox" PlaceholderText="Search">
                    <ui:AutoSuggestBox.Icon>
                        <ui:IconSourceElement>
                            <ui:SymbolIconSource Symbol="Search24" />
                        </ui:IconSourceElement>
                    </ui:AutoSuggestBox.Icon>
                </ui:AutoSuggestBox>
            </ui:NavigationView.AutoSuggestBox>
        </ui:NavigationView>
    </Grid>
</ui:FluentWindow>
```

```csharp
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

```

最后调整NavigationViewModel.cs逻辑，将Home项跟创建的MainPage进行绑定

![](https://cdn.nlark.com/yuque/0/2025/png/52108939/1736053119470-f2919045-2423-4dda-863a-84860fed11c6.png)

完成上述步骤后进行编译运行就能看到仿ComfyUI基础界面了

![](https://cdn.nlark.com/yuque/0/2025/png/52108939/1736053220128-b8220023-30f7-47f8-86d6-7e1edef7e73e.png)

<h4 id="nbCus">嵌入Webview2并运行litegraph.js</h4>
打开Pages/MainPage.xaml页面，添加webview2容器

```xml
<Page x:Class="hybrid_litegraph.Pages.MainPage"
      xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
      xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
      xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
      xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
      xmlns:local="clr-namespace:hybrid_litegraph.Pages"
      mc:Ignorable="d" 
      d:DesignHeight="450" d:DesignWidth="800"
      xmlns:wv2="clr-namespace:Microsoft.Web.WebView2.Wpf;assembly=Microsoft.Web.WebView2.Wpf">
    <wv2:WebView2 Name="webView" Margin="1" DefaultBackgroundColor="#1c1c1c"/>
</Page>

```

下载笔者已经处理好的[webapp资源](https://github.com/499940913/hybrid-litegraph/tree/main/hybrid-litegraph/web-app)，并添加到工程中

![](https://cdn.nlark.com/yuque/0/2025/png/52108939/1736057788325-a79c9475-2f80-4f2b-b319-92d94633a51b.png)

修改MainPage.xaml.cs代码，添加webview2加载本地资源逻辑。关于Webview2本地资源加载方式，[微软官方提供多种方式实现，](https://learn.microsoft.com/zh-cn/microsoft-edge/webview2/concepts/working-with-local-content?source=recommendations&tabs=dotnetcsharp)优劣如下：

| <font style="color:rgb(22, 22, 22);">应用场景</font> | <font style="color:rgb(22, 22, 22);">导航到文件 URL</font> | <font style="color:rgb(22, 22, 22);">导航到 HTML 字符串</font> | <font style="color:rgb(22, 22, 22);">通过使用虚拟主机名映射</font> | <font style="color:rgb(22, 22, 22);">通过使用</font><font style="color:rgb(22, 22, 22);"> </font>`<font style="color:rgb(22, 22, 22);">WebResourceRequested</font>` |
| :--- | :---: | :---: | :---: | :---: |
| <font style="color:rgb(22, 22, 22);">基于源的 DOM API</font> | <font style="color:rgb(22, 22, 22);">✔️</font> | <font style="color:rgb(22, 22, 22);">❌</font> | <font style="color:rgb(22, 22, 22);">✔️</font> | <font style="color:rgb(22, 22, 22);">✔️</font> |
| <font style="color:rgb(22, 22, 22);">需要安全上下文的 DOM API</font> | <font style="color:rgb(22, 22, 22);">❌</font> | <font style="color:rgb(22, 22, 22);">❌</font> | <font style="color:rgb(22, 22, 22);">✔️</font> | <font style="color:rgb(22, 22, 22);">✔️</font> |
| <font style="color:rgb(22, 22, 22);">动态内容</font> | <font style="color:rgb(22, 22, 22);">❌</font> | <font style="color:rgb(22, 22, 22);">✔️</font> | <font style="color:rgb(22, 22, 22);">❌</font> | <font style="color:rgb(22, 22, 22);">✔️</font> |
| <font style="color:rgb(22, 22, 22);">其他 Web 资源</font> | <font style="color:rgb(22, 22, 22);">✔️</font> | <font style="color:rgb(22, 22, 22);">❌</font> | <font style="color:rgb(22, 22, 22);">✔️</font> | <font style="color:rgb(22, 22, 22);">✔️</font> |
| <font style="color:rgb(22, 22, 22);">在 WebView2 进程中解析的其他 Web 资源</font> | <font style="color:rgb(22, 22, 22);">✔️</font> | <font style="color:rgb(22, 22, 22);">❌</font> | <font style="color:rgb(22, 22, 22);">✔️</font> | <font style="color:rgb(22, 22, 22);">❌</font> |


笔者这边采用的方式为<font style="color:rgb(22, 22, 22);">虚拟主机名映射方案，具体代码：</font>

```csharp
using dotnetCampus.Threading;
using Microsoft.Web.WebView2.Core;
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

```

:::danger
**💡****PS:CEF中也提供类似**[**加载本地资源方案**](https://cefview.github.io/QCefView/zh/docs/guide/LoadWebResource#3-%E6%B7%BB%E5%8A%A0%E6%9C%AC%E5%9C%B0%E6%96%87%E4%BB%B6%E7%9B%AE%E5%BD%95%E5%88%B0url%E7%9A%84%E6%98%A0%E5%B0%84)

:::

![](https://cdn.nlark.com/yuque/0/2025/png/52108939/1736058681664-59eb4394-808d-4337-8158-14810f5e9834.png)

完成上述步骤后，编译运行即可成功见到litegraph.js中的标准网格图。

![](https://cdn.nlark.com/yuque/0/2025/png/52108939/1736059132191-2c624ae0-c49e-42d1-8f0c-d61c03a32523.png)

<h4 id="EJLD8">创建bridge，实现WebView2与WPF间的互操作</h4>
<font style="color:rgb(77, 77, 77);">所谓Bridge即为沟通着Native（这里指WPF宿主）与Web应用之间的桥梁。主要是给 JavaScript 提供调用 </font>Native<font style="color:rgb(77, 77, 77);"> 功能的接口，让混合开发中的前端部分可以方便地使用 Native 的功能。简单来讲，它在APP 内方便地让Native 调用JS，JS 调用Native ，是</font><font style="color:rgb(78, 161, 219) !important;">双向通信</font><font style="color:rgb(77, 77, 77);">的通道。</font>

<font style="color:rgb(77, 77, 77);">在实现bridge之前，需要先了解下下Webview2提供了哪些互相访问的能力。具体可参考</font>[官方文档](https://learn.microsoft.com/zh-cn/microsoft-edge/webview2/how-to/communicate-btwn-web-native)

<h5 id="KK40g"><font style="color:rgb(22, 22, 22);">通过</font>[ExecuteScriptAsync](https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.web.webview2.wpf.webview2.executescriptasync)<font style="color:rgb(22, 22, 22);">从本机端代码调用 Web 端代码</font></h5>
可以通过Webview2提供的[ExecuteScriptAsync](https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.web.webview2.wpf.webview2.executescriptasync)函数直接在已加载的web应用上访问js对象或函数调用。

<font style="color:rgb(22, 22, 22);">例如，以下代码执行生成字符串的脚本。 生成的字符串包括开头的引号、末尾的引号和转义斜杠：</font>

```csharp
string result = await coreWebView2.ExecuteScriptAsync(@"'example'");
Debug.Assert(result == "\"example\"");
```

<h5 id="QYRAO"><font style="color:rgb(22, 22, 22);">从 Web 端代码调用本机端代码</font></h5>
通过[AddHostObjectToScript](https://learn.microsoft.com/zh-cn/microsoft-edge/webview2/how-to/hostobject?tabs=win32)<font style="color:rgb(22, 22, 22);"> 函数将本机对象注册到WebView容器，其中本机对象必须按微软</font>[组件对象模型 (COM)](https://learn.microsoft.com/zh-cn/windows/win32/com/component-object-model--com--portal)的规定进行类型声明及相关属性定义，本质上是通过idl无关语言的标准交互模型实现类rpc能力。官方提供的COM对象实现非常麻烦，不建议参考，直接如下即可实现声明

```csharp
    [ClassInterface(ClassInterfaceType.AutoDual)]//双工通信
    [ComVisible(true)]//COM可见暴露
    public class Test
    {
        //若要对webapp暴露对象函数，可访问性定义为public即可
        public void Func()
        {
            MessageBox.Show("Func call");
        }

        //对webapp暴露可访问的属性
        public object Property { get; set; }
    }
   webView.CoreWebView2.AddHostObjectToScript("test", new Test());//该代码会在js下创建
//全局字段window.chrome.webview.hostObjects.test 通过该字段即可调用上诉声明的属性或函数


```

完成上述代码后编译运行，然后选中程序输入**<font style="color:rgb(22, 22, 22);">Ctrl+Shift+I</font>**打开edge调试工具在控制台中输入await window.chrome.webview.hostObjects.test.Func()即可调用到native逻辑。

:::danger
**ps:CEF下的**[**互操作**](https://cefview.github.io/QCefView/zh/docs/guide/Interoperability)****

:::

<h5 id="awk4S">实现bridge，完成对litegraph.js的互操作</h5>
项目中新建bridge目录并创建JSExecutor.cs类，主要的目的为封装js函数的调用逻辑，简化操作。

```csharp
using Microsoft.Web.WebView2.Core;
using Newtonsoft.Json;
using System.Runtime.CompilerServices;
using System.Text;

namespace hybrid_litegraph.bridge
{
    internal static class JsonHelper
    {

        internal static string toJson(this object obj)
        {
            if (obj == null)
                return "";
            return JsonConvert.SerializeObject(obj);
        }

        internal static T fromJson<T>(this string json) where T : class
        {
            if (string.IsNullOrEmpty(json))
                return null;
            try
            {
                return JsonConvert.DeserializeObject<T>(json);
            }
            catch (Exception e)
            {
            }
            return null;
        }

    }
    public interface IJSMapExecutor
    {
        string JavaScriptMapObject { get; }
    }

    internal static class JSMapExecutorExt
    {
        internal static CoreWebView2 coreWebView_;
        internal static string GetJSMap(this IJSMapExecutor i)
        {

            return string.Format("{0}_bridge", i.GetType().Name).ToLower(); ;
        }

        public static Func<string, string> EncodeScriptParam { get; set; } = (str) =>
        {
            return str.Replace("\\", "\\\\")
                .Replace("'", "\\'")
                .Replace("\t", "\\t")
                .Replace("\r", "\\r")
                .Replace("\n", "\\n");
        };

        public static string GetScriptForJavascriptMethodWithArgs(string methodName, object[] args)
        {
            var stringBuilder = new StringBuilder();
            stringBuilder.Append(methodName);
            stringBuilder.Append("(");
            if (args.Length > 0)
            {
                for (int i = 0; i < args.Length; i++)
                {
                    var obj = args[i];
                    if (obj == null)
                    {
                        stringBuilder.Append("null");
                    }
                    else
                    {
                        stringBuilder.Append(EncodeScriptParam(obj.toJson()));
                    }
                    stringBuilder.Append(", ");
                }

                //Remove the trailing comma
                stringBuilder.Remove(stringBuilder.Length - 2, 2);
            }

            stringBuilder.Append(");");

            return stringBuilder.ToString();
        }

        internal static async Task<string> Call(this IJSMapExecutor obj, [CallerMemberName] string method = "", params object[] args)
        {
            string script = string.Format("window.bridges.{0}.{1}", obj.JavaScriptMapObject, GetScriptForJavascriptMethodWithArgs(method, args));
            return await coreWebView_.ExecuteScriptAsync(script);
        }
    }
}

```

添加LiteGraphBridge.cs，负责与webapp中的lgraph_bridge.js互操作，包括节点映射，IO订阅等。

```csharp
using System.Runtime.InteropServices;
 
namespace hybrid_litegraph.bridge
{
    public class LiteGraphNode
    {
        [Newtonsoft.Json.JsonProperty("id")]
        public int fake_id { get; set; }
        public string title { get; set; }
        [Newtonsoft.Json.JsonProperty("type")]
        public string nodeType { get; set; }
        public decimal[] pos { get; set; }

        public int uid { get; set; }

    }


    public class LGraphLinkInfo
    {
        public int src { get; set; }
        public string outName { get; set; }
        public int dst { get; set; }
        public string inName { get; set; }
    }

    [ClassInterface(ClassInterfaceType.AutoDual)]
    [ComVisible(true)]
    public class LiteGraphBridge : IJSMapExecutor
    {
 
        public static LiteGraphBridge LGraphBridge { get; set; }

        public string JavaScriptMapObject => "lgraph_bridge";

        public async Task changeTheme(string themeId)
        {
            await this.Call(args: themeId);
        }

        public void onCanvasNodeSelected(string json)
        {
            var nodeInfo = json.fromJson<LiteGraphNode>();
            if (nodeInfo != null)
            {
                //TODO litegraph.js中选中节点触发，若需要native做出对应处理，请实现
            }
        }

        public LiteGraphBridge()
        {
            LGraphBridge = this;
        }

        public async Task clear()
        {
            await this.Call();
        }

        public async Task Load(string f)
        {
            //SelectedNode = null;
            await clear();
            //TODO 请实现自有图的方案加载
        }

        public async Task<string> createConnectionByLoad(LGraphLinkInfo linkInfo)
        {
            return await this.Call(args: linkInfo);
        }

        public async Task<string> createNodeByLoad(LiteGraphNode nodeInfo)
        {
            return await this.Call(args: nodeInfo);
        }

        /// <summary>
        /// litegraph.js创建节点后会触发该函数 请结合自有图创建native节点
        /// </summary>
        /// <param name="json"></param>
        /// <returns>native节点失败请返回-1，成功返回对应native节点ID</returns>
        public async Task<int> createNativeNode(string json)
        {
            var nodeInfo = json.fromJson<LiteGraphNode>();
            //todo 结合实际情况创建native节点
            // var node = pipeLine_.CreateNode(nodeInfo.nodeType);
            return await Task.FromResult(nodeInfo.fake_id);
        }

        /// <summary>
        /// litegraph.js中移除连线触发
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public async Task<bool> unSubscribe(string json)
        {
            var link = json.fromJson<LGraphLinkInfo>();
            //todo 结合实际情况管理native节点间的订阅关系
            return true;
        }

        /// <summary>
        /// litegraph.js节点间参数订阅触发
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public async Task<bool> subscribe(string json)
        {
            var link = json.fromJson<LGraphLinkInfo>();
            //todo 结合实际情况管理native节点间的订阅关系
            return true;
        }

        public async Task<bool> Save(string path)
        {
            //方案保存，结合实际情况实现
            return true;
        }

        public async Task<string> serialize()
        {
            return await this.Call();
            // return await Task.FromResult(pipeLine_.Subscribe(link.src, link.outName, link.dst, link.inName));
        }

        /// <summary>
        /// 向litegraph.js注册支持的io类型
        /// </summary>
        /// <returns></returns>
        public async Task changeSupportedTypes()
        {
            //请按实际支持类型注册，
            await this.Call(args: new object[] { new string[] { "int", "string", "float" } });
        }

        /// <summary>
        /// 向litegraph.js注册节点
        /// </summary>
        /// <param name="nodeInfo"></param>
        /// <returns></returns>
        private async Task registerNodeType(object nodeInfo)
        {
            await this.Call(args: new object[] { nodeInfo });
        }

        /// <summary>
        /// litegraph.js移除节点时触发
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public async Task<bool> removeNode(string json)
        {
            var node = json.fromJson<LiteGraphNode>();
            //根据实际情况移除native节点
            return true;
        }

        /// <summary>
        /// 向litegraph.js注册节点
        /// </summary>
        /// <returns></returns>
        private async Task loadNodeTypes()
        {
            //请根据自有图节点进行相关注册
            var nodeInfo = new
            {
                inputs = new object[] {
                    new string[] { "input0", "string" }, new string[] { "input1", "int" },new string[] { "input2", "float" } },
            
                outputs = new object[] {
                    new string[] { "output0", "string" }, new string[] { "output1", "int" },new string[] { "output2", "float" } },
                name = "test.testjob"
            };
            await registerNodeType(nodeInfo);
        }

        public async void init()
        {
            await changeSupportedTypes();
            await loadNodeTypes();
        }

    }
}

```

![](https://cdn.nlark.com/yuque/0/2025/png/52108939/1736075114062-1e6b54ba-6844-434a-add1-a64dd5ee8ffa.png)

<h5 id="hqRSb">示例本地创建节点并映射到webapp中</h5>
NavigationViewModel.cs中增加个AddTestDemo示例，用户通过点击WPF侧边栏的**+**将会通过bridge调用litegraph.js中的函数创建节点。

![](https://cdn.nlark.com/yuque/0/2025/png/52108939/1736075937932-d62aef4e-f872-4642-946f-dbe2b5567f60.png)

<h4 id="Ybeb7">Native下自有图框架与WPF间的互操作</h4>
以上介绍局限于用户交互层面，对于图的核心逻辑并无涉及。对于采用native开发的图如CGraph等还需要考虑如何进行托管语言于本机代码之间的互操作。篇幅受限不再展开讲了，感谢兴趣的可以查阅微软官方提供两个方案：

[https://learn.microsoft.com/zh-cn/dotnet/standard/native-interop/pinvoke](https://learn.microsoft.com/zh-cn/dotnet/standard/native-interop/pinvoke)

[https://learn.microsoft.com/zh-cn/cpp/dotnet/dotnet-programming-with-cpp-cli-visual-cpp?view=msvc-170](https://learn.microsoft.com/zh-cn/cpp/dotnet/dotnet-programming-with-cpp-cli-visual-cpp?view=msvc-170)

<h2 id="LQuVi">TODO</h2>
后续计划通过qt+cef实现跨平台方案

<h2 id="avAnN">附录</h2>
<h3 id="YbKhu">示例代码仓</h3>
[https://github.com/499940913/hybrid-litegraph](https://github.com/499940913/hybrid-litegraph)

<h3 id="pUJGR"><font style="color:rgb(25, 27, 31);">联系方式</font></h3>
<font style="color:rgb(25, 27, 31);">微信: 499940913</font>

<font style="color:rgb(25, 27, 31);">邮箱: a499940913@hotmail.com</font>

