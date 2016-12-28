
/**
 * Модуль перевода
 * @param {String} text
 * @returns {window.gettext.data|Window.gettext.data}
 */
if(window.gettext === undefined)
{

    var gettext = function(text)
    {
        if(window.gettext.data && window.gettext.data[window.gettext.locale] && window.gettext.data[window.gettext.locale][text])
        {
            text = window.gettext.data[window.gettext.locale][text];
            for(var i=1; i<arguments.length; i++)
            {
                text = text.replace("%"+i+"s" ,arguments[i])
            }

            return text
        }

        for(var i=1; i<arguments.length; i++)
        {
            text = text.replace("%"+i+"s" ,arguments[i])
        }

        return text;
    }

    window.gettext.data = {};
    window.gettext.locale = 'en'
    if(navigator.language)
    {
        window.gettext.locale = navigator.language
    }

    gettext.setTranslate = function(lang, arr)
    {
        window.gettext.data[lang] = arr
    }

    gettext.setLocale = function(lang)
    {
        window.gettext.locale = lang
    }

    gettext.getLocale = function()
    {
        return window.gettext.locale
    }
}
