(function (global) {
    var ColorPalettes = (global.ColorPalettes = {
        dark: {
            id: 'dark',
            name: 'Dark (Default)',
            colors: {
                node_slot: {
                    CLIP: '#FFD500', // bright yellow
                    CLIP_VISION: '#A8DADC', // light blue-gray
                    CLIP_VISION_OUTPUT: '#ad7452', // rusty brown-orange
                    CONDITIONING: '#FFA931', // vibrant orange-yellow
                    CONTROL_NET: '#6EE7B7', // soft mint green
                    IMAGE: '#64B5F6', // bright sky blue
                    LATENT: '#FF9CF9', // light pink-purple
                    MASK: '#81C784', // muted green
                    MODEL: '#B39DDB', // light lavender-purple
                    STYLE_MODEL: '#C2FFAE', // light green-yellow
                    VAE: '#FF6E6E', // bright red
                    NOISE: '#B0B0B0', // gray
                    GUIDER: '#66FFFF', // cyan
                    SAMPLER: '#ECB4B4', // very soft red
                    SIGMAS: '#CDFFCD', // soft lime green
                    TAESD: '#DCC274' // cheesecake
                },
                litegraph_base: {
                    BACKGROUND_IMAGE:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQBJREFUeNrs1rEKwjAUhlETUkj3vP9rdmr1Ysammk2w5wdxuLgcMHyptfawuZX4pJSWZTnfnu/lnIe/jNNxHHGNn//HNbbv+4dr6V+11uF527arU7+u63qfa/bnmh8sWLBgwYJlqRf8MEptXPBXJXa37BSl3ixYsGDBMliwFLyCV/DeLIMFCxYsWLBMwSt4Be/NggXLYMGCBUvBK3iNruC9WbBgwYJlsGApeAWv4L1ZBgsWLFiwYJmCV/AK3psFC5bBggULloJX8BpdwXuzYMGCBctgwVLwCl7Be7MMFixYsGDBsu8FH1FaSmExVfAxBa/gvVmwYMGCZbBg/W4vAQYA5tRF9QYlv/QAAAAASUVORK5CYII=',
                    CLEAR_BACKGROUND_COLOR: '#222',
                    NODE_TITLE_COLOR: '#999',
                    NODE_SELECTED_TITLE_COLOR: '#FFF',
                    NODE_TEXT_SIZE: 14,
                    NODE_TEXT_COLOR: '#AAA',
                    NODE_SUBTEXT_SIZE: 12,
                    NODE_DEFAULT_COLOR: '#333',
                    NODE_DEFAULT_BGCOLOR: '#353535',
                    NODE_DEFAULT_BOXCOLOR: '#666',
                    NODE_DEFAULT_SHAPE: 'box',
                    NODE_BOX_OUTLINE_COLOR: '#FFF',
                    NODE_BYPASS_BGCOLOR: '#FF00FF',
                    NODE_ERROR_COLOUR: '#E00',
                    DEFAULT_SHADOW_COLOR: 'rgba(0,0,0,0.5)',
                    DEFAULT_GROUP_FONT: 24,

                    WIDGET_BGCOLOR: '#222',
                    WIDGET_OUTLINE_COLOR: '#666',
                    WIDGET_TEXT_COLOR: '#DDD',
                    WIDGET_SECONDARY_TEXT_COLOR: '#999',

                    LINK_COLOR: '#9A9',
                    EVENT_LINK_COLOR: '#A86',
                    CONNECTING_LINK_COLOR: '#AFA',

                    BADGE_FG_COLOR: '#FFF',
                    BADGE_BG_COLOR: '#0F1F0F'
                },
                comfy_base: {
                    'fg-color': '#fff',
                    'bg-color': '#202020',
                    'comfy-menu-bg': '#353535',
                    'comfy-menu-secondary-bg': '#303030',
                    'comfy-input-bg': '#222',
                    'input-text': '#ddd',
                    'descrip-text': '#999',
                    'drag-text': '#ccc',
                    'error-text': '#ff4444',
                    'border-color': '#4e4e4e',
                    'tr-even-bg-color': '#222',
                    'tr-odd-bg-color': '#353535',
                    'content-bg': '#4e4e4e',
                    'content-fg': '#fff',
                    'content-hover-bg': '#222',
                    'content-hover-fg': '#fff',
                    'bar-shadow': 'rgba(16, 16, 16, 0.5) 0 0 0.5rem'
                }
            }
        },
        light: {
            id: 'light',
            name: 'Light',
            colors: {
                node_slot: {
                    CLIP: '#FFA726', // orange
                    CLIP_VISION: '#5C6BC0', // indigo
                    CLIP_VISION_OUTPUT: '#8D6E63', // brown
                    CONDITIONING: '#EF5350', // red
                    CONTROL_NET: '#66BB6A', // green
                    IMAGE: '#42A5F5', // blue
                    LATENT: '#AB47BC', // purple
                    MASK: '#9CCC65', // light green
                    MODEL: '#7E57C2', // deep purple
                    STYLE_MODEL: '#D4E157', // lime
                    VAE: '#FF7043' // deep orange
                },
                litegraph_base: {
                    BACKGROUND_IMAGE:
                        'data:image/gif;base64,R0lGODlhZABkALMAAAAAAP///+vr6+rq6ujo6Ofn5+bm5uXl5d3d3f///wAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAkALAAAAABkAGQAAAT/UMhJq7046827HkcoHkYxjgZhnGG6si5LqnIM0/fL4qwwIMAg0CAsEovBIxKhRDaNy2GUOX0KfVFrssrNdpdaqTeKBX+dZ+jYvEaTf+y4W66mC8PUdrE879f9d2mBeoNLfH+IhYBbhIx2jkiHiomQlGKPl4uZe3CaeZifnnijgkESBqipqqusra6vsLGys62SlZO4t7qbuby7CLa+wqGWxL3Gv3jByMOkjc2lw8vOoNSi0czAncXW3Njdx9Pf48/Z4Kbbx+fQ5evZ4u3k1fKR6cn03vHlp7T9/v8A/8Gbp4+gwXoFryXMB2qgwoMMHyKEqA5fxX322FG8tzBcRnMW/zlulPbRncmQGidKjMjyYsOSKEF2FBlJQMCbOHP6c9iSZs+UnGYCdbnSo1CZI5F64kn0p1KnTH02nSoV3dGTV7FFHVqVq1dtWcMmVQZTbNGu72zqXMuW7danVL+6e4t1bEy6MeueBYLXrNO5Ze36jQtWsOG97wIj1vt3St/DjTEORss4nNq2mDP3e7w4r1bFkSET5hy6s2TRlD2/mSxXtSHQhCunXo26NevCpmvD/UU6tuullzULH76q92zdZG/Ltv1a+W+osI/nRmyc+fRi1Xdbh+68+0vv10dH3+77KD/i6IdnX669/frn5Zsjh4/2PXju8+8bzc9/6fj27LFnX11/+IUnXWl7BJfegm79FyB9JOl3oHgSklefgxAC+FmFGpqHIYcCfkhgfCohSKKJVo044YUMttggiBkmp6KFXw1oII24oYhjiDByaKOOHcp3Y5BD/njikSkO+eBREQAAOw==',
                    CLEAR_BACKGROUND_COLOR: 'lightgray',
                    NODE_TITLE_COLOR: '#222',
                    NODE_SELECTED_TITLE_COLOR: '#000',
                    NODE_TEXT_SIZE: 14,
                    NODE_TEXT_COLOR: '#444',
                    NODE_SUBTEXT_SIZE: 12,
                    NODE_DEFAULT_COLOR: '#F7F7F7',
                    NODE_DEFAULT_BGCOLOR: '#F5F5F5',
                    NODE_DEFAULT_BOXCOLOR: '#CCC',
                    NODE_DEFAULT_SHAPE: 'box',
                    NODE_BOX_OUTLINE_COLOR: '#000',
                    NODE_BYPASS_BGCOLOR: '#FF00FF',
                    NODE_ERROR_COLOUR: '#E00',
                    DEFAULT_SHADOW_COLOR: 'rgba(0,0,0,0.1)',
                    DEFAULT_GROUP_FONT: 24,

                    WIDGET_BGCOLOR: '#D4D4D4',
                    WIDGET_OUTLINE_COLOR: '#999',
                    WIDGET_TEXT_COLOR: '#222',
                    WIDGET_SECONDARY_TEXT_COLOR: '#555',

                    LINK_COLOR: '#4CAF50',
                    EVENT_LINK_COLOR: '#FF9800',
                    CONNECTING_LINK_COLOR: '#2196F3',

                    BADGE_FG_COLOR: '#000',
                    BADGE_BG_COLOR: '#FFF'
                },
                comfy_base: {
                    'fg-color': '#222',
                    'bg-color': '#DDD',
                    'comfy-menu-bg': '#F5F5F5',
                    'comfy-menu-secondary-bg': '#EEE',
                    'comfy-input-bg': '#C9C9C9',
                    'input-text': '#222',
                    'descrip-text': '#444',
                    'drag-text': '#555',
                    'error-text': '#F44336',
                    'border-color': '#888',
                    'tr-even-bg-color': '#f9f9f9',
                    'tr-odd-bg-color': '#fff',
                    'content-bg': '#e0e0e0',
                    'content-fg': '#222',
                    'content-hover-bg': '#adadad',
                    'content-hover-fg': '#222',
                    'bar-shadow': 'rgba(16, 16, 16, 0.25) 0 0 0.5rem'
                }
            }
        },
        solarized: {
            id: 'solarized',
            name: 'Solarized',
            colors: {
                node_slot: {
                    CLIP: '#2AB7CA', // light blue
                    CLIP_VISION: '#6c71c4', // blue violet
                    CLIP_VISION_OUTPUT: '#859900', // olive green
                    CONDITIONING: '#d33682', // magenta
                    CONTROL_NET: '#d1ffd7', // light mint green
                    IMAGE: '#5940bb', // deep blue violet
                    LATENT: '#268bd2', // blue
                    MASK: '#CCC9E7', // light purple-gray
                    MODEL: '#dc322f', // red
                    STYLE_MODEL: '#1a998a', // teal
                    UPSCALE_MODEL: '#054A29', // dark green
                    VAE: '#facfad' // light pink-orange
                },
                litegraph_base: {
                    NODE_TITLE_COLOR: '#fdf6e3', // Base3
                    NODE_SELECTED_TITLE_COLOR: '#A9D400',
                    NODE_TEXT_SIZE: 14,
                    NODE_TEXT_COLOR: '#657b83', // Base00
                    NODE_SUBTEXT_SIZE: 12,
                    NODE_DEFAULT_COLOR: '#094656',
                    NODE_DEFAULT_BGCOLOR: '#073642', // Base02
                    NODE_DEFAULT_BOXCOLOR: '#839496', // Base0
                    NODE_DEFAULT_SHAPE: 'box',
                    NODE_BOX_OUTLINE_COLOR: '#fdf6e3', // Base3
                    NODE_BYPASS_BGCOLOR: '#FF00FF',
                    NODE_ERROR_COLOUR: '#E00',
                    DEFAULT_SHADOW_COLOR: 'rgba(0,0,0,0.5)',
                    DEFAULT_GROUP_FONT: 24,

                    WIDGET_BGCOLOR: '#002b36', // Base03
                    WIDGET_OUTLINE_COLOR: '#839496', // Base0
                    WIDGET_TEXT_COLOR: '#fdf6e3', // Base3
                    WIDGET_SECONDARY_TEXT_COLOR: '#93a1a1', // Base1

                    LINK_COLOR: '#2aa198', // Solarized Cyan
                    EVENT_LINK_COLOR: '#268bd2', // Solarized Blue
                    CONNECTING_LINK_COLOR: '#859900' // Solarized Green
                },
                comfy_base: {
                    'fg-color': '#fdf6e3', // Base3
                    'bg-color': '#002b36', // Base03
                    'comfy-menu-bg': '#073642', // Base02
                    'comfy-menu-secondary-bg': '#06323D',
                    'comfy-input-bg': '#002b36', // Base03
                    'input-text': '#93a1a1', // Base1
                    'descrip-text': '#586e75', // Base01
                    'drag-text': '#839496', // Base0
                    'error-text': '#dc322f', // Solarized Red
                    'border-color': '#657b83', // Base00
                    'tr-even-bg-color': '#002b36',
                    'tr-odd-bg-color': '#073642',
                    'content-bg': '#657b83',
                    'content-fg': '#fdf6e3',
                    'content-hover-bg': '#002b36',
                    'content-hover-fg': '#fdf6e3',
                    'bar-shadow': 'rgba(16, 16, 16, 0.5) 0 0 0.5rem'
                }
            }
        },
        arc: {
            id: 'arc',
            name: 'Arc',
            colors: {
                node_slot: {
                    BOOLEAN: '',
                    CLIP: '#eacb8b',
                    CLIP_VISION: '#A8DADC',
                    CLIP_VISION_OUTPUT: '#ad7452',
                    CONDITIONING: '#cf876f',
                    CONTROL_NET: '#00d78d',
                    CONTROL_NET_WEIGHTS: '',
                    FLOAT: '',
                    GLIGEN: '',
                    IMAGE: '#80a1c0',
                    IMAGEUPLOAD: '',
                    INT: '',
                    LATENT: '#b38ead',
                    LATENT_KEYFRAME: '',
                    MASK: '#a3bd8d',
                    MODEL: '#8978a7',
                    SAMPLER: '',
                    SIGMAS: '',
                    STRING: '',
                    STYLE_MODEL: '#C2FFAE',
                    T2I_ADAPTER_WEIGHTS: '',
                    TAESD: '#DCC274',
                    TIMESTEP_KEYFRAME: '',
                    UPSCALE_MODEL: '',
                    VAE: '#be616b'
                },
                litegraph_base: {
                    BACKGROUND_IMAGE:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABcklEQVR4nO3YMUoDARgF4RfxBqZI6/0vZqFn0MYtrLIQMFN8U6V4LAtD+Jm9XG/v30OGl2e/AP7yevz4+vx45nvgF/+QGITEICQGITEIiUFIjNNC3q43u3/YnRJyPOzeQ+0e220nhRzReC8e7R7bbdvl+Jal1Bs46jEIiUFIDEJiEBKDkBhKPbZT6qHdptRTu02p53DUYxASg5AYhMQgJAYhMZR6bKfUQ7tNqad2m1LP4ajHICQGITEIiUFIDEJiKPXYTqmHdptST+02pZ7DUY9BSAxCYhASg5AYhMRQ6rGdUg/tNqWe2m1KPYejHoOQGITEICQGITEIiaHUYzulHtptSj2125R6Dkc9BiExCIlBSAxCYhASQ6nHdko9tNuUemq3KfUcjnoMQmIQEoOQGITEICSGUo/tlHpotyn11G5T6jkc9RiExCAkBiExCIlBSAylHtsp9dBuU+qp3abUczjqMQiJQUgMQmIQEoOQGITE+AHFISNQrFTGuwAAAABJRU5ErkJggg==',
                    CLEAR_BACKGROUND_COLOR: '#2b2f38',
                    NODE_TITLE_COLOR: '#b2b7bd',
                    NODE_SELECTED_TITLE_COLOR: '#FFF',
                    NODE_TEXT_SIZE: 14,
                    NODE_TEXT_COLOR: '#AAA',
                    NODE_SUBTEXT_SIZE: 12,
                    NODE_DEFAULT_COLOR: '#2b2f38',
                    NODE_DEFAULT_BGCOLOR: '#242730',
                    NODE_DEFAULT_BOXCOLOR: '#6e7581',
                    NODE_DEFAULT_SHAPE: 'box',
                    NODE_BOX_OUTLINE_COLOR: '#FFF',
                    NODE_BYPASS_BGCOLOR: '#FF00FF',
                    NODE_ERROR_COLOUR: '#E00',
                    DEFAULT_SHADOW_COLOR: 'rgba(0,0,0,0.5)',
                    DEFAULT_GROUP_FONT: 22,
                    WIDGET_BGCOLOR: '#2b2f38',
                    WIDGET_OUTLINE_COLOR: '#6e7581',
                    WIDGET_TEXT_COLOR: '#DDD',
                    WIDGET_SECONDARY_TEXT_COLOR: '#b2b7bd',
                    LINK_COLOR: '#9A9',
                    EVENT_LINK_COLOR: '#A86',
                    CONNECTING_LINK_COLOR: '#AFA'
                },
                comfy_base: {
                    'fg-color': '#fff',
                    'bg-color': '#2b2f38',
                    'comfy-menu-bg': '#242730',
                    'comfy-menu-secondary-bg': '#22252E',
                    'comfy-input-bg': '#2b2f38',
                    'input-text': '#ddd',
                    'descrip-text': '#b2b7bd',
                    'drag-text': '#ccc',
                    'error-text': '#ff4444',
                    'border-color': '#6e7581',
                    'tr-even-bg-color': '#2b2f38',
                    'tr-odd-bg-color': '#242730',
                    'content-bg': '#6e7581',
                    'content-fg': '#fff',
                    'content-hover-bg': '#2b2f38',
                    'content-hover-fg': '#fff',
                    'bar-shadow': 'rgba(8, 8, 8, 0.75) 0 0 0.5rem'
                }
            }
        },
        nord: {
            id: 'nord',
            name: 'Nord',
            colors: {
                node_slot: {
                    BOOLEAN: '',
                    CLIP: '#eacb8b',
                    CLIP_VISION: '#A8DADC',
                    CLIP_VISION_OUTPUT: '#ad7452',
                    CONDITIONING: '#cf876f',
                    CONTROL_NET: '#00d78d',
                    CONTROL_NET_WEIGHTS: '',
                    FLOAT: '',
                    GLIGEN: '',
                    IMAGE: '#80a1c0',
                    IMAGEUPLOAD: '',
                    INT: '',
                    LATENT: '#b38ead',
                    LATENT_KEYFRAME: '',
                    MASK: '#a3bd8d',
                    MODEL: '#8978a7',
                    SAMPLER: '',
                    SIGMAS: '',
                    STRING: '',
                    STYLE_MODEL: '#C2FFAE',
                    T2I_ADAPTER_WEIGHTS: '',
                    TAESD: '#DCC274',
                    TIMESTEP_KEYFRAME: '',
                    UPSCALE_MODEL: '',
                    VAE: '#be616b'
                },
                litegraph_base: {
                    BACKGROUND_IMAGE:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFu2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjEgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMS0xM1QwMDoxODowMiswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTEtMTVUMDE6MjA6NDUrMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTEtMTVUMDE6MjA6NDUrMDE6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUwNDFhMmZjLTEzNzQtMTk0ZC1hZWY4LTYxMzM1MTVmNjUwMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMzFiMTBiMC1iNGZiLTAyNGUtYjEyZS0zMDUzMDNjZDA3YzgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyMzFiMTBiMC1iNGZiLTAyNGUtYjEyZS0zMDUzMDNjZDA3YzgiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjIzMWIxMGIwLWI0ZmItMDI0ZS1iMTJlLTMwNTMwM2NkMDdjOCIgc3RFdnQ6d2hlbj0iMjAyMy0xMS0xM1QwMDoxODowMiswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjEgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MDQxYTJmYy0xMzc0LTE5NGQtYWVmOC02MTMzNTE1ZjY1MDAiIHN0RXZ0OndoZW49IjIwMjMtMTEtMTVUMDE6MjA6NDUrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNS4xIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz73jWg/AAAAyUlEQVR42u3WKwoAIBRFQRdiMb1idv9Lsxn9gEFw4Dbb8JCTojbbXEJwjJVL2HKwYMGCBQuWLbDmjr+9zrBGjHl1WVcvy2DBggULFizTWQpewSt4HzwsgwULFiwFr7MUvMtS8D54WLBgGSxYCl7BK3iXZbBgwYIFC5bpLAWv4BW8Dx6WwYIFC5aC11kK3mUpeB88LFiwDBYsBa/gFbzLMliwYMGCBct0loJX8AreBw/LYMGCBUvB6ywF77IUvA8eFixYBgsWrNfWAZPltufdad+1AAAAAElFTkSuQmCC',
                    CLEAR_BACKGROUND_COLOR: '#212732',
                    NODE_TITLE_COLOR: '#999',
                    NODE_SELECTED_TITLE_COLOR: '#e5eaf0',
                    NODE_TEXT_SIZE: 14,
                    NODE_TEXT_COLOR: '#bcc2c8',
                    NODE_SUBTEXT_SIZE: 12,
                    NODE_DEFAULT_COLOR: '#2e3440',
                    NODE_DEFAULT_BGCOLOR: '#161b22',
                    NODE_DEFAULT_BOXCOLOR: '#545d70',
                    NODE_DEFAULT_SHAPE: 'box',
                    NODE_BOX_OUTLINE_COLOR: '#e5eaf0',
                    NODE_BYPASS_BGCOLOR: '#FF00FF',
                    NODE_ERROR_COLOUR: '#E00',
                    DEFAULT_SHADOW_COLOR: 'rgba(0,0,0,0.5)',
                    DEFAULT_GROUP_FONT: 24,
                    WIDGET_BGCOLOR: '#2e3440',
                    WIDGET_OUTLINE_COLOR: '#545d70',
                    WIDGET_TEXT_COLOR: '#bcc2c8',
                    WIDGET_SECONDARY_TEXT_COLOR: '#999',
                    LINK_COLOR: '#9A9',
                    EVENT_LINK_COLOR: '#A86',
                    CONNECTING_LINK_COLOR: '#AFA'
                },
                comfy_base: {
                    'fg-color': '#e5eaf0',
                    'bg-color': '#2e3440',
                    'comfy-menu-bg': '#161b22',
                    'comfy-menu-secondary-bg': '#14181F',
                    'comfy-input-bg': '#2e3440',
                    'input-text': '#bcc2c8',
                    'descrip-text': '#999',
                    'drag-text': '#ccc',
                    'error-text': '#ff4444',
                    'border-color': '#545d70',
                    'tr-even-bg-color': '#2e3440',
                    'tr-odd-bg-color': '#161b22',
                    'content-bg': '#545d70',
                    'content-fg': '#e5eaf0',
                    'content-hover-bg': '#2e3440',
                    'content-hover-fg': '#e5eaf0',
                    'bar-shadow': 'rgba(0, 0, 0, 0.75) 0 0 0.5rem'
                }
            }
        },
        github: {
            id: 'github',
            name: 'Github',
            colors: {
                node_slot: {
                    BOOLEAN: '',
                    CLIP: '#eacb8b',
                    CLIP_VISION: '#A8DADC',
                    CLIP_VISION_OUTPUT: '#ad7452',
                    CONDITIONING: '#cf876f',
                    CONTROL_NET: '#00d78d',
                    CONTROL_NET_WEIGHTS: '',
                    FLOAT: '',
                    GLIGEN: '',
                    IMAGE: '#80a1c0',
                    IMAGEUPLOAD: '',
                    INT: '',
                    LATENT: '#b38ead',
                    LATENT_KEYFRAME: '',
                    MASK: '#a3bd8d',
                    MODEL: '#8978a7',
                    SAMPLER: '',
                    SIGMAS: '',
                    STRING: '',
                    STYLE_MODEL: '#C2FFAE',
                    T2I_ADAPTER_WEIGHTS: '',
                    TAESD: '#DCC274',
                    TIMESTEP_KEYFRAME: '',
                    UPSCALE_MODEL: '',
                    VAE: '#be616b'
                },
                litegraph_base: {
                    BACKGROUND_IMAGE:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGlmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjEgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMS0xM1QwMDoxODowMiswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTEtMTVUMDI6MDQ6NTkrMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTEtMTVUMDI6MDQ6NTkrMDE6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmIyYzRhNjA5LWJmYTctYTg0MC1iOGFlLTk3MzE2ZjM1ZGIyNyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjk0ZmNlZGU4LTE1MTctZmQ0MC04ZGU3LWYzOTgxM2E3ODk5ZiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjIzMWIxMGIwLWI0ZmItMDI0ZS1iMTJlLTMwNTMwM2NkMDdjOCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjMxYjEwYjAtYjRmYi0wMjRlLWIxMmUtMzA1MzAzY2QwN2M4IiBzdEV2dDp3aGVuPSIyMDIzLTExLTEzVDAwOjE4OjAyKzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjUuMSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ4OWY1NzlmLTJkNjUtZWQ0Zi04OTg0LTA4NGE2MGE1ZTMzNSIgc3RFdnQ6d2hlbj0iMjAyMy0xMS0xNVQwMjowNDo1OSswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjEgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiMmM0YTYwOS1iZmE3LWE4NDAtYjhhZS05NzMxNmYzNWRiMjciIHN0RXZ0OndoZW49IjIwMjMtMTEtMTVUMDI6MDQ6NTkrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNS4xIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4OTe6GAAAAx0lEQVR42u3WMQoAIQxFwRzJys77X8vSLiRgITif7bYbgrwYc/mKXyBoY4VVBgsWLFiwYFmOlTv+9jfDOjHmr8u6eVkGCxYsWLBgmc5S8ApewXvgYRksWLBgKXidpeBdloL3wMOCBctgwVLwCl7BuyyDBQsWLFiwTGcpeAWv4D3wsAwWLFiwFLzOUvAuS8F74GHBgmWwYCl4Ba/gXZbBggULFixYprMUvIJX8B54WAYLFixYCl5nKXiXpeA98LBgwTJYsGC9tg1o8f4TTtqzNQAAAABJRU5ErkJggg==',
                    CLEAR_BACKGROUND_COLOR: '#040506',
                    NODE_TITLE_COLOR: '#999',
                    NODE_SELECTED_TITLE_COLOR: '#e5eaf0',
                    NODE_TEXT_SIZE: 14,
                    NODE_TEXT_COLOR: '#bcc2c8',
                    NODE_SUBTEXT_SIZE: 12,
                    NODE_DEFAULT_COLOR: '#161b22',
                    NODE_DEFAULT_BGCOLOR: '#13171d',
                    NODE_DEFAULT_BOXCOLOR: '#30363d',
                    NODE_DEFAULT_SHAPE: 'box',
                    NODE_BOX_OUTLINE_COLOR: '#e5eaf0',
                    NODE_BYPASS_BGCOLOR: '#FF00FF',
                    NODE_ERROR_COLOUR: '#E00',
                    DEFAULT_SHADOW_COLOR: 'rgba(0,0,0,0.5)',
                    DEFAULT_GROUP_FONT: 24,
                    WIDGET_BGCOLOR: '#161b22',
                    WIDGET_OUTLINE_COLOR: '#30363d',
                    WIDGET_TEXT_COLOR: '#bcc2c8',
                    WIDGET_SECONDARY_TEXT_COLOR: '#999',
                    LINK_COLOR: '#9A9',
                    EVENT_LINK_COLOR: '#A86',
                    CONNECTING_LINK_COLOR: '#AFA'
                },
                comfy_base: {
                    'fg-color': '#e5eaf0',
                    'bg-color': '#161b22',
                    'comfy-menu-bg': '#13171d',
                    'comfy-menu-secondary-bg': '#11141A',
                    'comfy-input-bg': '#161b22',
                    'input-text': '#bcc2c8',
                    'descrip-text': '#999',
                    'drag-text': '#ccc',
                    'error-text': '#ff4444',
                    'border-color': '#30363d',
                    'tr-even-bg-color': '#161b22',
                    'tr-odd-bg-color': '#13171d',
                    'content-bg': '#30363d',
                    'content-fg': '#e5eaf0',
                    'content-hover-bg': '#161b22',
                    'content-hover-fg': '#e5eaf0',
                    'bar-shadow': 'rgba(0, 0, 0, 1) 0 0 0.5rem'
                }
            }
        },
        defaultColorPaletteId: "dark"
    });
    function getColorPalette(id) {
        return ColorPalettes[id];
    }
})(this);

