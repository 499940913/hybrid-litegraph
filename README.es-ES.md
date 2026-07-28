<h2 id="Uezi0">Ejemplos</h2>

![](https://github.com/499940913/hybrid-litegraph/blob/main/image.png)

La siguiente imagen muestra el diagrama general de la arquitectura técnica:
![image](https://github.com/user-attachments/assets/288f9624-6587-47de-9f7d-4daaeec422da)
[Diseño detallado](https://deepwiki.com/499940913/hybrid-litegraph)
<h2 id="G3DcL">Referencias Externas</h2>
<h3 id="FnnBG">Editores de nodos en GitHub</h3>
[https://github.com/topics/node-editor](https://github.com/topics/node-editor)

![baklavajs](https://cdn.nlark.com/yuque/0/2025/png/52108939/1735998914767-535efd8f-c0ee-442c-8677-5c61791bbcbe.png)

![CodeWire](https://cdn.nlark.com/yuque/0/2025/png/52108939/1735999012015-caf47a79-e8f9-4c82-8841-c68e8e886018.png)

<h3 id="Lo9Xp">litegraph.js, el editor de nodos en ComfyUI</h3>
![ComfyUI](https://cdn.nlark.com/yuque/0/2025/png/52108939/1735999134795-a5a799dc-da99-4bc5-ab8d-4e56815549aa.png)

<font style="color:rgb(26, 26, 26);">El editor de nodos en ComfyUI depende del proyecto de código abierto litegraph.js.</font><font style="color:rgb(25, 27, 31);">Litegraph.js es una biblioteca de motor de grafos de nodos en Javascript que permite implementar una programación de Blueprints similar a la de </font>[<font style="color:rgb(25, 27, 31);">Unreal Engine</font>](https://zhida.zhihu.com/search?content_id=236189061&content_type=Article&match_order=1&q=%E8%99%9A%E5%B9%BB%E5%BC%95%E6%93%8E&zhida_source=entity)<font style="color:rgb(25, 27, 31);">, incluyendo un editor para construir y probar grafos de nodos, compatible con navegadores y Node.js, fácil de integrar en cualquier aplicación Web existente y capaz de ejecutar grafos de nodos sin necesidad del editor.</font>

![litegraph.js](https://cdn.nlark.com/yuque/0/2025/png/52108939/1735999216290-d61c82e5-9c13-46bd-9f96-1bbd4a47b47a.png)

<h4 id="IgSdx">Características principales de litegraph.js</h4>
+ <font style="color:rgb(25, 27, 31);">Renderizado en Canvas2D. Zoom y desplazamiento, facilitando el renderizado de interfaces complejas; puede usarse dentro de WebGLTexture</font>
+ <font style="color:rgb(25, 27, 31);">Editor fácil de usar. Caja de búsqueda, atajos de teclado, selección múltiple, menús contextuales...</font>
+ <font style="color:rgb(25, 27, 31);">Optimizado para soportar cientos de nodos por grafo, tanto en el editor como durante la ejecución</font>
+ <font style="color:rgb(25, 27, 31);">Temas personalizables. Colores, formas, fondo</font>
+ <font style="color:rgb(25, 27, 31);">Callbacks para cada acción/dibujo/evento para personalizar los nodos</font>
+ <font style="color:rgb(25, 27, 31);">Soporte para subgrafos, que contienen nodos del propio grafo</font>
+ <font style="color:rgb(25, 27, 31);">Sistema de modo en tiempo real. Oculta el grafo de nodos pero llama a los nodos para renderizar lo que deseen, útil para crear interfaces de usuario</font>
+ <font style="color:rgb(25, 27, 31);">Los grafos de nodos pueden ejecutarse en NodeJS</font>
+ <font style="color:rgb(25, 27, 31);">Nodos altamente personalizables. Colores, formas, ranuras verticales u horizontales, widgets, renderizado personalizado</font>
+ <font style="color:rgb(25, 27, 31);">Fácil integración en cualquier aplicación JS. Archivo único, sin dependencias</font>

<h4 id="xBRuU">Ricas extensiones de terceros</h4>
Gracias a la popularidad de ComfyUI, en comparación con otros editores de nodos de código abierto, litegraph.js cuenta con más desarrolladores externos que proporcionan complementos funcionales.

![quick-connections](https://cdn.nlark.com/yuque/0/2025/gif/52108939/1735999338617-05f02568-a5e1-4226-94fa-6ef9d240bb3c.gif)

![ComfyUI的插件市场](https://cdn.nlark.com/yuque/0/2025/png/52108939/1735970888540-da302b28-f9e9-4ee6-9211-0ddec947b571.png)

<h2 id="o69ki">Implementación de una aplicación cliente similar a ComfyUI</h2>
<h3 id="mYmiA">Selección Tecnológica</h3>
<h4 id="G5Sy3">Electron+Node.js+Python</h4>
[youtube](https://www.youtube.com/embed/Y2QcPt6L17k)

:::color3
Referencia a la implementación oficial de [ComfyUI Desktop](https://github.com/Comfy-Org/desktop).
:::

:::success
**Ventajas:**
:::

+ <font style="color:rgb(25, 27, 31);">Multiplataforma</font>
+ <font style="color:rgb(25, 27, 31);">Interacción Web pura, frameworks de frontend enriquecidos, interfaces visualmente impactantes</font>
+ <font style="color:rgb(25, 27, 31);">Lógica de negocio implementada en Python, con gran cantidad de infraestructura existente; ideal para desarrollo relacionado con IA, análisis de datos y aprendizaje profundo</font>
+ <font style="color:rgb(25, 27, 31);">Sin necesidad de compilación, fácil de depurar, desarrollo inmediato</font>

:::danger
**Desventajas:**
:::

+ <font style="color:rgb(25, 27, 31);">No es favorable para el desarrollo nativo, no es adecuado para la integración con frameworks de computación de grafos propios</font>
+ <font style="color:rgb(25, 27, 31);">La eficiencia y la experiencia no son tan buenas como las nativas</font>
+ <font style="color:rgb(25, 27, 31);">Requiere ciertos conocimientos de frontend, conlleva una curva de aprendizaje</font>

<h4 id="TSkc0">Qt+Cef</h4>
Interfaz de interacción implementada mediante Qt+CEF, donde el componente CEF se utiliza a través de la encapsulación [QCefView](https://cefview.github.io/QCefView/zh/docs/intros/) y los componentes de UI pueden imitarse mediante [FluentUI](https://github.com/zhuzichu520/FluentUI?tab=readme-ov-file).

![](https://cdn.nlark.com/yuque/0/2025/png/52108939/1735999568129-ac4433a0-aefe-4d82-ad12-ad3b73c92852.png)

**Referencias**

[https://cefview.github.io/QCefView/zh/docs/intros/](https://cefview.github.io/QCefView/zh/docs/intros/)

[https://github.com/zhuzichu520/FluentUI?tab=readme-ov-file](https://github.com/zhuzichu520/FluentUI?tab=readme-ov-file)

:::success
**Ventajas:**
:::

+ <font style="color:rgb(25, 27, 31);">Multiplataforma</font>
+ <font style="color:rgb(25, 27, 31);">Interfaz QML, efectos visuales atractivos</font>
+ <font style="color:rgb(25, 27, 31);">Documentación abundante y completa</font>
+ <font style="color:rgb(25, 27, 31);">Fácil integración de frameworks de grafos nativos, lógica de interoperabilidad sencilla entre WebView y Qt</font>
+ <font style="color:rgb(25, 27, 31);">Aplicación nativa, experiencia superior a Electron</font>

:::danger
**Desventajas:**
:::

+ <font style="color:rgb(25, 27, 31);">Menor eficiencia de desarrollo, menos flexibilidad y conveniencia que el Web puro</font>
+ <font style="color:rgb(25, 27, 31);">Costo de aprendizaje y carga mental de C++</font>

<h4 id="vJqDM">WPF+Webview2</h4>
Implementado con el ecosistema de Microsoft WPF+Webview2, utilizando [WPF Fluent UI](https://github.com/lepoco/wpfui) para los componentes de UI.

![](https://cdn.nlark.com/yuque/0/2025/png/52108939/1735981050089-418fd747-64ee-43fb-99dc-7d904c63fb76.png)

**Referencias**

[https://learn.microsoft.com/zh-cn/microsoft-edge/webview2/get-started/wpf](https://learn.microsoft.com/zh-cn/microsoft-edge/webview2/get-started/wpf)

[https://github.com/lepoco/wpfui](https://github.com/lepoco/wpfui)

:::success
**Ventajas:**
:::

+ <font style="color:rgb(25, 27, 31);">Desarrollo eficiente, gestión de paquetes rica y componentes de terceros</font>
+ <font style="color:rgb(25, 27, 31);">Interfaz atractiva</font>
+ <font style="color:rgb(25, 27, 31);">Estabilidad y confiabilidad de Microsoft, documentación abundante y completa</font>
+ <font style="color:rgb(25, 27, 31);">Lógica de interacción sencilla entre WebView y WPF</font>
+ <font style="color:rgb(25, 27, 31);">Experiencia superior a Electron</font>

:::danger
**Desventajas:**
:::

+ <font style="color:rgb(25, 27, 31);">En comparación con la conveniencia de la interoperabilidad directa de Qt y Native, C# y C++ requieren una capa adicional de lógica "pegamento"</font>
+ <font style="color:rgb(25, 27, 31);">No es multiplataforma</font>

<h3 id="hLyvP">Camino de la Imitación</h3>
Como desarrollador de Windows durante muchos años, utilizaremos WPF+Webview2 para implementar la GUI del cliente, mientras que el framework de grafos subyacente seguirá implementándose en C++.

<h4 id="QaNRj">Homenaje a la Apariencia</h4>
Asumiendo que el lector ya ha creado un proyecto de aplicación WPF siguiendo el [tutorial de Microsoft](https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/get-started/create-app-visual-studio?view=netdesktop-6.0) y lo tiene abierto. Ahora, crearemos una carcasa básica de ComfyUI al estilo Fluent UI, compuesta principalmente por una barra lateral, una barra de título y un área de espacio de trabajo de flujo.

![](https://cdn.nlark.com/yuque/0/2025/png/52108939/1735983851314-44bfd2e3-2bfc-4f9b-afa5-307e003c264a.png)

Primero, instale todos los paquetes necesarios mediante comandos nuget ([Referencia de uso del Administrador de Paquetes de VS](https://learn.microsoft.com/zh-cn/nuget/consume-packages/install-use-packages-powershell)).

```powershell
Install-Package WPF-UI
Install-Package Microsoft.Extensions.DependencyInjection
Install-Package CommunityToolkit.Mvvm
Install-Package dotnetCampus.AsyncWorkerCollection
Install-Package Newtonsoft.Json
Install-Package Microsoft.Web.WebView2
```

Tras la instalación exitosa, las dependencias del proyecto serán como se muestra en la imagen:

![](https://cdn.nlark.com/yuque/0/2025/png/52108939/1736002962805-ca33148a-f606-4558-a92b-46bc559ddb0f.png)

Abra App.xaml en el proyecto y ajuste el código xaml de la siguiente manera:

```xml
<Application
    ...// esta parte es la descripción xaml original, no la toque. Reemplace a partir de aquí
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

Siga el tutorial de [Navigation View | WPF UI](https://wpfui.lepo.co/documentation/navigation-view.html#using-navigation-in-the-mvvm) para crear la vista correspondiente. Los pasos específicos son:

Cree un directorio ViewModel y agregue la clase NavigationViewModel:

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

Cree un directorio Services y agregue la clase PageService:

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

Cree el directorio Services y haga clic derecho en él para agregar un nuevo elemento MainPage:

![](https://cdn.nlark.com/yuque/0/2025/png/52108939/1736050766083-3ec9ec35-0863-47ba-a29f-0a77ac44117e.png)

Seleccione App.xaml, vea el código y modifíquelo de la siguiente manera:

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
    /// Interaction logic for App.xaml
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

Ajuste el xaml de MainWindow y el código correspondiente:

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
                </Menu
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
    /// Interaction logic for MainWindow.xaml
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

Finalmente, ajuste la lógica de NavigationViewModel.cs para vincular el elemento Home con el MainPage creado:

![](https://cdn.nlark.com/yuque/0/2025/png/52108939/1736053119470-f2919045-2423-4dda-863a-84860fed11c6.png)

Después de completar los pasos anteriores, compile y ejecute para ver la interfaz básica similar a ComfyUI:

![](https://cdn.nlark.com/yuque/0/2025/png/52108939/1736053220128-b8220023-30f7-47f8-86d6-7e1edef7e73e.png)

<h4 id="nbCus">Incrustar Webview2 y ejecutar litegraph.js</h4>
Abra la página Pages/MainPage.xaml y agregue el contenedor webview2:

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

Descargue los [recursos de la webapp](https://github.com/499940913/hybrid-litegraph/tree/main/hybrid-litegraph/web-app) que ya he procesado y agréguelos al proyecto:

![](https://cdn.nlark.com/yuque/0/2025/png/52108939/1736057788325-a79c9475-2f80-4f2b-b319-92d94633a51b.png)

Modifique el código de MainPage.xaml.cs para agregar la lógica de carga de recursos locales de webview2. Sobre los métodos de carga de recursos locales de Webview2, [Microsoft ofrece varias formas,](https://learn.microsoft.com/zh-cn/microsoft-edge/webview2/concepts/working-with-local-content?source=recommendations&tabs=dotnetcsharp) cuyas ventajas y desventajas son las siguientes:

| <font style="color:rgb(22, 22, 22);">Escenario de aplicación</font> | <font style="color:rgb(22, 22, 22);">Navegar a URL de archivo</font> | <font style="color:rgb(22, 22, 22);">Navegar a cadena HTML</font> | <font style="color:rgb(22, 22, 22);">Mediante mapeo de nombre de host virtual</font> | <font style="color:rgb(22, 22, 22);">Mediante </font>`<font style="color:rgb(22, 22, 22);">WebResourceRequested</font>` |
| :--- | :---: | :---: | :---: | :---: |
| <font style="color:rgb(22, 22, 22);">API de DOM basada en el origen</font> | <font style="color:rgb(22, 22, 22);">✔️</font> | <font style="color:rgb(22, 22, 22);">❌</font> | <font style="color:rgb(22, 22, 22);">✔️</font> | <font style="color:rgb(22, 22, 22);">✔️</font> |
| <font style="color:rgb(22, 22, 22);">API de DOM que requiere contexto seguro</font> | <font style="color:rgb(22, 22, 22);">❌</font> | <font style="color:rgb(22, 22, 22);">❌</font> | <font style="color:rgb(22, 22, 22);">✔️</font> | <font style="color:rgb(22, 22, 22);">✔️</font> |
| <font style="color:rgb(22, 22, 22);">Contenido dinámico</font> | <font style="color:rgb(22, 22, 22);">❌</font> | <font style="color:rgb(22, 22, 22);">✔️</font> | <font style="color:rgb(22, 22, 22);">❌</font> | <font style="color:rgb(22, 22, 22);">✔️</font> |
| <font style="color:rgb(22, 22, 22);">Otros recursos web</font> | <font style="color:rgb(22, 22, 22);">✔️</font> | <font style="color:rgb(22, 22, 22);">❌</font> | <font style="color:rgb(22, 22, 22);">✔️</font> | <font style="color:rgb(22, 22, 22);">✔️</font> |
| <font style="color:rgb(22, 22, 22);">Otros recursos web analizados en el proceso WebView2</font> | <font style="color:rgb(22, 22, 22);">✔️</font> | <font style="color:rgb(22, 22, 22);">❌</font> | <font style="color:rgb(22, 22, 22);">✔️</font> | <font style="color:rgb(22, 22, 22);">❌</font> |

Utilizaré la <font style="color:rgb(22, 22, 22);">solución de mapeo de nombre de host virtual, el código es el siguiente:</font>

```csharp
using dotnetCampus.Threading;
using Microsoft.Web.WebView2.Core;
using System.Windows;
using System.Windows.Controls;

namespace hybrid_litegraph.Pages
{
    /// <summary>
    /// Interaction logic for MainPage.xaml
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
**💡****PS: CEF también proporciona una [solución similar para cargar recursos locales](https://cefview.github.io/QCefView/zh/docs/guide/LoadWebResource#3-%E6%B7%BB%E5%8A%A0%E6%9C%AC%E5%9C%B0%E6%96%87%E4%BB%B6%E7%9B%AE%E5%BD%95%E5%88%B0url%E7%9A%84%E6%98%A0%E5%B0%84)**
:::

![](https://cdn.nlark.com/yuque/0/2025/png/52108939/1736058681664-59eb4394-808d-4337-8158-14810f5e9834.png)

Después de completar los pasos anteriores, compile y ejecute para ver con éxito el grafo de cuadrícula estándar de litegraph.js.

![](https://cdn.nlark.com/yuque/0/2025/png/52108939/1736059132191-2c624ae0-c49e-42d1-8f0c-d61c03a32523.png)

<h4 id="EJLD8">Crear un bridge para implementar la interoperabilidad entre WebView2 y WPF</h4>
El denominado Bridge es el puente que comunica la parte Nativa (en este caso, el host WPF) y la aplicación Web. Principalmente proporciona interfaces para que JavaScript llame a funciones <font style="color:rgb(77, 77, 77);">Nativas</font>, permitiendo que la parte frontend del desarrollo híbrido utilice fácilmente las funciones nativas. En pocas palabras, permite que el Native llame a JS y JS llame al Native dentro de la APP, sirviendo como un canal de <font style="color:rgb(78, 161, 219) !important;">comunicación bidireccional</font>.

Antes de implementar el bridge, es necesario conocer las capacidades de acceso mutuo que ofrece Webview2. Para más detalles, consulte la [documentación oficial](https://learn.microsoft.com/zh-cn/microsoft-edge/webview2/how-to/communicate-btwn-web-native).

<h5 id="KK40g"><font style="color:rgb(22, 22, 22);">Llamar al código Web desde el código nativo mediante </font>[ExecuteScriptAsync](https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.web.webview2.wpf.webview2.executescriptasync)</h5>
Se puede utilizar la función [ExecuteScriptAsync](https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.web.webview2.wpf.webview2.executescriptasync) proporcionada por Webview2 para acceder directamente a objetos js o llamar funciones en la aplicación web cargada.

<font style="color:rgb(22, 22, 22);">Por ejemplo, el siguiente código ejecuta un script que genera una cadena. La cadena generada incluye las comillas iniciales, las comillas finales y las barras diagonales de escape:</font>

```csharp
string result = await coreWebView2.ExecuteScriptAsync(@"'example'");
Debug.Assert(result == "\"example\"");
```

<h5 id="QYRAO"><font style="color:rgb(22, 22, 22);">Llamar al código nativo desde el código Web</font></h5>
Utilice la función [AddHostObjectToScript](https://learn.microsoft.com/zh-cn/microsoft-edge/webview2/how-to/hostobject?tabs=win32) <font style="color:rgb(22, 22, 22);">para registrar un objeto nativo en el contenedor WebView, donde el objeto nativo debe declarar su tipo y definir sus propiedades según las normas del [Modelo de Objetos Componentes (COM)](https://learn.microsoft.com/zh-cn/windows/win32/com/component-object-model--com--portal) de Microsoft. En esencia, implementa una capacidad similar a RPC a través del modelo de interacción estándar de lenguaje independiente IDL. La implementación de objetos COM proporcionada oficialmente es muy engorrosa y no se recomienda; se puede lograr la declaración de la siguiente manera:

```csharp
    [ClassInterface(ClassInterfaceType.AutoDual)]// comunicación dúplex
    [ComVisible(true)]// exposición visible de COM
    public class Test
    {
        // Si se desea exponer una función de objeto a la webapp, basta con definir la accesibilidad como public
        public void Func()
        {
            MessageBox.Show("Func call");
        }

        // Propiedades accesibles expuestas a la webapp
        public object Property { get; set; }
    }
   webView.CoreWebView2.AddHostObjectToScript("test", new Test());// esto creará en js
// el campo global window.chrome.webview.hostObjects.test; a través de este campo se pueden llamar las propiedades o funciones declaradas anteriormente
```

Después de completar el código anterior, compile y ejecute, luego seleccione el programa, presione **<font style="color:rgb(22, 22, 22);">Ctrl+Shift+I</font>** para abrir las herramientas de depuración de Edge e ingrese `await window.chrome.webview.hostObjects.test.Func()` en la consola para llamar a la lógica nativa.

:::danger
**ps: [Interoperabilidad](https://cefview.github.io/QCefView/zh/docs/guide/Interoperability) en CEF**
:::

<h5 id="awk4S">Implementar el bridge para completar la interoperabilidad con litegraph.js</h5>
Cree un directorio bridge en el proyecto y añada la clase JSExecutor.cs, cuyo propósito principal es encapsular la lógica de llamada de funciones js para simplificar la operación.

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

Agregue LiteGraphBridge.cs, encargado de la interoperabilidad con lgraph_bridge.js en la webapp, incluyendo el mapeo de nodos, suscripciones de IO, etc.

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
                //TODO se activa al seleccionar un nodo en litegraph.js; implemente si es necesario el procesamiento nativo
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
            //TODO implemente el esquema de carga de su propio grafo
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
        /// Esta función se activa después de que litegraph.js crea un nodo. Por favor, cree un nodo nativo basándose en su propio grafo.
        /// </summary>
        /// <param name="json"></param>
        /// <returns>Regrese -1 si falla la creación del nodo nativo, de lo contrario regrese el ID del nodo nativo correspondiente</returns>
        public async Task<int> createNativeNode(string json)
        {
            var nodeInfo = json.fromJson<LiteGraphNode>();
            //todo cree el nodo nativo según el caso real
            // var node = pipeLine_.CreateNode(nodeInfo.nodeType);
            return await Task.FromResult(nodeInfo.fake_id);
        }

        /// <summary>
        /// Se activa al eliminar una conexión en litegraph.js
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public async Task<bool> unSubscribe(string json)
        {
            var link = json.fromJson<LGraphLinkInfo>();
            //todo gestione las relaciones de suscripción entre nodos nativos según el caso real
            return true;
        }

        /// <summary>
        /// Se activa la suscripción de parámetros entre nodos en litegraph.js
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public async Task<bool> subscribe(string json)
        {
            var link = json.fromJson<LGraphLinkInfo>();
            //todo gestione las relaciones de suscripción entre nodos nativos según el caso real
            return true;
        }

        public async Task<bool> Save(string path)
        {
            // Guardado del esquema, implemente según el caso real
            return true;
        }

        public async Task<string> serialize()
        {
            return await this.Call();
            // return await Task.FromResult(pipeLine_.Subscribe(link.src, link.outName, link.dst, link.inName));
        }

        /// <summary>
        /// Registra los tipos de IO soportados en litegraph.js
        /// </summary>
        /// <returns></returns>
        public async Task changeSupportedTypes()
        {
            // Registre según los tipos realmente soportados,
            await this.Call(args: new object[] { new string[] { "int", "string", "float" } });
        }

        /// <summary>
        /// Registra nodos en litegraph.js
        /// </summary>
        /// <param name="nodeInfo"></param>
        /// <returns></returns>
        private async Task registerNodeType(object nodeInfo)
        {
            await this.Call(args: new object[] { nodeInfo });
        }

        /// <summary>
        /// Se activa al eliminar un nodo en litegraph.js
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public async Task<bool> removeNode(string json)
        {
            var node = json.fromJson<LiteGraphNode>();
            // Elimine el nodo nativo según el caso real
            return true;
        }

        /// <summary>
        /// Registra nodos en litegraph.js
        /// </summary>
        /// <returns></returns>
        private async Task loadNodeTypes()
        {
            // Realice el registro correspondiente según los nodos de su propio grafo
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

<h5 id="hqRSb">Ejemplo de creación de nodo local y mapeo en la webapp</h5>
Añada un ejemplo AddTestDemo en NavigationViewModel.cs; cuando el usuario haga clic en el botón **+** de la barra lateral de WPF, se llamará a una función en litegraph.js a través del bridge para crear un nodo.

![](https://cdn.nlark.com/yuque/0/2025/png/52108939/1736075937932-d62aef4e-f872-4642-946f-dbe2b5567f60.png)

<h4 id="Ybeb7">Interoperabilidad entre el framework de grafos propio en Native y WPF</h4>
Lo anterior se limita a la capa de interacción del usuario y no aborda la lógica central del grafo. Para grafos desarrollados de forma nativa, como CGraph, es necesario considerar cómo realizar la interoperabilidad entre el lenguaje gestionado y el código nativo. Debido al espacio, no entraré en detalles; los interesados pueden consultar las dos soluciones proporcionadas por Microsoft:

[https://learn.microsoft.com/zh-cn/dotnet/standard/native-interop/pinvoke](https://learn.microsoft.com/zh-cn/dotnet/standard/native-interop/pinvoke)

[https://learn.microsoft.com/zh-cn/cpp/dotnet/dotnet-programming-with-cpp-cli-visual-cpp?view=msvc-170](https://learn.microsoft.com/zh-cn/cpp/dotnet/dotnet-programming-with-cpp-cli-visual-cpp?view=msvc-170)

<h2 id="LQuVi">TODO</h2>
El plan posterior es implementar una solución multiplataforma mediante qt+cef.

<h2 id="avAnN">Apéndice</h2>
<h3 id="YbKhu">Repositorio de código de ejemplo</h3>
[https://github.com/499940913/hybrid-litegraph](https://github.com/499940913/hybrid-litegraph)

<h3 id="pUJGR"><font style="color:rgb(25, 27, 31);">Contacto</font></h3>
<font style="color:rgb(25, 27, 31);">WeChat: 499940913</font>

<font style="color:rgb(25, 27, 31);">Email: a499940913@hotmail.com</font>
