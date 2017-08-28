/// <reference path="../Common/Helpers/LanguageList.ts" />

namespace Serenity.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('Serenity');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;
}