LGraphCanvas.prototype.updateBackground = function (
    image,
    clearBackgroundColor
) {
    this._bg_img = new Image()
    this._bg_img.name = image
    this._bg_img.src = image
    this._bg_img.onload = () => {
        this.draw(true, true)
    }
    this.background_image = image

    this.clear_background = true
    this.clear_background_color = clearBackgroundColor
    this._pattern = null
}

function ThemeSelector() {
    //this.apply(themeId);
}

ThemeSelector.prototype.apply = function(themeId) {
    if(!themeId)
        themeId=ColorPalettes.defaultColorPaletteId;
    var colorPalette=ColorPalettes[themeId];
    if(!colorPalette)
        return;
    if (colorPalette.colors) {

        if (colorPalette.colors.node_slot) {
            var node_slot_colors={};
            const colors = Object.values(colorPalette.colors.node_slot);
            for (let i = 0; i < LGraph.supported_types.length; i++) {
                const index = i % colors.length;
                const color = colors[index];
                node_slot_colors[LGraph.supported_types[i]]=color;
            }
            console.log(JSON.stringify(node_slot_colors));
            Object.assign(
                window.canvas.default_connection_color_byType,
                node_slot_colors
            )
            Object.assign(
                LGraphCanvas.link_type_colors,
                node_slot_colors
            )
        }
        // Sets the colors of the LiteGraph objects
        if (colorPalette.colors.litegraph_base) {
            // Everything updates correctly in the loop, except the Node Title and Link Color for some reason
            window.canvas.node_title_color =
                colorPalette.colors.litegraph_base.NODE_TITLE_COLOR
                window.canvas.default_link_color =
                colorPalette.colors.litegraph_base.LINK_COLOR

            for (const key in colorPalette.colors.litegraph_base) {
                if (
                    colorPalette.colors.litegraph_base.hasOwnProperty(key) &&
                    LiteGraph.hasOwnProperty(key)
                ) {
                    LiteGraph[key] = colorPalette.colors.litegraph_base[key]
                }
            }
        }
        window.canvas.setDirty(true, true)
    }
};

if (typeof exports != "undefined") {
    exports.ColorPalettes = this.ColorPalettes;
    exports.ThemeSelector = this.ThemeSelector;
}
window.themeSelector=new ThemeSelector();
//ThemeSelector themeSelector();
// const ctxMenu = LiteGraph.ContextMenu;
