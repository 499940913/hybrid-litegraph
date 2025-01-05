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
