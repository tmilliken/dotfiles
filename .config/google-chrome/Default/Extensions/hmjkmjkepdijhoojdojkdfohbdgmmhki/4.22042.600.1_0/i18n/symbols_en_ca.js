/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a=this||self,b=function(f,k){f=f.split(".");var e=a;f[0]in e||"undefined"==typeof e.execScript||e.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||void 0===k?e=e[g]&&e[g]!==Object.prototype[g]?e[g]:e[g]={}:e[g]=k};var c={na:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},ma:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}},d=c;d=c;var h={ia:"y",ra:"y G",ja:"MMM y",ka:"MMMM y",sa:"MM/y",I:"MMM d",J:"MMMM dd",L:"M/d",K:"MMMM d",pa:"MMM d, y",ga:"EEE, MMM d",qa:"EEE, MMM d, y",l:"d",oa:"MMM d, h:mm a zzzz"};h={ia:"y",ra:"y G",ja:"MMM y",ka:"MMMM y",sa:"MM/y",I:"MMM d",J:"MMMM dd",L:"MM-dd",K:"MMMM d",pa:"MMM d, y",ga:"EEE, MMM d",qa:"EEE, MMM d, y",l:"d",oa:"MMM d, h:mm a zzzz"};var l={v:["BC","AD"],u:["Before Christ","Anno Domini"],N:"JFMAMJJASOND".split(""),$:"JFMAMJJASOND".split(""),H:"January February March April May June July August September October November December".split(" "),Z:"January February March April May June July August September October November December".split(" "),W:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ba:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),fa:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
da:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Y:"Sun Mon Tue Wed Thu Fri Sat".split(" "),ca:"Sun Mon Tue Wed Thu Fri Sat".split(" "),O:"SMTWTFS".split(""),aa:"SMTWTFS".split(""),X:["Q1","Q2","Q3","Q4"],U:["1st quarter","2nd quarter","3rd quarter","4th quarter"],g:["AM","PM"],i:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],ea:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],j:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],B:6,ha:[5,6],C:5};
l={v:["BC","AD"],u:["Before Christ","Anno Domini"],N:"JFMAMJJASOND".split(""),$:"JFMAMJJASOND".split(""),H:"January February March April May June July August September October November December".split(" "),Z:"January February March April May June July August September October November December".split(" "),W:"Jan Feb Mar Apr May Jun Jul Aug Sept Oct Nov Dec".split(" "),ba:"Jan Feb Mar Apr May Jun Jul Aug Sept Oct Nov Dec".split(" "),fa:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
da:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Y:"Sun Mon Tue Wed Thu Fri Sat".split(" "),ca:"Sun Mon Tue Wed Thu Fri Sat".split(" "),O:"SMTWTFS".split(""),aa:"SMTWTFS".split(""),X:["Q1","Q2","Q3","Q4"],U:["1st quarter","2nd quarter","3rd quarter","4th quarter"],g:["a.m.","p.m."],i:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","y-MM-dd"],ea:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],j:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],B:6,ha:[5,6],C:5};var m={o:".",D:",",P:"%",la:"0",T:"+",G:"-",A:"E",S:"\u2030",F:"\u221e",M:"NaN",m:"#,##0.###",V:"#E0",R:"#,##0%",h:"\u00a4#,##0.00",s:"USD"};m={o:".",D:",",P:"%",la:"0",T:"+",G:"-",A:"E",S:"\u2030",F:"\u221e",M:"NaN",m:"#,##0.###",V:"#E0",R:"#,##0%",h:"\u00a4#,##0.00",s:"CAD"};b("I18N_DATETIMESYMBOLS_ERAS",l.v);b("I18N_DATETIMESYMBOLS_ERANAMES",l.u);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",l.N);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",l.$);b("I18N_DATETIMESYMBOLS_MONTHS",l.H);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",l.Z);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",l.W);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",l.ba);b("I18N_DATETIMESYMBOLS_WEEKDAYS",l.fa);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",l.da);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",l.Y);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",l.ca);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",l.O);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",l.aa);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",l.X);b("I18N_DATETIMESYMBOLS_QUARTERS",l.U);b("I18N_DATETIMESYMBOLS_AMPMS",l.g);b("I18N_DATETIMESYMBOLS_DATEFORMATS",l.i);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",l.ea);b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS",l.j);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",l.B);b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",l.ha);
b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",l.C);b("I18N_DATETIMEPATTERNS_YEAR_FULL",h.ia);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR",h.ja);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL",h.ka);b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR",h.I);b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL",h.J);b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT",h.L);b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM",h.K);b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM",h.ga);b("I18N_DATETIMEPATTERNS_DAY_ABBR",h.l);
void 0!==l.ta&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",l.ta);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",m.o);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",m.D);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",m.P);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",m.la);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",m.T);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",m.G);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",m.A);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",m.S);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",m.F);b("I18N_NUMBERFORMATSYMBOLS_NAN",m.M);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",m.m);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",m.V);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",m.R);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",m.h);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",m.s);b("I18N_COMPACT_DECIMAL_SHORT_PATTERN",d.na);b("I18N_COMPACT_DECIMAL_LONG_PATTERN",d.ma);
