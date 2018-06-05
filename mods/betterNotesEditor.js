/*
* BETTER NOTES (a mod for Vivaldi)
* Written by LonM
* No Copyright Reserved
* EDITOR COMPONENT
*
* additional components used:
* https://github.com/Sporif/CustomHooks/blob/master/hooks/theme-css-variables.js
* remarkable 1.7.1 https://github.com/jonschlinkert/remarkable @license MIT
* also scroll sync adapted from https://jonschlinkert.github.io/remarkable/demo/
*
* fr_FR by Cqoicebordel
*/
(function betterNotesEditor(){
"use strict";

const SELECTED_LANGUAGE = {
    en_GB: {
        Select: "# Select a note to edit",
        NotesTitle: "Vivaldi Notes",
        Title: "Title",
        Format: "Formatting",
        Export: "Export",
        ExportPrompt: "Right-Click, Save As",
        Loading: "Loading...",
        LoadingPrompt: "If you see this message for more than a few seconds, click the <em>Open Full Editor</em> Button again.",
        Stats: "Note Statistics",
        Chars: "Chars",
        Words: "Words",
        Lines: "Lines",
        SyncScroll: "Sync Scroll"
    },
    fr_FR: {
        Select: "# Sélectionnez une note pour la modifier",
        NotesTitle: "Notes Vivaldi",
        Title: "Titre",
        Format: "Formatage",
        Export: "Exporter",
        ExportPrompt: "Clic Droite, Enregistrer sous",
        Loading: "Chargement...",
        LoadingPrompt: "Si vous voyez ce message pendant plusieurs secondes, appuyez à nouveau sur le bouton <em>Ouvrir l'éditeur de notes</em>.",
        Stats: "Statistiques de la Note",
        Chars: "Caractères",
        Words: "Mots",
        Lines: "Linges",
        SyncScroll: "Défilement synchronisé"
    }
}.en_GB;

/**
 * Fill the page with localised strings
 */
function initStrings(){
    document.querySelector("title").innerText = SELECTED_LANGUAGE.NotesTitle;
    document.querySelector("#titlelabel").innerText = SELECTED_LANGUAGE.Title;
    document.querySelector("#title").innerText = SELECTED_LANGUAGE.NotesTitle;
    document.querySelector("#formatlabel").innerText = SELECTED_LANGUAGE.Format;
    document.querySelector("#exportLabel").innerText = SELECTED_LANGUAGE.Export;
    document.querySelector("#exportprompt").innerText = SELECTED_LANGUAGE.ExportPrompt;
    document.querySelector("#preview").innerHTML = `
    <h1>${SELECTED_LANGUAGE.Loading}</h1>
    <p>${SELECTED_LANGUAGE.LoadingPrompt}</p>`;
    document.querySelector("footer b").innerText = SELECTED_LANGUAGE.Stats;
    document.querySelector("#syncScrollLabel").innerText = SELECTED_LANGUAGE.SyncScroll;
    updateWordCount(0);
}



/* jshint ignore:start */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Remarkable=e()}}(function(){var e;return function t(e,r,n){function s(i,l){if(!r[i]){if(!e[i]){var a="function"==typeof require&&require;if(!l&&a)return a(i,!0);if(o)return o(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var u=r[i]={exports:{}};e[i][0].call(u.exports,function(t){var r=e[i][1][t];return s(r?r:t)},u,u.exports,t,e,r,n)}return r[i].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)s(n[i]);return s}({1:[function(e,t){"use strict";t.exports={Aacute:"Á",aacute:"á",Abreve:"Ă",abreve:"ă",ac:"∾",acd:"∿",acE:"∾̳",Acirc:"Â",acirc:"â",acute:"´",Acy:"А",acy:"а",AElig:"Æ",aelig:"æ",af:"⁡",Afr:"𝔄",afr:"𝔞",Agrave:"À",agrave:"à",alefsym:"ℵ",aleph:"ℵ",Alpha:"Α",alpha:"α",Amacr:"Ā",amacr:"ā",amalg:"⨿",AMP:"&",amp:"&",And:"⩓",and:"∧",andand:"⩕",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsd:"∡",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"Å",angzarr:"⍼",Aogon:"Ą",aogon:"ą",Aopf:"𝔸",aopf:"𝕒",ap:"≈",apacir:"⩯",apE:"⩰",ape:"≊",apid:"≋",apos:"'",ApplyFunction:"⁡",approx:"≈",approxeq:"≊",Aring:"Å",aring:"å",Ascr:"𝒜",ascr:"𝒶",Assign:"≔",ast:"*",asymp:"≈",asympeq:"≍",Atilde:"Ã",atilde:"ã",Auml:"Ä",auml:"ä",awconint:"∳",awint:"⨑",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",Backslash:"∖",Barv:"⫧",barvee:"⊽",Barwed:"⌆",barwed:"⌅",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",Bcy:"Б",bcy:"б",bdquo:"„",becaus:"∵",Because:"∵",because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",Bernoullis:"ℬ",Beta:"Β",beta:"β",beth:"ℶ",between:"≬",Bfr:"𝔅",bfr:"𝔟",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bNot:"⫭",bnot:"⌐",Bopf:"𝔹",bopf:"𝕓",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxbox:"⧉",boxDL:"╗",boxDl:"╖",boxdL:"╕",boxdl:"┐",boxDR:"╔",boxDr:"╓",boxdR:"╒",boxdr:"┌",boxH:"═",boxh:"─",boxHD:"╦",boxHd:"╤",boxhD:"╥",boxhd:"┬",boxHU:"╩",boxHu:"╧",boxhU:"╨",boxhu:"┴",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxUL:"╝",boxUl:"╜",boxuL:"╛",boxul:"┘",boxUR:"╚",boxUr:"╙",boxuR:"╘",boxur:"└",boxV:"║",boxv:"│",boxVH:"╬",boxVh:"╫",boxvH:"╪",boxvh:"┼",boxVL:"╣",boxVl:"╢",boxvL:"╡",boxvl:"┤",boxVR:"╠",boxVr:"╟",boxvR:"╞",boxvr:"├",bprime:"‵",Breve:"˘",breve:"˘",brvbar:"¦",Bscr:"ℬ",bscr:"𝒷",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsol:"\\",bsolb:"⧅",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpE:"⪮",bumpe:"≏",Bumpeq:"≎",bumpeq:"≏",Cacute:"Ć",cacute:"ć",Cap:"⋒",cap:"∩",capand:"⩄",capbrcup:"⩉",capcap:"⩋",capcup:"⩇",capdot:"⩀",CapitalDifferentialD:"ⅅ",caps:"∩︀",caret:"⁁",caron:"ˇ",Cayleys:"ℭ",ccaps:"⩍",Ccaron:"Č",ccaron:"č",Ccedil:"Ç",ccedil:"ç",Ccirc:"Ĉ",ccirc:"ĉ",Cconint:"∰",ccups:"⩌",ccupssm:"⩐",Cdot:"Ċ",cdot:"ċ",cedil:"¸",Cedilla:"¸",cemptyv:"⦲",cent:"¢",CenterDot:"·",centerdot:"·",Cfr:"ℭ",cfr:"𝔠",CHcy:"Ч",chcy:"ч",check:"✓",checkmark:"✓",Chi:"Χ",chi:"χ",cir:"○",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",CircleDot:"⊙",circledR:"®",circledS:"Ⓢ",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",cirE:"⧃",cire:"≗",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",clubs:"♣",clubsuit:"♣",Colon:"∷",colon:":",Colone:"⩴",colone:"≔",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",Congruent:"≡",Conint:"∯",conint:"∮",ContourIntegral:"∮",Copf:"ℂ",copf:"𝕔",coprod:"∐",Coproduct:"∐",COPY:"©",copy:"©",copysr:"℗",CounterClockwiseContourIntegral:"∳",crarr:"↵",Cross:"⨯",cross:"✗",Cscr:"𝒞",cscr:"𝒸",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",Cup:"⋓",cup:"∪",cupbrcap:"⩈",CupCap:"≍",cupcap:"⩆",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curren:"¤",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",Dagger:"‡",dagger:"†",daleth:"ℸ",Darr:"↡",dArr:"⇓",darr:"↓",dash:"‐",Dashv:"⫤",dashv:"⊣",dbkarow:"⤏",dblac:"˝",Dcaron:"Ď",dcaron:"ď",Dcy:"Д",dcy:"д",DD:"ⅅ",dd:"ⅆ",ddagger:"‡",ddarr:"⇊",DDotrahd:"⤑",ddotseq:"⩷",deg:"°",Del:"∇",Delta:"Δ",delta:"δ",demptyv:"⦱",dfisht:"⥿",Dfr:"𝔇",dfr:"𝔡",dHar:"⥥",dharl:"⇃",dharr:"⇂",DiacriticalAcute:"´",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",diam:"⋄",Diamond:"⋄",diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"¨",DifferentialD:"ⅆ",digamma:"ϝ",disin:"⋲",div:"÷",divide:"÷",divideontimes:"⋇",divonx:"⋇",DJcy:"Ђ",djcy:"ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",Dopf:"𝔻",dopf:"𝕕",Dot:"¨",dot:"˙",DotDot:"⃜",doteq:"≐",doteqdot:"≑",DotEqual:"≐",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",DoubleContourIntegral:"∯",DoubleDot:"¨",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",DownArrow:"↓",Downarrow:"⇓",downarrow:"↓",DownArrowBar:"⤓",DownArrowUpArrow:"⇵",DownBreve:"̑",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVector:"↽",DownLeftVectorBar:"⥖",DownRightTeeVector:"⥟",DownRightVector:"⇁",DownRightVectorBar:"⥗",DownTee:"⊤",DownTeeArrow:"↧",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",Dscr:"𝒟",dscr:"𝒹",DScy:"Ѕ",dscy:"ѕ",dsol:"⧶",Dstrok:"Đ",dstrok:"đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",DZcy:"Џ",dzcy:"џ",dzigrarr:"⟿",Eacute:"É",eacute:"é",easter:"⩮",Ecaron:"Ě",ecaron:"ě",ecir:"≖",Ecirc:"Ê",ecirc:"ê",ecolon:"≕",Ecy:"Э",ecy:"э",eDDot:"⩷",Edot:"Ė",eDot:"≑",edot:"ė",ee:"ⅇ",efDot:"≒",Efr:"𝔈",efr:"𝔢",eg:"⪚",Egrave:"È",egrave:"è",egs:"⪖",egsdot:"⪘",el:"⪙",Element:"∈",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",Emacr:"Ē",emacr:"ē",empty:"∅",emptyset:"∅",EmptySmallSquare:"◻",emptyv:"∅",EmptyVerySmallSquare:"▫",emsp:" ",emsp13:" ",emsp14:" ",ENG:"Ŋ",eng:"ŋ",ensp:" ",Eogon:"Ę",eogon:"ę",Eopf:"𝔼",eopf:"𝕖",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",Epsilon:"Ε",epsilon:"ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",Equal:"⩵",equals:"=",EqualTilde:"≂",equest:"≟",Equilibrium:"⇌",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erarr:"⥱",erDot:"≓",Escr:"ℰ",escr:"ℯ",esdot:"≐",Esim:"⩳",esim:"≂",Eta:"Η",eta:"η",ETH:"Ð",eth:"ð",Euml:"Ë",euml:"ë",euro:"€",excl:"!",exist:"∃",Exists:"∃",expectation:"ℰ",ExponentialE:"ⅇ",exponentiale:"ⅇ",fallingdotseq:"≒",Fcy:"Ф",fcy:"ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",Ffr:"𝔉",ffr:"𝔣",filig:"ﬁ",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",Fopf:"𝔽",fopf:"𝕗",ForAll:"∀",forall:"∀",fork:"⋔",forkv:"⫙",Fouriertrf:"ℱ",fpartint:"⨍",frac12:"½",frac13:"⅓",frac14:"¼",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac34:"¾",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",Fscr:"ℱ",fscr:"𝒻",gacute:"ǵ",Gamma:"Γ",gamma:"γ",Gammad:"Ϝ",gammad:"ϝ",gap:"⪆",Gbreve:"Ğ",gbreve:"ğ",Gcedil:"Ģ",Gcirc:"Ĝ",gcirc:"ĝ",Gcy:"Г",gcy:"г",Gdot:"Ġ",gdot:"ġ",gE:"≧",ge:"≥",gEl:"⪌",gel:"⋛",geq:"≥",geqq:"≧",geqslant:"⩾",ges:"⩾",gescc:"⪩",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",Gfr:"𝔊",gfr:"𝔤",Gg:"⋙",gg:"≫",ggg:"⋙",gimel:"ℷ",GJcy:"Ѓ",gjcy:"ѓ",gl:"≷",gla:"⪥",glE:"⪒",glj:"⪤",gnap:"⪊",gnapprox:"⪊",gnE:"≩",gne:"⪈",gneq:"⪈",gneqq:"≩",gnsim:"⋧",Gopf:"𝔾",gopf:"𝕘",grave:"`",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",Gscr:"𝒢",gscr:"ℊ",gsim:"≳",gsime:"⪎",gsiml:"⪐",GT:">",Gt:"≫",gt:">",gtcc:"⪧",gtcir:"⩺",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",Hacek:"ˇ",hairsp:" ",half:"½",hamilt:"ℋ",HARDcy:"Ъ",hardcy:"ъ",hArr:"⇔",harr:"↔",harrcir:"⥈",harrw:"↭",Hat:"^",hbar:"ℏ",Hcirc:"Ĥ",hcirc:"ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",Hfr:"ℌ",hfr:"𝔥",HilbertSpace:"ℋ",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",Hopf:"ℍ",hopf:"𝕙",horbar:"―",HorizontalLine:"─",Hscr:"ℋ",hscr:"𝒽",hslash:"ℏ",Hstrok:"Ħ",hstrok:"ħ",HumpDownHump:"≎",HumpEqual:"≏",hybull:"⁃",hyphen:"‐",Iacute:"Í",iacute:"í",ic:"⁣",Icirc:"Î",icirc:"î",Icy:"И",icy:"и",Idot:"İ",IEcy:"Е",iecy:"е",iexcl:"¡",iff:"⇔",Ifr:"ℑ",ifr:"𝔦",Igrave:"Ì",igrave:"ì",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",IJlig:"Ĳ",ijlig:"ĳ",Im:"ℑ",Imacr:"Ī",imacr:"ī",image:"ℑ",ImaginaryI:"ⅈ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",imof:"⊷",imped:"Ƶ",Implies:"⇒","in":"∈",incare:"℅",infin:"∞",infintie:"⧝",inodot:"ı",Int:"∬","int":"∫",intcal:"⊺",integers:"ℤ",Integral:"∫",intercal:"⊺",Intersection:"⋂",intlarhk:"⨗",intprod:"⨼",InvisibleComma:"⁣",InvisibleTimes:"⁢",IOcy:"Ё",iocy:"ё",Iogon:"Į",iogon:"į",Iopf:"𝕀",iopf:"𝕚",Iota:"Ι",iota:"ι",iprod:"⨼",iquest:"¿",Iscr:"ℐ",iscr:"𝒾",isin:"∈",isindot:"⋵",isinE:"⋹",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",Itilde:"Ĩ",itilde:"ĩ",Iukcy:"І",iukcy:"і",Iuml:"Ï",iuml:"ï",Jcirc:"Ĵ",jcirc:"ĵ",Jcy:"Й",jcy:"й",Jfr:"𝔍",jfr:"𝔧",jmath:"ȷ",Jopf:"𝕁",jopf:"𝕛",Jscr:"𝒥",jscr:"𝒿",Jsercy:"Ј",jsercy:"ј",Jukcy:"Є",jukcy:"є",Kappa:"Κ",kappa:"κ",kappav:"ϰ",Kcedil:"Ķ",kcedil:"ķ",Kcy:"К",kcy:"к",Kfr:"𝔎",kfr:"𝔨",kgreen:"ĸ",KHcy:"Х",khcy:"х",KJcy:"Ќ",kjcy:"ќ",Kopf:"𝕂",kopf:"𝕜",Kscr:"𝒦",kscr:"𝓀",lAarr:"⇚",Lacute:"Ĺ",lacute:"ĺ",laemptyv:"⦴",lagran:"ℒ",Lambda:"Λ",lambda:"λ",Lang:"⟪",lang:"⟨",langd:"⦑",langle:"⟨",lap:"⪅",Laplacetrf:"ℒ",laquo:"«",Larr:"↞",lArr:"⇐",larr:"←",larrb:"⇤",larrbfs:"⤟",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",lat:"⪫",lAtail:"⤛",latail:"⤙",late:"⪭",lates:"⪭︀",lBarr:"⤎",lbarr:"⤌",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",Lcaron:"Ľ",lcaron:"ľ",Lcedil:"Ļ",lcedil:"ļ",lceil:"⌈",lcub:"{",Lcy:"Л",lcy:"л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",lE:"≦",le:"≤",LeftAngleBracket:"⟨",LeftArrow:"←",Leftarrow:"⇐",leftarrow:"←",LeftArrowBar:"⇤",LeftArrowRightArrow:"⇆",leftarrowtail:"↢",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVector:"⇃",LeftDownVectorBar:"⥙",LeftFloor:"⌊",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",LeftRightArrow:"↔",Leftrightarrow:"⇔",leftrightarrow:"↔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",LeftRightVector:"⥎",LeftTee:"⊣",LeftTeeArrow:"↤",LeftTeeVector:"⥚",leftthreetimes:"⋋",LeftTriangle:"⊲",LeftTriangleBar:"⧏",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVector:"↿",LeftUpVectorBar:"⥘",LeftVector:"↼",LeftVectorBar:"⥒",lEg:"⪋",leg:"⋚",leq:"≤",leqq:"≦",leqslant:"⩽",les:"⩽",lescc:"⪨",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",lessgtr:"≶",LessLess:"⪡",lesssim:"≲",LessSlantEqual:"⩽",LessTilde:"≲",lfisht:"⥼",lfloor:"⌊",Lfr:"𝔏",lfr:"𝔩",lg:"≶",lgE:"⪑",lHar:"⥢",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",LJcy:"Љ",ljcy:"љ",Ll:"⋘",ll:"≪",llarr:"⇇",llcorner:"⌞",Lleftarrow:"⇚",llhard:"⥫",lltri:"◺",Lmidot:"Ŀ",lmidot:"ŀ",lmoust:"⎰",lmoustache:"⎰",lnap:"⪉",lnapprox:"⪉",lnE:"≨",lne:"⪇",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",LongLeftArrow:"⟵",Longleftarrow:"⟸",longleftarrow:"⟵",LongLeftRightArrow:"⟷",Longleftrightarrow:"⟺",longleftrightarrow:"⟷",longmapsto:"⟼",LongRightArrow:"⟶",Longrightarrow:"⟹",longrightarrow:"⟶",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",Lopf:"𝕃",lopf:"𝕝",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",LowerLeftArrow:"↙",LowerRightArrow:"↘",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",Lscr:"ℒ",lscr:"𝓁",Lsh:"↰",lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",Lstrok:"Ł",lstrok:"ł",LT:"<",Lt:"≪",lt:"<",ltcc:"⪦",ltcir:"⩹",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltri:"◃",ltrie:"⊴",ltrif:"◂",ltrPar:"⦖",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",macr:"¯",male:"♂",malt:"✠",maltese:"✠",Map:"⤅",map:"↦",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",Mcy:"М",mcy:"м",mdash:"—",mDDot:"∺",measuredangle:"∡",MediumSpace:" ",Mellintrf:"ℳ",Mfr:"𝔐",mfr:"𝔪",mho:"℧",micro:"µ",mid:"∣",midast:"*",midcir:"⫰",middot:"·",minus:"−",minusb:"⊟",minusd:"∸",minusdu:"⨪",MinusPlus:"∓",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",Mopf:"𝕄",mopf:"𝕞",mp:"∓",Mscr:"ℳ",mscr:"𝓂",mstpos:"∾",Mu:"Μ",mu:"μ",multimap:"⊸",mumap:"⊸",nabla:"∇",Nacute:"Ń",nacute:"ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natur:"♮",natural:"♮",naturals:"ℕ",nbsp:" ",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",Ncaron:"Ň",ncaron:"ň",Ncedil:"Ņ",ncedil:"ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",Ncy:"Н",ncy:"н",ndash:"–",ne:"≠",nearhk:"⤤",neArr:"⇗",nearr:"↗",nearrow:"↗",nedot:"≐̸",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",nequiv:"≢",nesear:"⤨",nesim:"≂̸",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:"\n",nexist:"∄",nexists:"∄",Nfr:"𝔑",nfr:"𝔫",ngE:"≧̸",nge:"≱",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",nGg:"⋙̸",ngsim:"≵",nGt:"≫⃒",ngt:"≯",ngtr:"≯",nGtv:"≫̸",nhArr:"⇎",nharr:"↮",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",NJcy:"Њ",njcy:"њ",nlArr:"⇍",nlarr:"↚",nldr:"‥",nlE:"≦̸",nle:"≰",nLeftarrow:"⇍",nleftarrow:"↚",nLeftrightarrow:"⇎",nleftrightarrow:"↮",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nLl:"⋘̸",nlsim:"≴",nLt:"≪⃒",nlt:"≮",nltri:"⋪",nltrie:"⋬",nLtv:"≪̸",nmid:"∤",NoBreak:"⁠",NonBreakingSpace:" ",Nopf:"ℕ",nopf:"𝕟",Not:"⫬",not:"¬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",notin:"∉",notindot:"⋵̸",notinE:"⋹̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",NotLeftTriangle:"⋪",NotLeftTriangleBar:"⧏̸",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangle:"⋫",NotRightTriangleBar:"⧐̸",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",npar:"∦",nparallel:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",npre:"⪯̸",nprec:"⊀",npreceq:"⪯̸",nrArr:"⇏",nrarr:"↛",nrarrc:"⤳̸",nrarrw:"↝̸",nRightarrow:"⇏",nrightarrow:"↛",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",Nscr:"𝒩",nscr:"𝓃",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsubE:"⫅̸",nsube:"⊈",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupE:"⫆̸",nsupe:"⊉",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",Ntilde:"Ñ",ntilde:"ñ",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",Nu:"Ν",nu:"ν",num:"#",numero:"№",numsp:" ",nvap:"≍⃒",nVDash:"⊯",nVdash:"⊮",nvDash:"⊭",nvdash:"⊬",nvge:"≥⃒",nvgt:">⃒",nvHarr:"⤄",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwarhk:"⤣",nwArr:"⇖",nwarr:"↖",nwarrow:"↖",nwnear:"⤧",Oacute:"Ó",oacute:"ó",oast:"⊛",ocir:"⊚",Ocirc:"Ô",ocirc:"ô",Ocy:"О",ocy:"о",odash:"⊝",Odblac:"Ő",odblac:"ő",odiv:"⨸",odot:"⊙",odsold:"⦼",OElig:"Œ",oelig:"œ",ofcir:"⦿",Ofr:"𝔒",ofr:"𝔬",ogon:"˛",Ograve:"Ò",ograve:"ò",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",Omacr:"Ō",omacr:"ō",Omega:"Ω",omega:"ω",Omicron:"Ο",omicron:"ο",omid:"⦶",ominus:"⊖",Oopf:"𝕆",oopf:"𝕠",opar:"⦷",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",operp:"⦹",oplus:"⊕",Or:"⩔",or:"∨",orarr:"↻",ord:"⩝",order:"ℴ",orderof:"ℴ",ordf:"ª",ordm:"º",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oS:"Ⓢ",Oscr:"𝒪",oscr:"ℴ",Oslash:"Ø",oslash:"ø",osol:"⊘",Otilde:"Õ",otilde:"õ",Otimes:"⨷",otimes:"⊗",otimesas:"⨶",Ouml:"Ö",ouml:"ö",ovbar:"⌽",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",par:"∥",para:"¶",parallel:"∥",parsim:"⫳",parsl:"⫽",part:"∂",PartialD:"∂",Pcy:"П",pcy:"п",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",Pfr:"𝔓",pfr:"𝔭",Phi:"Φ",phi:"φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",Pi:"Π",pi:"π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plus:"+",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plusdo:"∔",plusdu:"⨥",pluse:"⩲",PlusMinus:"±",plusmn:"±",plussim:"⨦",plustwo:"⨧",pm:"±",Poincareplane:"ℌ",pointint:"⨕",Popf:"ℙ",popf:"𝕡",pound:"£",Pr:"⪻",pr:"≺",prap:"⪷",prcue:"≼",prE:"⪳",pre:"⪯",prec:"≺",precapprox:"⪷",preccurlyeq:"≼",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",precsim:"≾",Prime:"″",prime:"′",primes:"ℙ",prnap:"⪹",prnE:"⪵",prnsim:"⋨",prod:"∏",Product:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",Proportion:"∷",Proportional:"∝",propto:"∝",prsim:"≾",prurel:"⊰",Pscr:"𝒫",pscr:"𝓅",Psi:"Ψ",psi:"ψ",puncsp:" ",Qfr:"𝔔",qfr:"𝔮",qint:"⨌",Qopf:"ℚ",qopf:"𝕢",qprime:"⁗",Qscr:"𝒬",qscr:"𝓆",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",QUOT:'"',quot:'"',rAarr:"⇛",race:"∽̱",Racute:"Ŕ",racute:"ŕ",radic:"√",raemptyv:"⦳",Rang:"⟫",rang:"⟩",rangd:"⦒",range:"⦥",rangle:"⟩",raquo:"»",Rarr:"↠",rArr:"⇒",rarr:"→",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",Rarrtl:"⤖",rarrtl:"↣",rarrw:"↝",rAtail:"⤜",ratail:"⤚",ratio:"∶",rationals:"ℚ",RBarr:"⤐",rBarr:"⤏",rbarr:"⤍",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",Rcaron:"Ř",rcaron:"ř",Rcedil:"Ŗ",rcedil:"ŗ",rceil:"⌉",rcub:"}",Rcy:"Р",rcy:"р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",Re:"ℜ",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",rect:"▭",REG:"®",reg:"®",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",rfisht:"⥽",rfloor:"⌋",Rfr:"ℜ",rfr:"𝔯",rHar:"⥤",rhard:"⇁",rharu:"⇀",rharul:"⥬",Rho:"Ρ",rho:"ρ",rhov:"ϱ",RightAngleBracket:"⟩",RightArrow:"→",Rightarrow:"⇒",rightarrow:"→",RightArrowBar:"⇥",RightArrowLeftArrow:"⇄",rightarrowtail:"↣",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVector:"⇂",RightDownVectorBar:"⥕",RightFloor:"⌋",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",RightTee:"⊢",RightTeeArrow:"↦",RightTeeVector:"⥛",rightthreetimes:"⋌",RightTriangle:"⊳",RightTriangleBar:"⧐",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVector:"↾",RightUpVectorBar:"⥔",RightVector:"⇀",RightVectorBar:"⥓",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoust:"⎱",rmoustache:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",Ropf:"ℝ",ropf:"𝕣",roplus:"⨮",rotimes:"⨵",RoundImplies:"⥰",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",Rrightarrow:"⇛",rsaquo:"›",Rscr:"ℛ",rscr:"𝓇",Rsh:"↱",rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",RuleDelayed:"⧴",ruluhar:"⥨",rx:"℞",Sacute:"Ś",sacute:"ś",sbquo:"‚",Sc:"⪼",sc:"≻",scap:"⪸",Scaron:"Š",scaron:"š",sccue:"≽",scE:"⪴",sce:"⪰",Scedil:"Ş",scedil:"ş",Scirc:"Ŝ",scirc:"ŝ",scnap:"⪺",scnE:"⪶",scnsim:"⋩",scpolint:"⨓",scsim:"≿",Scy:"С",scy:"с",sdot:"⋅",sdotb:"⊡",sdote:"⩦",searhk:"⤥",seArr:"⇘",searr:"↘",searrow:"↘",sect:"§",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",Sfr:"𝔖",sfr:"𝔰",sfrown:"⌢",sharp:"♯",SHCHcy:"Щ",shchcy:"щ",SHcy:"Ш",shcy:"ш",ShortDownArrow:"↓",ShortLeftArrow:"←",shortmid:"∣",shortparallel:"∥",ShortRightArrow:"→",ShortUpArrow:"↑",shy:"­",Sigma:"Σ",sigma:"σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",SmallCircle:"∘",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",SOFTcy:"Ь",softcy:"ь",sol:"/",solb:"⧄",solbar:"⌿",Sopf:"𝕊",sopf:"𝕤",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",Sqrt:"√",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",squ:"□",Square:"□",square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",squarf:"▪",squf:"▪",srarr:"→",Sscr:"𝒮",sscr:"𝓈",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",Star:"⋆",star:"☆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"¯",Sub:"⋐",sub:"⊂",subdot:"⪽",subE:"⫅",sube:"⊆",subedot:"⫃",submult:"⫁",subnE:"⫋",subne:"⊊",subplus:"⪿",subrarr:"⥹",Subset:"⋐",subset:"⊂",subseteq:"⊆",subseteqq:"⫅",SubsetEqual:"⊆",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succ:"≻",succapprox:"⪸",succcurlyeq:"≽",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",SuchThat:"∋",Sum:"∑",sum:"∑",sung:"♪",Sup:"⋑",sup:"⊃",sup1:"¹",sup2:"²",sup3:"³",supdot:"⪾",supdsub:"⫘",supE:"⫆",supe:"⊇",supedot:"⫄",Superset:"⊃",SupersetEqual:"⊇",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supnE:"⫌",supne:"⊋",supplus:"⫀",Supset:"⋑",supset:"⊃",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swarhk:"⤦",swArr:"⇙",swarr:"↙",swarrow:"↙",swnwar:"⤪",szlig:"ß",Tab:"	",target:"⌖",Tau:"Τ",tau:"τ",tbrk:"⎴",Tcaron:"Ť",tcaron:"ť",Tcedil:"Ţ",tcedil:"ţ",Tcy:"Т",tcy:"т",tdot:"⃛",telrec:"⌕",Tfr:"𝔗",tfr:"𝔱",there4:"∴",Therefore:"∴",therefore:"∴",Theta:"Θ",theta:"θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",ThickSpace:"  ",thinsp:" ",ThinSpace:" ",thkap:"≈",thksim:"∼",THORN:"Þ",thorn:"þ",Tilde:"∼",tilde:"˜",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",times:"×",timesb:"⊠",timesbar:"⨱",timesd:"⨰",tint:"∭",toea:"⤨",top:"⊤",topbot:"⌶",topcir:"⫱",Topf:"𝕋",topf:"𝕥",topfork:"⫚",tosa:"⤩",tprime:"‴",TRADE:"™",trade:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",TripleDot:"⃛",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",Tscr:"𝒯",tscr:"𝓉",TScy:"Ц",tscy:"ц",TSHcy:"Ћ",tshcy:"ћ",Tstrok:"Ŧ",tstrok:"ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",Uacute:"Ú",uacute:"ú",Uarr:"↟",uArr:"⇑",uarr:"↑",Uarrocir:"⥉",Ubrcy:"Ў",ubrcy:"ў",Ubreve:"Ŭ",ubreve:"ŭ",Ucirc:"Û",ucirc:"û",Ucy:"У",ucy:"у",udarr:"⇅",Udblac:"Ű",udblac:"ű",udhar:"⥮",ufisht:"⥾",Ufr:"𝔘",ufr:"𝔲",Ugrave:"Ù",ugrave:"ù",uHar:"⥣",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",Umacr:"Ū",umacr:"ū",uml:"¨",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",Uogon:"Ų",uogon:"ų",Uopf:"𝕌",uopf:"𝕦",UpArrow:"↑",Uparrow:"⇑",uparrow:"↑",UpArrowBar:"⤒",UpArrowDownArrow:"⇅",UpDownArrow:"↕",Updownarrow:"⇕",updownarrow:"↕",UpEquilibrium:"⥮",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",UpperLeftArrow:"↖",UpperRightArrow:"↗",Upsi:"ϒ",upsi:"υ",upsih:"ϒ",Upsilon:"Υ",upsilon:"υ",UpTee:"⊥",UpTeeArrow:"↥",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",Uring:"Ů",uring:"ů",urtri:"◹",Uscr:"𝒰",uscr:"𝓊",utdot:"⋰",Utilde:"Ũ",utilde:"ũ",utri:"▵",utrif:"▴",uuarr:"⇈",Uuml:"Ü",uuml:"ü",uwangle:"⦧",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",vArr:"⇕",varr:"↕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",Vbar:"⫫",vBar:"⫨",vBarv:"⫩",Vcy:"В",vcy:"в",VDash:"⊫",Vdash:"⊩",vDash:"⊨",vdash:"⊢",Vdashl:"⫦",Vee:"⋁",vee:"∨",veebar:"⊻",veeeq:"≚",vellip:"⋮",Verbar:"‖",verbar:"|",Vert:"‖",vert:"|",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",Vfr:"𝔙",vfr:"𝔳",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",Vopf:"𝕍",vopf:"𝕧",vprop:"∝",vrtri:"⊳",Vscr:"𝒱",vscr:"𝓋",vsubnE:"⫋︀",vsubne:"⊊︀",vsupnE:"⫌︀",vsupne:"⊋︀",Vvdash:"⊪",vzigzag:"⦚",Wcirc:"Ŵ",wcirc:"ŵ",wedbar:"⩟",Wedge:"⋀",wedge:"∧",wedgeq:"≙",weierp:"℘",Wfr:"𝔚",wfr:"𝔴",Wopf:"𝕎",wopf:"𝕨",wp:"℘",wr:"≀",wreath:"≀",Wscr:"𝒲",wscr:"𝓌",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",Xfr:"𝔛",xfr:"𝔵",xhArr:"⟺",xharr:"⟷",Xi:"Ξ",xi:"ξ",xlArr:"⟸",xlarr:"⟵",xmap:"⟼",xnis:"⋻",xodot:"⨀",Xopf:"𝕏",xopf:"𝕩",xoplus:"⨁",xotime:"⨂",xrArr:"⟹",xrarr:"⟶",Xscr:"𝒳",xscr:"𝓍",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",Yacute:"Ý",yacute:"ý",YAcy:"Я",yacy:"я",Ycirc:"Ŷ",ycirc:"ŷ",Ycy:"Ы",ycy:"ы",yen:"¥",Yfr:"𝔜",yfr:"𝔶",YIcy:"Ї",yicy:"ї",Yopf:"𝕐",yopf:"𝕪",Yscr:"𝒴",yscr:"𝓎",YUcy:"Ю",yucy:"ю",Yuml:"Ÿ",yuml:"ÿ",Zacute:"Ź",zacute:"ź",Zcaron:"Ž",zcaron:"ž",Zcy:"З",zcy:"з",Zdot:"Ż",zdot:"ż",zeetrf:"ℨ",ZeroWidthSpace:"​",Zeta:"Ζ",zeta:"ζ",Zfr:"ℨ",zfr:"𝔷",ZHcy:"Ж",zhcy:"ж",zigrarr:"⇝",Zopf:"ℤ",zopf:"𝕫",Zscr:"𝒵",zscr:"𝓏",zwj:"‍",zwnj:"‌"}},{}],2:[function(e,t){"use strict";var r={};["article","aside","button","blockquote","body","canvas","caption","col","colgroup","dd","div","dl","dt","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","iframe","li","map","object","ol","output","p","pre","progress","script","section","style","table","tbody","td","textarea","tfoot","th","tr","thead","ul","video"].forEach(function(e){r[e]=!0}),t.exports=r},{}],3:[function(e,t){"use strict";function r(e,t){return e=e.source,t=t||"",function r(n,s){return n?(s=s.source||s,e=e.replace(n,s),r):new RegExp(e,t)}}var n=/[a-zA-Z_:][a-zA-Z0-9:._-]*/,s=/[^"'=<>`\x00-\x20]+/,o=/'[^']*'/,i=/"[^"]*"/,l=r(/(?:unquoted|single_quoted|double_quoted)/)("unquoted",s)("single_quoted",o)("double_quoted",i)(),a=r(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)("attr_name",n)("attr_value",l)(),c=r(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)("attribute",a)(),u=/<\/[A-Za-z][A-Za-z0-9]*\s*>/,p=/<!--([^-]+|[-][^-]+)*-->/,h=/<[?].*?[?]>/,f=/<![A-Z]+\s+[^>]*>/,d=/<!\[CDATA\[([^\]]+|\][^\]]|\]\][^>])*\]\]>/,g=r(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)("open_tag",c)("close_tag",u)("comment",p)("processing",h)("declaration",f)("cdata",d)();t.exports.HTML_TAG_RE=g},{}],4:[function(e,t){"use strict";t.exports=["coap","doi","javascript","aaa","aaas","about","acap","cap","cid","crid","data","dav","dict","dns","file","ftp","geo","go","gopher","h323","http","https","iax","icap","im","imap","info","ipp","iris","iris.beep","iris.xpc","iris.xpcs","iris.lwz","ldap","mailto","mid","msrp","msrps","mtqp","mupdate","news","nfs","ni","nih","nntp","opaquelocktoken","pop","pres","rtsp","service","session","shttp","sieve","sip","sips","sms","snmp","soap.beep","soap.beeps","tag","tel","telnet","tftp","thismessage","tn3270","tip","tv","urn","vemmi","ws","wss","xcon","xcon-userid","xmlrpc.beep","xmlrpc.beeps","xmpp","z39.50r","z39.50s","adiumxtra","afp","afs","aim","apt","attachment","aw","beshare","bitcoin","bolo","callto","chrome","chrome-extension","com-eventbrite-attendee","content","cvs","dlna-playsingle","dlna-playcontainer","dtn","dvb","ed2k","facetime","feed","finger","fish","gg","git","gizmoproject","gtalk","hcp","icon","ipn","irc","irc6","ircs","itms","jar","jms","keyparc","lastfm","ldaps","magnet","maps","market","message","mms","ms-help","msnim","mumble","mvn","notes","oid","palm","paparazzi","platform","proxy","psyc","query","res","resource","rmi","rsync","rtmp","secondlife","sftp","sgn","skype","smb","soldat","spotify","ssh","steam","svn","teamspeak","things","udp","unreal","ut2004","ventrilo","view-source","webcal","wtai","wyciwyg","xfire","xri","ymsgr"]},{}],5:[function(e,t,r){"use strict";function n(e){return Object.prototype.toString.call(e)}function s(e){return"[object String]"===n(e)}function o(e,t){return e?d.call(e,t):!1}function i(e){var t=[].slice.call(arguments,1);return t.forEach(function(t){if(t){if("object"!=typeof t)throw new TypeError(t+"must be object");Object.keys(t).forEach(function(r){e[r]=t[r]})}}),e}function l(e){return e.indexOf("\\")<0?e:e.replace(g,"$1")}function a(e){return e>=55296&&57343>=e?!1:e>=64976&&65007>=e?!1:65535===(65535&e)||65534===(65535&e)?!1:e>=0&&8>=e?!1:11===e?!1:e>=14&&31>=e?!1:e>=127&&159>=e?!1:e>1114111?!1:!0}function c(e){if(e>65535){e-=65536;var t=55296+(e>>10),r=56320+(1023&e);return String.fromCharCode(t,r)}return String.fromCharCode(e)}function u(e,t){var r=0;return o(v,t)?v[t]:35===t.charCodeAt(0)&&b.test(t)&&(r="x"===t[1].toLowerCase()?parseInt(t.slice(2),16):parseInt(t.slice(1),10),a(r))?c(r):e}function p(e){return e.indexOf("&")<0?e:e.replace(m,u)}function h(e){return y[e]}function f(e){return k.test(e)?e.replace(_,h):e}var d=Object.prototype.hasOwnProperty,g=/\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g,m=/&([a-z#][a-z0-9]{1,31});/gi,b=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,v=e("./entities"),k=/[&<>"]/,_=/[&<>"]/g,y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};r.assign=i,r.isString=s,r.has=o,r.unescapeMd=l,r.isValidEntityCode=a,r.fromCodePoint=c,r.replaceEntities=p,r.escapeHtml=f},{"./entities":1}],6:[function(e,t){"use strict";t.exports={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,linkTarget:"",typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["block","inline","references","abbr2"]},block:{rules:["blockquote","code","fences","heading","hr","htmlblock","lheading","list","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","htmltag","links","newline","text"]}}}},{}],7:[function(e,t){"use strict";t.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,linkTarget:"",typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["block","inline","references","replacements","linkify","smartquotes","references","abbr2","footnote_tail"]},block:{rules:["blockquote","code","fences","footnote","heading","hr","htmlblock","lheading","list","paragraph","table"]},inline:{rules:["autolink","backticks","del","emphasis","entity","escape","footnote_ref","htmltag","links","newline","text"]}}}},{}],8:[function(e,t){"use strict";t.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,linkTarget:"",typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{},block:{},inline:{}}}},{}],9:[function(e,t){"use strict";var r=e("../common/utils").replaceEntities;t.exports=function(e){var t=r(e);try{t=decodeURI(t)}catch(n){}return encodeURI(t)}},{"../common/utils":5}],10:[function(e,t){"use strict";t.exports=function(e){return e.trim().replace(/\s+/g," ").toUpperCase()}},{}],11:[function(e,t){"use strict";var r=e("./normalize_link"),n=e("../common/utils").unescapeMd;t.exports=function(e,t){var s,o,i,l=t,a=e.posMax;if(60===e.src.charCodeAt(t)){for(t++;a>t;){if(s=e.src.charCodeAt(t),10===s)return!1;if(62===s)return i=r(n(e.src.slice(l+1,t))),e.parser.validateLink(i)?(e.pos=t+1,e.linkContent=i,!0):!1;92===s&&a>t+1?t+=2:t++}return!1}for(o=0;a>t&&(s=e.src.charCodeAt(t),32!==s)&&!(s>8&&14>s);)if(92===s&&a>t+1)t+=2;else{if(40===s&&(o++,o>1))break;if(41===s&&(o--,0>o))break;t++}return l===t?!1:(i=n(e.src.slice(l,t)),e.parser.validateLink(i)?(e.linkContent=i,e.pos=t,!0):!1)}},{"../common/utils":5,"./normalize_link":9}],12:[function(e,t){"use strict";t.exports=function(e,t){
    var r,n,s,o=-1,i=e.posMax,l=e.pos,a=e.isInLabel;if(e.isInLabel)return-1;if(e.labelUnmatchedScopes)return e.labelUnmatchedScopes--,-1;for(e.pos=t+1,e.isInLabel=!0,r=1;e.pos<i;){if(s=e.src.charCodeAt(e.pos),91===s)r++;else if(93===s&&(r--,0===r)){n=!0;break}e.parser.skipToken(e)}return n?(o=e.pos,e.labelUnmatchedScopes=0):e.labelUnmatchedScopes=r-1,e.pos=l,e.isInLabel=a,o}},{}],13:[function(e,t){"use strict";var r=e("../common/utils").unescapeMd;t.exports=function(e,t){var n,s=t,o=e.posMax,i=e.src.charCodeAt(t);if(34!==i&&39!==i&&40!==i)return!1;for(t++,40===i&&(i=41);o>t;){if(n=e.src.charCodeAt(t),n===i)return e.pos=t+1,e.linkContent=r(e.src.slice(s+1,t)),!0;92===n&&o>t+1?t+=2:t++}return!1}},{"../common/utils":5}],14:[function(e,t){"use strict";function r(e,t,r){this.src=t,this.env=r,this.options=e.options,this.tokens=[],this.inlineMode=!1,this.inline=e.inline,this.block=e.block,this.renderer=e.renderer,this.typographer=e.typographer}function n(e,t){"string"!=typeof e&&(t=e,e="default"),this.inline=new a,this.block=new l,this.core=new i,this.renderer=new o,this.ruler=new c,this.options={},this.configure(u[e]),this.set(t||{})}var s=e("./common/utils").assign,o=e("./renderer"),i=e("./parser_core"),l=e("./parser_block"),a=e("./parser_inline"),c=e("./ruler"),u={"default":e("./configs/default"),full:e("./configs/full"),commonmark:e("./configs/commonmark")};n.prototype.set=function(e){s(this.options,e)},n.prototype.configure=function(e){var t=this;if(!e)throw new Error("Wrong `remarkable` preset, check name/content");e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(r){e.components[r].rules&&t[r].ruler.enable(e.components[r].rules,!0)})},n.prototype.use=function(e,t){return e(this,t),this},n.prototype.parse=function(e,t){var n=new r(this,e,t);return this.core.process(n),n.tokens},n.prototype.render=function(e,t){return t=t||{},this.renderer.render(this.parse(e,t),this.options,t)},n.prototype.parseInline=function(e,t){var n=new r(this,e,t);return n.inlineMode=!0,this.core.process(n),n.tokens},n.prototype.renderInline=function(e,t){return t=t||{},this.renderer.render(this.parseInline(e,t),this.options,t)},t.exports=n,t.exports.utils=e("./common/utils")},{"./common/utils":5,"./configs/commonmark":6,"./configs/default":7,"./configs/full":8,"./parser_block":15,"./parser_core":16,"./parser_inline":17,"./renderer":18,"./ruler":19}],15:[function(e,t){"use strict";function r(){this.ruler=new n;for(var e=0;e<o.length;e++)this.ruler.push(o[e][0],o[e][1],{alt:(o[e][2]||[]).slice()})}var n=e("./ruler"),s=e("./rules_block/state_block"),o=[["code",e("./rules_block/code")],["fences",e("./rules_block/fences"),["paragraph","blockquote","list"]],["blockquote",e("./rules_block/blockquote"),["paragraph","blockquote","list"]],["hr",e("./rules_block/hr"),["paragraph","blockquote","list"]],["list",e("./rules_block/list"),["paragraph","blockquote"]],["footnote",e("./rules_block/footnote"),["paragraph"]],["heading",e("./rules_block/heading"),["paragraph","blockquote"]],["lheading",e("./rules_block/lheading")],["htmlblock",e("./rules_block/htmlblock"),["paragraph","blockquote"]],["table",e("./rules_block/table"),["paragraph"]],["deflist",e("./rules_block/deflist"),["paragraph"]],["paragraph",e("./rules_block/paragraph")]];r.prototype.tokenize=function(e,t,r){for(var n,s,o=this.ruler.getRules(""),i=o.length,l=t,a=!1;r>l&&(e.line=l=e.skipEmptyLines(l),!(l>=r))&&!(e.tShift[l]<e.blkIndent);){for(s=0;i>s&&!(n=o[s](e,l,r,!1));s++);if(e.tight=!a,e.isEmpty(e.line-1)&&(a=!0),l=e.line,r>l&&e.isEmpty(l)){if(a=!0,l++,r>l&&"list"===e.parentType&&e.isEmpty(l))break;e.line=l}}};var i=/[\n\t]/g,l=/\r[\n\u0085]|[\u2424\u2028\u0085]/g,a=/\u00a0/g;r.prototype.parse=function(e,t,r,n){var o,c=0,u=0;return e?(e=e.replace(a," "),e=e.replace(l,"\n"),e.indexOf("	")>=0&&(e=e.replace(i,function(t,r){var n;return 10===e.charCodeAt(r)?(c=r+1,u=0,t):(n="    ".slice((r-c-u)%4),u=r-c+1,n)})),o=new s(e,this,t,r,n),void this.tokenize(o,o.line,o.lineMax)):[]},t.exports=r},{"./ruler":19,"./rules_block/blockquote":21,"./rules_block/code":22,"./rules_block/deflist":23,"./rules_block/fences":24,"./rules_block/footnote":25,"./rules_block/heading":26,"./rules_block/hr":27,"./rules_block/htmlblock":28,"./rules_block/lheading":29,"./rules_block/list":30,"./rules_block/paragraph":31,"./rules_block/state_block":32,"./rules_block/table":33}],16:[function(e,t){"use strict";function r(){this.options={},this.ruler=new n;for(var e=0;e<s.length;e++)this.ruler.push(s[e][0],s[e][1])}var n=e("./ruler"),s=[["block",e("./rules_core/block")],["abbr",e("./rules_core/abbr")],["references",e("./rules_core/references")],["inline",e("./rules_core/inline")],["footnote_tail",e("./rules_core/footnote_tail")],["abbr2",e("./rules_core/abbr2")],["replacements",e("./rules_core/replacements")],["smartquotes",e("./rules_core/smartquotes")],["linkify",e("./rules_core/linkify")]];r.prototype.process=function(e){var t,r,n;for(n=this.ruler.getRules(""),t=0,r=n.length;r>t;t++)n[t](e)},t.exports=r},{"./ruler":19,"./rules_core/abbr":34,"./rules_core/abbr2":35,"./rules_core/block":36,"./rules_core/footnote_tail":37,"./rules_core/inline":38,"./rules_core/linkify":39,"./rules_core/references":40,"./rules_core/replacements":41,"./rules_core/smartquotes":42}],17:[function(e,t){"use strict";function r(){this.ruler=new s;for(var e=0;e<l.length;e++)this.ruler.push(l[e][0],l[e][1]);this.validateLink=n}function n(e){var t=["vbscript","javascript","file","data"],r=e.trim().toLowerCase();return r=i.replaceEntities(r),-1!==r.indexOf(":")&&-1!==t.indexOf(r.split(":")[0])?!1:!0}var s=e("./ruler"),o=e("./rules_inline/state_inline"),i=e("./common/utils"),l=[["text",e("./rules_inline/text")],["newline",e("./rules_inline/newline")],["escape",e("./rules_inline/escape")],["backticks",e("./rules_inline/backticks")],["del",e("./rules_inline/del")],["ins",e("./rules_inline/ins")],["mark",e("./rules_inline/mark")],["emphasis",e("./rules_inline/emphasis")],["sub",e("./rules_inline/sub")],["sup",e("./rules_inline/sup")],["links",e("./rules_inline/links")],["footnote_inline",e("./rules_inline/footnote_inline")],["footnote_ref",e("./rules_inline/footnote_ref")],["autolink",e("./rules_inline/autolink")],["htmltag",e("./rules_inline/htmltag")],["entity",e("./rules_inline/entity")]];r.prototype.skipToken=function(e){var t,r,n=this.ruler.getRules(""),s=n.length,o=e.pos;if((r=e.cacheGet(o))>0)return void(e.pos=r);for(t=0;s>t;t++)if(n[t](e,!0))return void e.cacheSet(o,e.pos);e.pos++,e.cacheSet(o,e.pos)},r.prototype.tokenize=function(e){for(var t,r,n=this.ruler.getRules(""),s=n.length,o=e.posMax;e.pos<o;){for(r=0;s>r&&!(t=n[r](e,!1));r++);if(t){if(e.pos>=o)break}else e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},r.prototype.parse=function(e,t,r,n){var s=new o(e,this,t,r,n);this.tokenize(s)},t.exports=r},{"./common/utils":5,"./ruler":19,"./rules_inline/autolink":43,"./rules_inline/backticks":44,"./rules_inline/del":45,"./rules_inline/emphasis":46,"./rules_inline/entity":47,"./rules_inline/escape":48,"./rules_inline/footnote_inline":49,"./rules_inline/footnote_ref":50,"./rules_inline/htmltag":51,"./rules_inline/ins":52,"./rules_inline/links":53,"./rules_inline/mark":54,"./rules_inline/newline":55,"./rules_inline/state_inline":56,"./rules_inline/sub":57,"./rules_inline/sup":58,"./rules_inline/text":59}],18:[function(e,t){"use strict";function r(){this.rules=n.assign({},s),this.getBreak=s.getBreak}var n=e("./common/utils"),s=e("./rules");t.exports=r,r.prototype.renderInline=function(e,t,r){for(var n=this.rules,s=e.length,o=0,i="";s--;)i+=n[e[o].type](e,o++,t,r,this);return i},r.prototype.render=function(e,t,r){for(var n=this.rules,s=e.length,o=-1,i="";++o<s;)i+="inline"===e[o].type?this.renderInline(e[o].children,t,r):n[e[o].type](e,o,t,r,this);return i}},{"./common/utils":5,"./rules":20}],19:[function(e,t){"use strict";function r(){this.__rules__=[],this.__cache__=null}r.prototype.__find__=function(e){for(var t=this.__rules__.length,r=-1;t--;)if(this.__rules__[++r].name===e)return r;return-1},r.prototype.__compile__=function(){var e=this,t=[""];e.__rules__.forEach(function(e){e.enabled&&e.alt.forEach(function(e){t.indexOf(e)<0&&t.push(e)})}),e.__cache__={},t.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(r){r.enabled&&(t&&r.alt.indexOf(t)<0||e.__cache__[t].push(r.fn))})})},r.prototype.at=function(e,t,r){var n=this.__find__(e),s=r||{};if(-1===n)throw new Error("Parser rule not found: "+e);this.__rules__[n].fn=t,this.__rules__[n].alt=s.alt||[],this.__cache__=null},r.prototype.before=function(e,t,r,n){var s=this.__find__(e),o=n||{};if(-1===s)throw new Error("Parser rule not found: "+e);this.__rules__.splice(s,0,{name:t,enabled:!0,fn:r,alt:o.alt||[]}),this.__cache__=null},r.prototype.after=function(e,t,r,n){var s=this.__find__(e),o=n||{};if(-1===s)throw new Error("Parser rule not found: "+e);this.__rules__.splice(s+1,0,{name:t,enabled:!0,fn:r,alt:o.alt||[]}),this.__cache__=null},r.prototype.push=function(e,t,r){var n=r||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:n.alt||[]}),this.__cache__=null},r.prototype.enable=function(e,t){e=Array.isArray(e)?e:[e],t&&this.__rules__.forEach(function(e){e.enabled=!1}),e.forEach(function(e){var t=this.__find__(e);if(0>t)throw new Error("Rules manager: invalid rule name "+e);this.__rules__[t].enabled=!0},this),this.__cache__=null},r.prototype.disable=function(e){e=Array.isArray(e)?e:[e],e.forEach(function(e){var t=this.__find__(e);if(0>t)throw new Error("Rules manager: invalid rule name "+e);this.__rules__[t].enabled=!1},this),this.__cache__=null},r.prototype.getRules=function(e){return null===this.__cache__&&this.__compile__(),this.__cache__[e]||[]},t.exports=r},{}],20:[function(e,t){"use strict";function r(e,t){return++t>=e.length-2?t:"paragraph_open"===e[t].type&&e[t].tight&&"inline"===e[t+1].type&&0===e[t+1].content.length&&"paragraph_close"===e[t+2].type&&e[t+2].tight?r(e,t+2):t}var n=e("./common/utils").has,s=e("./common/utils").unescapeMd,o=e("./common/utils").replaceEntities,i=e("./common/utils").escapeHtml,l={};l.blockquote_open=function(){return"<blockquote>\n"},l.blockquote_close=function(e,t){return"</blockquote>"+a(e,t)},l.code=function(e,t){return e[t].block?"<pre><code>"+i(e[t].content)+"</code></pre>"+a(e,t):"<code>"+i(e[t].content)+"</code>"},l.fence=function(e,t,r,l,c){var u,p,h,f=e[t],d="",g=r.langPrefix,m="";if(f.params){if(u=f.params.split(/\s+/g),p=u.join(" "),n(c.rules.fence_custom,u[0]))return c.rules.fence_custom[u[0]](e,t,r,l,c);m=i(o(s(p))),d=' class="'+g+m+'"'}return h=r.highlight?r.highlight.apply(r.highlight,[f.content].concat(u))||i(f.content):i(f.content),"<pre><code"+d+">"+h+"</code></pre>"+a(e,t)},l.fence_custom={},l.heading_open=function(e,t){return"<h"+e[t].hLevel+">"},l.heading_close=function(e,t){return"</h"+e[t].hLevel+">\n"},l.hr=function(e,t,r){return(r.xhtmlOut?"<hr />":"<hr>")+a(e,t)},l.bullet_list_open=function(){return"<ul>\n"},l.bullet_list_close=function(e,t){return"</ul>"+a(e,t)},l.list_item_open=function(){return"<li>"},l.list_item_close=function(){return"</li>\n"},l.ordered_list_open=function(e,t){var r=e[t],n=r.order>1?' start="'+r.order+'"':"";return"<ol"+n+">\n"},l.ordered_list_close=function(e,t){return"</ol>"+a(e,t)},l.paragraph_open=function(e,t){return e[t].tight?"":"<p>"},l.paragraph_close=function(e,t){var r=!(e[t].tight&&t&&"inline"===e[t-1].type&&!e[t-1].content);return(e[t].tight?"":"</p>")+(r?a(e,t):"")},l.link_open=function(e,t,r){var n=e[t].title?' title="'+i(o(e[t].title))+'"':"",s=r.linkTarget?' target="'+r.linkTarget+'"':"";return'<a href="'+i(e[t].href)+'"'+n+s+">"},l.link_close=function(){return"</a>"},l.image=function(e,t,r){var n=' src="'+i(e[t].src)+'"',l=e[t].title?' title="'+i(o(e[t].title))+'"':"",a=' alt="'+(e[t].alt?i(o(s(e[t].alt))):"")+'"',c=r.xhtmlOut?" /":"";return"<img"+n+a+l+c+">"},l.table_open=function(){return"<table>\n"},l.table_close=function(){return"</table>\n"},l.thead_open=function(){return"<thead>\n"},l.thead_close=function(){return"</thead>\n"},l.tbody_open=function(){return"<tbody>\n"},l.tbody_close=function(){return"</tbody>\n"},l.tr_open=function(){return"<tr>"},l.tr_close=function(){return"</tr>\n"},l.th_open=function(e,t){var r=e[t];return"<th"+(r.align?' style="text-align:'+r.align+'"':"")+">"},l.th_close=function(){return"</th>"},l.td_open=function(e,t){var r=e[t];return"<td"+(r.align?' style="text-align:'+r.align+'"':"")+">"},l.td_close=function(){return"</td>"},l.strong_open=function(){return"<strong>"},l.strong_close=function(){return"</strong>"},l.em_open=function(){return"<em>"},l.em_close=function(){return"</em>"},l.del_open=function(){return"<del>"},l.del_close=function(){return"</del>"},l.ins_open=function(){return"<ins>"},l.ins_close=function(){return"</ins>"},l.mark_open=function(){return"<mark>"},l.mark_close=function(){return"</mark>"},l.sub=function(e,t){return"<sub>"+i(e[t].content)+"</sub>"},l.sup=function(e,t){return"<sup>"+i(e[t].content)+"</sup>"},l.hardbreak=function(e,t,r){return r.xhtmlOut?"<br />\n":"<br>\n"},l.softbreak=function(e,t,r){return r.breaks?r.xhtmlOut?"<br />\n":"<br>\n":"\n"},l.text=function(e,t){return i(e[t].content)},l.htmlblock=function(e,t){return e[t].content},l.htmltag=function(e,t){return e[t].content},l.abbr_open=function(e,t){return'<abbr title="'+i(o(e[t].title))+'">'},l.abbr_close=function(){return"</abbr>"},l.footnote_ref=function(e,t){var r=Number(e[t].id+1).toString(),n="fnref"+r;return e[t].subId>0&&(n+=":"+e[t].subId),'<sup class="footnote-ref"><a href="#fn'+r+'" id="'+n+'">['+r+"]</a></sup>"},l.footnote_block_open=function(e,t,r){var n=r.xhtmlOut?'<hr class="footnotes-sep" />\n':'<hr class="footnotes-sep">\n';return n+'<section class="footnotes">\n<ol class="footnotes-list">\n'},l.footnote_block_close=function(){return"</ol>\n</section>\n"},l.footnote_open=function(e,t){var r=Number(e[t].id+1).toString();return'<li id="fn'+r+'"  class="footnote-item">'},l.footnote_close=function(){return"</li>\n"},l.footnote_anchor=function(e,t){var r=Number(e[t].id+1).toString(),n="fnref"+r;return e[t].subId>0&&(n+=":"+e[t].subId),' <a href="#'+n+'" class="footnote-backref">↩</a>'},l.dl_open=function(){return"<dl>\n"},l.dt_open=function(){return"<dt>"},l.dd_open=function(){return"<dd>"},l.dl_close=function(){return"</dl>\n"},l.dt_close=function(){return"</dt>\n"},l.dd_close=function(){return"</dd>\n"};var a=l.getBreak=function(e,t){return t=r(e,t),t<e.length&&"list_item_close"===e[t].type?"":"\n"};t.exports=l},{"./common/utils":5}],21:[function(e,t){"use strict";t.exports=function(e,t,r,n){var s,o,i,l,a,c,u,p,h,f,d,g=e.bMarks[t]+e.tShift[t],m=e.eMarks[t];if(g>m)return!1;if(62!==e.src.charCodeAt(g++))return!1;if(e.level>=e.options.maxNesting)return!1;if(n)return!0;for(32===e.src.charCodeAt(g)&&g++,a=e.blkIndent,e.blkIndent=0,l=[e.bMarks[t]],e.bMarks[t]=g,g=m>g?e.skipSpaces(g):g,o=g>=m,i=[e.tShift[t]],e.tShift[t]=g-e.bMarks[t],p=e.parser.ruler.getRules("blockquote"),s=t+1;r>s&&(g=e.bMarks[s]+e.tShift[s],m=e.eMarks[s],!(g>=m));s++)if(62!==e.src.charCodeAt(g++)){if(o)break;for(d=!1,h=0,f=p.length;f>h;h++)if(p[h](e,s,r,!0)){d=!0;break}if(d)break;l.push(e.bMarks[s]),i.push(e.tShift[s]),e.tShift[s]=-1337}else 32===e.src.charCodeAt(g)&&g++,l.push(e.bMarks[s]),e.bMarks[s]=g,g=m>g?e.skipSpaces(g):g,o=g>=m,i.push(e.tShift[s]),e.tShift[s]=g-e.bMarks[s];for(c=e.parentType,e.parentType="blockquote",e.tokens.push({type:"blockquote_open",lines:u=[t,0],level:e.level++}),e.parser.tokenize(e,t,s),e.tokens.push({type:"blockquote_close",level:--e.level}),e.parentType=c,u[1]=e.line,h=0;h<i.length;h++)e.bMarks[h+t]=l[h],e.tShift[h+t]=i[h];return e.blkIndent=a,!0}},{}],22:[function(e,t){"use strict";t.exports=function(e,t,r){var n,s;if(e.tShift[t]-e.blkIndent<4)return!1;for(s=n=t+1;r>n;)if(e.isEmpty(n))n++;else{if(!(e.tShift[n]-e.blkIndent>=4))break;n++,s=n}return e.line=n,e.tokens.push({type:"code",content:e.getLines(t,s,4+e.blkIndent,!0),block:!0,lines:[t,e.line],level:e.level}),!0}},{}],23:[function(e,t){"use strict";function r(e,t){var r,n,s=e.bMarks[t]+e.tShift[t],o=e.eMarks[t];return s>=o?-1:(n=e.src.charCodeAt(s++),126!==n&&58!==n?-1:(r=e.skipSpaces(s),s===r?-1:r>=o?-1:r))}function n(e,t){var r,n,s=e.level+2;for(r=t+2,n=e.tokens.length-2;n>r;r++)e.tokens[r].level===s&&"paragraph_open"===e.tokens[r].type&&(e.tokens[r+2].tight=!0,e.tokens[r].tight=!0,r+=2)}t.exports=function(e,t,s,o){var i,l,a,c,u,p,h,f,d,g,m,b,v,k;if(o)return e.ddIndent<0?!1:r(e,t)>=0;if(h=t+1,e.isEmpty(h)&&++h>s)return!1;if(e.tShift[h]<e.blkIndent)return!1;if(i=r(e,h),0>i)return!1;if(e.level>=e.options.maxNesting)return!1;p=e.tokens.length,e.tokens.push({type:"dl_open",lines:u=[t,0],level:e.level++}),a=t,l=h;e:for(;;){for(k=!0,v=!1,e.tokens.push({type:"dt_open",lines:[a,a],level:e.level++}),e.tokens.push({type:"inline",content:e.getLines(a,a+1,e.blkIndent,!1).trim(),level:e.level+1,lines:[a,a],children:[]}),e.tokens.push({type:"dt_close",level:--e.level});;){if(e.tokens.push({type:"dd_open",lines:c=[h,0],level:e.level++}),b=e.tight,d=e.ddIndent,f=e.blkIndent,m=e.tShift[l],g=e.parentType,e.blkIndent=e.ddIndent=e.tShift[l]+2,e.tShift[l]=i-e.bMarks[l],e.tight=!0,e.parentType="deflist",e.parser.tokenize(e,l,s,!0),(!e.tight||v)&&(k=!1),v=e.line-l>1&&e.isEmpty(e.line-1),e.tShift[l]=m,e.tight=b,e.parentType=g,e.blkIndent=f,e.ddIndent=d,e.tokens.push({type:"dd_close",level:--e.level}),c[1]=h=e.line,h>=s)break e;if(e.tShift[h]<e.blkIndent)break e;if(i=r(e,h),0>i)break;l=h}if(h>=s)break;if(a=h,e.isEmpty(a))break;if(e.tShift[a]<e.blkIndent)break;if(l=a+1,l>=s)break;if(e.isEmpty(l)&&l++,l>=s)break;if(e.tShift[l]<e.blkIndent)break;if(i=r(e,l),0>i)break}return e.tokens.push({type:"dl_close",level:--e.level}),u[1]=h,e.line=h,k&&n(e,p),!0}},{}],24:[function(e,t){"use strict";t.exports=function(e,t,r,n){var s,o,i,l,a,c=!1,u=e.bMarks[t]+e.tShift[t],p=e.eMarks[t];if(u+3>p)return!1;if(s=e.src.charCodeAt(u),126!==s&&96!==s)return!1;if(a=u,u=e.skipChars(u,s),o=u-a,3>o)return!1;if(i=e.src.slice(u,p).trim(),i.indexOf("`")>=0)return!1;if(n)return!0;for(l=t;(l++,!(l>=r))&&(u=a=e.bMarks[l]+e.tShift[l],p=e.eMarks[l],!(p>u&&e.tShift[l]<e.blkIndent));)if(e.src.charCodeAt(u)===s&&!(e.tShift[l]-e.blkIndent>=4||(u=e.skipChars(u,s),o>u-a||(u=e.skipSpaces(u),p>u)))){c=!0;break}return o=e.tShift[t],e.line=l+(c?1:0),e.tokens.push({type:"fence",params:i,content:e.getLines(t+1,l,o,!0),lines:[t,e.line],level:e.level}),!0}},{}],25:[function(e,t){"use strict";t.exports=function(e,t,r,n){var s,o,i,l,a,c=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];if(c+4>u)return!1;if(91!==e.src.charCodeAt(c))return!1;if(94!==e.src.charCodeAt(c+1))return!1;if(e.level>=e.options.maxNesting)return!1;for(l=c+2;u>l;l++){if(32===e.src.charCodeAt(l))return!1;if(93===e.src.charCodeAt(l))break}return l===c+2?!1:l+1>=u||58!==e.src.charCodeAt(++l)?!1:n?!0:(l++,e.env.footnotes||(e.env.footnotes={}),e.env.footnotes.refs||(e.env.footnotes.refs={}),a=e.src.slice(c+2,l-2),e.env.footnotes.refs[":"+a]=-1,e.tokens.push({type:"footnote_reference_open",label:a,level:e.level++}),s=e.bMarks[t],o=e.tShift[t],i=e.parentType,e.tShift[t]=e.skipSpaces(l)-l,e.bMarks[t]=l,e.blkIndent+=4,e.parentType="footnote",e.tShift[t]<e.blkIndent&&(e.tShift[t]+=e.blkIndent,e.bMarks[t]-=e.blkIndent),e.parser.tokenize(e,t,r,!0),e.parentType=i,e.blkIndent-=4,e.tShift[t]=o,e.bMarks[t]=s,e.tokens.push({type:"footnote_reference_close",level:--e.level}),!0)}},{}],26:[function(e,t){"use strict";t.exports=function(e,t,r,n){var s,o,i,l=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(l>=a)return!1;if(s=e.src.charCodeAt(l),35!==s||l>=a)return!1;for(o=1,s=e.src.charCodeAt(++l);35===s&&a>l&&6>=o;)o++,s=e.src.charCodeAt(++l);return o>6||a>l&&32!==s?!1:n?!0:(a=e.skipCharsBack(a,32,l),i=e.skipCharsBack(a,35,l),i>l&&32===e.src.charCodeAt(i-1)&&(a=i),e.line=t+1,e.tokens.push({type:"heading_open",hLevel:o,lines:[t,e.line],level:e.level}),a>l&&e.tokens.push({type:"inline",content:e.src.slice(l,a).trim(),level:e.level+1,lines:[t,e.line],children:[]}),e.tokens.push({type:"heading_close",hLevel:o,level:e.level}),!0)}},{}],27:[function(e,t){"use strict";t.exports=function(e,t,r,n){var s,o,i,l=e.bMarks[t],a=e.eMarks[t];if(l+=e.tShift[t],l>a)return!1;if(s=e.src.charCodeAt(l++),42!==s&&45!==s&&95!==s)return!1;for(o=1;a>l;){if(i=e.src.charCodeAt(l++),i!==s&&32!==i)return!1;i===s&&o++}return 3>o?!1:n?!0:(e.line=t+1,e.tokens.push({type:"hr",lines:[t,e.line],level:e.level}),!0)}},{}],28:[function(e,t){"use strict";function r(e){var t=32|e;return t>=97&&122>=t}var n=e("../common/html_blocks"),s=/^<([a-zA-Z]{1,15})[\s\/>]/,o=/^<\/([a-zA-Z]{1,15})[\s>]/;t.exports=function(e,t,i,l){var a,c,u,p=e.bMarks[t],h=e.eMarks[t],f=e.tShift[t];if(p+=f,!e.options.html)return!1;if(f>3||p+2>=h)return!1;if(60!==e.src.charCodeAt(p))return!1;if(a=e.src.charCodeAt(p+1),33===a||63===a){if(l)return!0}else{if(47!==a&&!r(a))return!1;if(47===a){if(c=e.src.slice(p,h).match(o),!c)return!1}else if(c=e.src.slice(p,h).match(s),!c)return!1;if(n[c[1].toLowerCase()]!==!0)return!1;if(l)return!0}for(u=t+1;u<e.lineMax&&!e.isEmpty(u);)u++;return e.line=u,e.tokens.push({type:"htmlblock",level:e.level,lines:[t,e.line],content:e.getLines(t,u,0,!0)}),!0}},{"../common/html_blocks":2}],29:[function(e,t){"use strict";t.exports=function(e,t,r){var n,s,o,i=t+1;return i>=r?!1:e.tShift[i]<e.blkIndent?!1:e.tShift[i]-e.blkIndent>3?!1:(s=e.bMarks[i]+e.tShift[i],o=e.eMarks[i],s>=o?!1:(n=e.src.charCodeAt(s),45!==n&&61!==n?!1:(s=e.skipChars(s,n),s=e.skipSpaces(s),o>s?!1:(s=e.bMarks[t]+e.tShift[t],e.line=i+1,e.tokens.push({type:"heading_open",hLevel:61===n?1:2,lines:[t,e.line],level:e.level}),e.tokens.push({type:"inline",content:e.src.slice(s,e.eMarks[t]).trim(),level:e.level+1,lines:[t,e.line-1],children:[]}),e.tokens.push({type:"heading_close",hLevel:61===n?1:2,level:e.level}),!0))))}},{}],30:[function(e,t){"use strict";function r(e,t){var r,n,s;return n=e.bMarks[t]+e.tShift[t],s=e.eMarks[t],n>=s?-1:(r=e.src.charCodeAt(n++),42!==r&&45!==r&&43!==r?-1:s>n&&32!==e.src.charCodeAt(n)?-1:n)}function n(e,t){var r,n=e.bMarks[t]+e.tShift[t],s=e.eMarks[t];if(n+1>=s)return-1;if(r=e.src.charCodeAt(n++),48>r||r>57)return-1;for(;;){if(n>=s)return-1;if(r=e.src.charCodeAt(n++),!(r>=48&&57>=r)){if(41===r||46===r)break;return-1}}return s>n&&32!==e.src.charCodeAt(n)?-1:n}function s(e,t){var r,n,s=e.level+2;for(r=t+2,n=e.tokens.length-2;n>r;r++)e.tokens[r].level===s&&"paragraph_open"===e.tokens[r].type&&(e.tokens[r+2].tight=!0,e.tokens[r].tight=!0,r+=2)}t.exports=function(e,t,o,i){var l,a,c,u,p,h,f,d,g,m,b,v,k,_,y,x,w,A,q,C,S,E,M=!0;if((d=n(e,t))>=0)k=!0;else{if(!((d=r(e,t))>=0))return!1;k=!1}if(e.level>=e.options.maxNesting)return!1;if(v=e.src.charCodeAt(d-1),i)return!0;for(y=e.tokens.length,k?(f=e.bMarks[t]+e.tShift[t],b=Number(e.src.substr(f,d-f-1)),e.tokens.push({type:"ordered_list_open",order:b,lines:w=[t,0],level:e.level++})):e.tokens.push({type:"bullet_list_open",lines:w=[t,0],level:e.level++}),l=t,x=!1,q=e.parser.ruler.getRules("list");!(!(o>l)||(_=e.skipSpaces(d),g=e.eMarks[l],m=_>=g?1:_-d,m>4&&(m=1),1>m&&(m=1),a=d-e.bMarks[l]+m,e.tokens.push({type:"list_item_open",lines:A=[t,0],level:e.level++}),u=e.blkIndent,p=e.tight,c=e.tShift[t],h=e.parentType,e.tShift[t]=_-e.bMarks[t],e.blkIndent=a,e.tight=!0,e.parentType="list",e.parser.tokenize(e,t,o,!0),(!e.tight||x)&&(M=!1),x=e.line-t>1&&e.isEmpty(e.line-1),e.blkIndent=u,e.tShift[t]=c,e.tight=p,e.parentType=h,e.tokens.push({type:"list_item_close",level:--e.level}),l=t=e.line,A[1]=l,_=e.bMarks[t],l>=o)||e.isEmpty(l)||e.tShift[l]<e.blkIndent);){for(E=!1,C=0,S=q.length;S>C;C++)if(q[C](e,l,o,!0)){E=!0;break}if(E)break;if(k){if(d=n(e,l),0>d)break}else if(d=r(e,l),0>d)break;if(v!==e.src.charCodeAt(d-1))break}return e.tokens.push({type:k?"ordered_list_close":"bullet_list_close",level:--e.level}),w[1]=l,e.line=l,M&&s(e,y),!0}},{}],31:[function(e,t){"use strict";t.exports=function(e,t){var r,n,s,o,i,l,a=t+1;if(r=e.lineMax,r>a&&!e.isEmpty(a))for(l=e.parser.ruler.getRules("paragraph");r>a&&!e.isEmpty(a);a++)if(!(e.tShift[a]-e.blkIndent>3)){for(s=!1,o=0,i=l.length;i>o;o++)if(l[o](e,a,r,!0)){s=!0;break}if(s)break}return n=e.getLines(t,a,e.blkIndent,!1).trim(),e.line=a,n.length&&(e.tokens.push({type:"paragraph_open",tight:!1,lines:[t,e.line],level:e.level}),e.tokens.push({type:"inline",content:n,level:e.level+1,lines:[t,e.line],children:[]}),e.tokens.push({type:"paragraph_close",tight:!1,level:e.level})),!0}},{}],32:[function(e,t){"use strict";function r(e,t,r,n,s){var o,i,l,a,c,u,p;for(this.src=e,this.parser=t,this.options=r,this.env=n,this.tokens=s,this.bMarks=[],this.eMarks=[],this.tShift=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.parentType="root",this.ddIndent=-1,this.level=0,this.result="",i=this.src,u=0,p=!1,l=a=u=0,c=i.length;c>a;a++){if(o=i.charCodeAt(a),!p){if(32===o){u++;continue}p=!0}(10===o||a===c-1)&&(10!==o&&a++,this.bMarks.push(l),this.eMarks.push(a),this.tShift.push(u),p=!1,u=0,l=a+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.lineMax=this.bMarks.length-1}r.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},r.prototype.skipEmptyLines=function(e){for(var t=this.lineMax;t>e&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},r.prototype.skipSpaces=function(e){for(var t=this.src.length;t>e&&32===this.src.charCodeAt(e);e++);return e},r.prototype.skipChars=function(e,t){for(var r=this.src.length;r>e&&this.src.charCodeAt(e)===t;e++);return e},r.prototype.skipCharsBack=function(e,t,r){if(r>=e)return e;for(;e>r;)if(t!==this.src.charCodeAt(--e))return e+1;return e},r.prototype.getLines=function(e,t,r,n){var s,o,i,l,a,c=e;if(e>=t)return"";if(c+1===t)return o=this.bMarks[c]+Math.min(this.tShift[c],r),i=n?this.eMarks[c]+1:this.eMarks[c],this.src.slice(o,i);for(l=new Array(t-e),s=0;t>c;c++,s++)a=this.tShift[c],a>r&&(a=r),0>a&&(a=0),o=this.bMarks[c]+a,i=t>c+1||n?this.eMarks[c]+1:this.eMarks[c],l[s]=this.src.slice(o,i);return l.join("")},t.exports=r},{}],33:[function(e,t){"use strict";function r(e,t){var r=e.bMarks[t]+e.blkIndent,n=e.eMarks[t];return e.src.substr(r,n-r)}t.exports=function(e,t,n,s){var o,i,l,a,c,u,p,h,f,d,g;if(t+2>n)return!1;if(c=t+1,e.tShift[c]<e.blkIndent)return!1;if(l=e.bMarks[c]+e.tShift[c],l>=e.eMarks[c])return!1;if(o=e.src.charCodeAt(l),124!==o&&45!==o&&58!==o)return!1;if(i=r(e,t+1),!/^[-:| ]+$/.test(i))return!1;if(u=i.split("|"),2>=u)return!1;for(h=[],a=0;a<u.length;a++){if(f=u[a].trim(),!f){if(0===a||a===u.length-1)continue;return!1}if(!/^:?-+:?$/.test(f))return!1;h.push(58===f.charCodeAt(f.length-1)?58===f.charCodeAt(0)?"center":"right":58===f.charCodeAt(0)?"left":"")}if(i=r(e,t).trim(),-1===i.indexOf("|"))return!1;if(u=i.replace(/^\||\|$/g,"").split("|"),h.length!==u.length)return!1;if(s)return!0;for(e.tokens.push({type:"table_open",lines:d=[t,0],level:e.level++}),e.tokens.push({type:"thead_open",lines:[t,t+1],level:e.level++}),e.tokens.push({type:"tr_open",lines:[t,t+1],level:e.level++}),a=0;a<u.length;a++)e.tokens.push({type:"th_open",align:h[a],lines:[t,t+1],level:e.level++}),e.tokens.push({type:"inline",content:u[a].trim(),lines:[t,t+1],level:e.level,children:[]}),e.tokens.push({type:"th_close",level:--e.level});for(e.tokens.push({type:"tr_close",level:--e.level}),e.tokens.push({type:"thead_close",level:--e.level}),e.tokens.push({type:"tbody_open",lines:g=[t+2,0],level:e.level++}),c=t+2;n>c&&!(e.tShift[c]<e.blkIndent)&&(i=r(e,c).trim(),-1!==i.indexOf("|"));c++){for(u=i.replace(/^\||\|$/g,"").split("|"),e.tokens.push({type:"tr_open",level:e.level++}),a=0;a<u.length;a++)e.tokens.push({type:"td_open",align:h[a],level:e.level++}),p=u[a].substring(124===u[a].charCodeAt(0)?1:0,124===u[a].charCodeAt(u[a].length-1)?u[a].length-1:u[a].length).trim(),e.tokens.push({type:"inline",content:p,level:e.level,children:[]}),e.tokens.push({type:"td_close",level:--e.level});e.tokens.push({type:"tr_close",level:--e.level})}return e.tokens.push({type:"tbody_close",level:--e.level}),e.tokens.push({type:"table_close",level:--e.level}),d[1]=g[1]=c,e.line=c,!0}},{}],34:[function(e,t){"use strict";function r(e,t,r,o){var i,l,a,c,u,p;if(42!==e.charCodeAt(0))return-1;if(91!==e.charCodeAt(1))return-1;if(-1===e.indexOf("]:"))return-1;if(i=new n(e,t,r,o,[]),l=s(i,1),0>l||58!==e.charCodeAt(l+1))return-1;for(c=i.posMax,a=l+2;c>a&&10!==i.src.charCodeAt(a);a++);return u=e.slice(2,l),p=e.slice(l+2,a).trim(),0===p.length?-1:(o.abbreviations||(o.abbreviations={}),"undefined"==typeof o.abbreviations[":"+u]&&(o.abbreviations[":"+u]=p),a)}var n=e("../rules_inline/state_inline"),s=e("../helpers/parse_link_label");t.exports=function(e){var t,n,s,o,i=e.tokens;if(!e.inlineMode)for(t=1,n=i.length-1;n>t;t++)if("paragraph_open"===i[t-1].type&&"inline"===i[t].type&&"paragraph_close"===i[t+1].type){for(s=i[t].content;s.length&&(o=r(s,e.inline,e.options,e.env),!(0>o));)s=s.slice(o).trim();i[t].content=s,s.length||(i[t-1].tight=!0,i[t+1].tight=!0)}}},{"../helpers/parse_link_label":12,"../rules_inline/state_inline":56}],35:[function(e,t){"use strict";function r(e){return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1")}var n=" \n()[]'\".,!?-";t.exports=function(e){var t,s,o,i,l,a,c,u,p,h,f,d,g=e.tokens;if(e.env.abbreviations)for(e.env.abbrRegExp||(d="(^|["+n.split("").map(r).join("")+"])("+Object.keys(e.env.abbreviations).map(function(e){return e.substr(1)}).sort(function(e,t){return t.length-e.length}).map(r).join("|")+")($|["+n.split("").map(r).join("")+"])",e.env.abbrRegExp=new RegExp(d,"g")),h=e.env.abbrRegExp,s=0,o=g.length;o>s;s++)if("inline"===g[s].type)for(i=g[s].children,t=i.length-1;t>=0;t--)if(l=i[t],"text"===l.type){for(u=0,a=l.content,h.lastIndex=0,p=l.level,c=[];f=h.exec(a);)h.lastIndex>u&&c.push({type:"text",content:a.slice(u,f.index+f[1].length),level:p}),c.push({type:"abbr_open",title:e.env.abbreviations[":"+f[2]],level:p++}),c.push({type:"text",content:f[2],level:p}),c.push({type:"abbr_close",level:--p}),u=h.lastIndex-f[3].length;c.length&&(u<a.length&&c.push({type:"text",content:a.slice(u),level:p}),g[s].children=i=[].concat(i.slice(0,t),c,i.slice(t+1)))}}},{}],36:[function(e,t){"use strict";t.exports=function(e){e.inlineMode?e.tokens.push({type:"inline",content:e.src.replace(/\n/g," ").trim(),level:0,lines:[0,1],children:[]}):e.block.parse(e.src,e.options,e.env,e.tokens)}},{}],37:[function(e,t){"use strict";t.exports=function(e){var t,r,n,s,o,i,l,a,c,u=0,p=!1,h={};if(e.env.footnotes&&(e.tokens=e.tokens.filter(function(e){return"footnote_reference_open"===e.type?(p=!0,a=[],c=e.label,!1):"footnote_reference_close"===e.type?(p=!1,h[":"+c]=a,!1):(p&&a.push(e),!p)}),e.env.footnotes.list)){for(i=e.env.footnotes.list,e.tokens.push({type:"footnote_block_open",level:u++}),t=0,r=i.length;r>t;t++){for(e.tokens.push({type:"footnote_open",id:t,level:u++}),i[t].tokens?(l=[],l.push({type:"paragraph_open",tight:!1,level:u++}),l.push({type:"inline",content:"",level:u,children:i[t].tokens}),l.push({type:"paragraph_close",tight:!1,level:--u})):i[t].label&&(l=h[":"+i[t].label]),e.tokens=e.tokens.concat(l),o="paragraph_close"===e.tokens[e.tokens.length-1].type?e.tokens.pop():null,s=i[t].count>0?i[t].count:1,n=0;s>n;n++)e.tokens.push({type:"footnote_anchor",id:t,subId:n,level:u});o&&e.tokens.push(o),e.tokens.push({type:"footnote_close",level:--u})}e.tokens.push({type:"footnote_block_close",level:--u})}}},{}],38:[function(e,t){"use strict";t.exports=function(e){var t,r,n,s=e.tokens;for(r=0,n=s.length;n>r;r++)t=s[r],"inline"===t.type&&e.inline.parse(t.content,e.options,e.env,t.children)}},{}],39:[function(e,t){"use strict";function r(e){return/^<a[>\s]/i.test(e)}function n(e){return/^<\/a\s*>/i.test(e)}function s(){var e=[],t=new o({stripPrefix:!1,url:!0,email:!0,twitter:!1,replaceFn:function(t,r){switch(r.getType()){case"url":e.push({text:r.matchedText,url:r.getUrl()});break;case"email":e.push({text:r.matchedText,url:"mailto:"+r.getEmail().replace(/^mailto:/i,"")})}return!1}});return{links:e,autolinker:t}}var o=e("autolinker"),i=/www|@|\:\/\//;t.exports=function(e){var t,o,l,a,c,u,p,h,f,d,g,m,b,v=e.tokens,k=null;if(e.options.linkify)for(o=0,l=v.length;l>o;o++)if("inline"===v[o].type)for(a=v[o].children,
    g=0,t=a.length-1;t>=0;t--)if(c=a[t],"link_close"!==c.type){if("htmltag"===c.type&&(r(c.content)&&g>0&&g--,n(c.content)&&g++),!(g>0)&&"text"===c.type&&i.test(c.content)){if(k||(k=s(),m=k.links,b=k.autolinker),u=c.content,m.length=0,b.link(u),!m.length)continue;for(p=[],d=c.level,h=0;h<m.length;h++)e.inline.validateLink(m[h].url)&&(f=u.indexOf(m[h].text),f&&(d=d,p.push({type:"text",content:u.slice(0,f),level:d})),p.push({type:"link_open",href:m[h].url,title:"",level:d++}),p.push({type:"text",content:m[h].text,level:d}),p.push({type:"link_close",level:--d}),u=u.slice(f+m[h].text.length));u.length&&p.push({type:"text",content:u,level:d}),v[o].children=a=[].concat(a.slice(0,t),p,a.slice(t+1))}}else for(t--;a[t].level!==c.level&&"link_open"!==a[t].type;)t--}},{autolinker:60}],40:[function(e,t){"use strict";function r(e,t,r,a){var c,u,p,h,f,d,g,m,b;if(91!==e.charCodeAt(0))return-1;if(-1===e.indexOf("]:"))return-1;if(c=new n(e,t,r,a,[]),u=s(c,0),0>u||58!==e.charCodeAt(u+1))return-1;for(h=c.posMax,p=u+2;h>p&&(f=c.src.charCodeAt(p),32===f||10===f);p++);if(!o(c,p))return-1;for(g=c.linkContent,p=c.pos,d=p,p+=1;h>p&&(f=c.src.charCodeAt(p),32===f||10===f);p++);for(h>p&&d!==p&&i(c,p)?(m=c.linkContent,p=c.pos):(m="",p=d);h>p&&32===c.src.charCodeAt(p);)p++;return h>p&&10!==c.src.charCodeAt(p)?-1:(b=l(e.slice(1,u)),"undefined"==typeof a.references[b]&&(a.references[b]={title:m,href:g}),p)}var n=e("../rules_inline/state_inline"),s=e("../helpers/parse_link_label"),o=e("../helpers/parse_link_destination"),i=e("../helpers/parse_link_title"),l=e("../helpers/normalize_reference");t.exports=function(e){var t,n,s,o,i=e.tokens;if(e.env.references=e.env.references||{},!e.inlineMode)for(t=1,n=i.length-1;n>t;t++)if("inline"===i[t].type&&"paragraph_open"===i[t-1].type&&"paragraph_close"===i[t+1].type){for(s=i[t].content;s.length&&(o=r(s,e.inline,e.options,e.env),!(0>o));)s=s.slice(o).trim();i[t].content=s,s.length||(i[t-1].tight=!0,i[t+1].tight=!0)}}},{"../helpers/normalize_reference":10,"../helpers/parse_link_destination":11,"../helpers/parse_link_label":12,"../helpers/parse_link_title":13,"../rules_inline/state_inline":56}],41:[function(e,t){"use strict";function r(e){return e.indexOf("(")<0?e:e.replace(s,function(e,t){return o[t.toLowerCase()]})}var n=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,s=/\((c|tm|r|p)\)/gi,o={c:"©",r:"®",p:"§",tm:"™"};t.exports=function(e){var t,s,o,i,l;if(e.options.typographer)for(l=e.tokens.length-1;l>=0;l--)if("inline"===e.tokens[l].type)for(i=e.tokens[l].children,t=i.length-1;t>=0;t--)s=i[t],"text"===s.type&&(o=s.content,o=r(o),n.test(o)&&(o=o.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---([^-]|$)/gm,"$1—$2").replace(/(^|\s)--(\s|$)/gm,"$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/gm,"$1–$2")),s.content=o)}},{}],42:[function(e,t){"use strict";function r(e,t){return 0>t||t>=e.length?!1:!i.test(e[t])}function n(e,t,r){return e.substr(0,t)+r+e.substr(t+1)}var s=/['"]/,o=/['"]/g,i=/[-\s()\[\]]/,l="’";t.exports=function(e){var t,i,a,c,u,p,h,f,d,g,m,b,v,k,_,y,x;if(e.options.typographer)for(x=[],_=e.tokens.length-1;_>=0;_--)if("inline"===e.tokens[_].type)for(y=e.tokens[_].children,x.length=0,t=0;t<y.length;t++)if(i=y[t],"text"===i.type&&!s.test(i.text)){for(h=y[t].level,v=x.length-1;v>=0&&!(x[v].level<=h);v--);x.length=v+1,a=i.content,u=0,p=a.length;e:for(;p>u&&(o.lastIndex=u,c=o.exec(a));)if(f=!r(a,c.index-1),u=c.index+1,k="'"===c[0],d=!r(a,u),d||f){if(m=!d,b=!f)for(v=x.length-1;v>=0&&(g=x[v],!(x[v].level<h));v--)if(g.single===k&&x[v].level===h){g=x[v],k?(y[g.token].content=n(y[g.token].content,g.pos,e.options.quotes[2]),i.content=n(i.content,c.index,e.options.quotes[3])):(y[g.token].content=n(y[g.token].content,g.pos,e.options.quotes[0]),i.content=n(i.content,c.index,e.options.quotes[1])),x.length=v;continue e}m?x.push({token:t,pos:c.index,single:k,level:h}):b&&k&&(i.content=n(i.content,c.index,l))}else k&&(i.content=n(i.content,c.index,l))}}},{}],43:[function(e,t){"use strict";var r=e("../common/url_schemas"),n=e("../helpers/normalize_link"),s=/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,o=/^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;t.exports=function(e,t){var i,l,a,c,u,p=e.pos;return 60!==e.src.charCodeAt(p)?!1:(i=e.src.slice(p),i.indexOf(">")<0?!1:(l=i.match(o))?r.indexOf(l[1].toLowerCase())<0?!1:(c=l[0].slice(1,-1),u=n(c),e.parser.validateLink(c)?(t||(e.push({type:"link_open",href:u,level:e.level}),e.push({type:"text",content:c,level:e.level+1}),e.push({type:"link_close",level:e.level})),e.pos+=l[0].length,!0):!1):(a=i.match(s),a?(c=a[0].slice(1,-1),u=n("mailto:"+c),e.parser.validateLink(u)?(t||(e.push({type:"link_open",href:u,level:e.level}),e.push({type:"text",content:c,level:e.level+1}),e.push({type:"link_close",level:e.level})),e.pos+=a[0].length,!0):!1):!1))}},{"../common/url_schemas":4,"../helpers/normalize_link":9}],44:[function(e,t){"use strict";t.exports=function(e,t){var r,n,s,o,i,l=e.pos,a=e.src.charCodeAt(l);if(96!==a)return!1;for(r=l,l++,n=e.posMax;n>l&&96===e.src.charCodeAt(l);)l++;for(s=e.src.slice(r,l),o=i=l;-1!==(o=e.src.indexOf("`",i));){for(i=o+1;n>i&&96===e.src.charCodeAt(i);)i++;if(i-o===s.length)return t||e.push({type:"code",content:e.src.slice(l,o).replace(/[ \n]+/g," ").trim(),block:!1,level:e.level}),e.pos=i,!0}return t||(e.pending+=s),e.pos+=s.length,!0}},{}],45:[function(e,t){"use strict";t.exports=function(e,t){var r,n,s,o,i,l=e.posMax,a=e.pos;if(126!==e.src.charCodeAt(a))return!1;if(t)return!1;if(a+4>=l)return!1;if(126!==e.src.charCodeAt(a+1))return!1;if(e.level>=e.options.maxNesting)return!1;if(o=a>0?e.src.charCodeAt(a-1):-1,i=e.src.charCodeAt(a+2),126===o)return!1;if(126===i)return!1;if(32===i||10===i)return!1;for(n=a+2;l>n&&126===e.src.charCodeAt(n);)n++;if(n>a+3)return e.pos+=n-a,t||(e.pending+=e.src.slice(a,n)),!0;for(e.pos=a+2,s=1;e.pos+1<l;){if(126===e.src.charCodeAt(e.pos)&&126===e.src.charCodeAt(e.pos+1)&&(o=e.src.charCodeAt(e.pos-1),i=e.pos+2<l?e.src.charCodeAt(e.pos+2):-1,126!==i&&126!==o&&(32!==o&&10!==o?s--:32!==i&&10!==i&&s++,0>=s))){r=!0;break}e.parser.skipToken(e)}return r?(e.posMax=e.pos,e.pos=a+2,t||(e.push({type:"del_open",level:e.level++}),e.parser.tokenize(e),e.push({type:"del_close",level:--e.level})),e.pos=e.posMax+2,e.posMax=l,!0):(e.pos=a,!1)}},{}],46:[function(e,t){"use strict";function r(e){return e>=48&&57>=e||e>=65&&90>=e||e>=97&&122>=e}function n(e,t){var n,s,o,i=t,l=!0,a=!0,c=e.posMax,u=e.src.charCodeAt(t);for(n=t>0?e.src.charCodeAt(t-1):-1;c>i&&e.src.charCodeAt(i)===u;)i++;return i>=c&&(l=!1),o=i-t,o>=4?l=a=!1:(s=c>i?e.src.charCodeAt(i):-1,(32===s||10===s)&&(l=!1),(32===n||10===n)&&(a=!1),95===u&&(r(n)&&(l=!1),r(s)&&(a=!1))),{can_open:l,can_close:a,delims:o}}t.exports=function(e,t){var r,s,o,i,l,a,c,u=e.posMax,p=e.pos,h=e.src.charCodeAt(p);if(95!==h&&42!==h)return!1;if(t)return!1;if(c=n(e,p),r=c.delims,!c.can_open)return e.pos+=r,t||(e.pending+=e.src.slice(p,e.pos)),!0;if(e.level>=e.options.maxNesting)return!1;for(e.pos=p+r,a=[r];e.pos<u;)if(e.src.charCodeAt(e.pos)!==h)e.parser.skipToken(e);else{if(c=n(e,e.pos),s=c.delims,c.can_close){for(i=a.pop(),l=s;i!==l;){if(i>l){a.push(i-l);break}if(l-=i,0===a.length)break;e.pos+=i,i=a.pop()}if(0===a.length){r=i,o=!0;break}e.pos+=s;continue}c.can_open&&a.push(s),e.pos+=s}return o?(e.posMax=e.pos,e.pos=p+r,t||((2===r||3===r)&&e.push({type:"strong_open",level:e.level++}),(1===r||3===r)&&e.push({type:"em_open",level:e.level++}),e.parser.tokenize(e),(1===r||3===r)&&e.push({type:"em_close",level:--e.level}),(2===r||3===r)&&e.push({type:"strong_close",level:--e.level})),e.pos=e.posMax+r,e.posMax=u,!0):(e.pos=p,!1)}},{}],47:[function(e,t){"use strict";var r=e("../common/entities"),n=e("../common/utils").has,s=e("../common/utils").isValidEntityCode,o=e("../common/utils").fromCodePoint,i=/^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,l=/^&([a-z][a-z0-9]{1,31});/i;t.exports=function(e,t){var a,c,u,p=e.pos,h=e.posMax;if(38!==e.src.charCodeAt(p))return!1;if(h>p+1)if(a=e.src.charCodeAt(p+1),35===a){if(u=e.src.slice(p).match(i))return t||(c="x"===u[1][0].toLowerCase()?parseInt(u[1].slice(1),16):parseInt(u[1],10),e.pending+=o(s(c)?c:65533)),e.pos+=u[0].length,!0}else if(u=e.src.slice(p).match(l),u&&n(r,u[1]))return t||(e.pending+=r[u[1]]),e.pos+=u[0].length,!0;return t||(e.pending+="&"),e.pos++,!0}},{"../common/entities":1,"../common/utils":5}],48:[function(e,t){"use strict";for(var r=[],n=0;256>n;n++)r.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){r[e.charCodeAt(0)]=1}),t.exports=function(e,t){var n,s=e.pos,o=e.posMax;if(92!==e.src.charCodeAt(s))return!1;if(s++,o>s){if(n=e.src.charCodeAt(s),256>n&&0!==r[n])return t||(e.pending+=e.src[s]),e.pos+=2,!0;if(10===n){for(t||e.push({type:"hardbreak",level:e.level}),s++;o>s&&32===e.src.charCodeAt(s);)s++;return e.pos=s,!0}}return t||(e.pending+="\\"),e.pos++,!0}},{}],49:[function(e,t){"use strict";var r=e("../helpers/parse_link_label");t.exports=function(e,t){var n,s,o,i,l=e.posMax,a=e.pos;return a+2>=l?!1:94!==e.src.charCodeAt(a)?!1:91!==e.src.charCodeAt(a+1)?!1:e.level>=e.options.maxNesting?!1:(n=a+2,s=r(e,a+1),0>s?!1:(t||(e.env.footnotes||(e.env.footnotes={}),e.env.footnotes.list||(e.env.footnotes.list=[]),o=e.env.footnotes.list.length,e.pos=n,e.posMax=s,e.push({type:"footnote_ref",id:o,level:e.level}),e.linkLevel++,i=e.tokens.length,e.parser.tokenize(e),e.env.footnotes.list[o]={tokens:e.tokens.splice(i)},e.linkLevel--),e.pos=s+1,e.posMax=l,!0))}},{"../helpers/parse_link_label":12}],50:[function(e,t){"use strict";t.exports=function(e,t){var r,n,s,o,i=e.posMax,l=e.pos;if(l+3>i)return!1;if(!e.env.footnotes||!e.env.footnotes.refs)return!1;if(91!==e.src.charCodeAt(l))return!1;if(94!==e.src.charCodeAt(l+1))return!1;if(e.level>=e.options.maxNesting)return!1;for(n=l+2;i>n;n++){if(32===e.src.charCodeAt(n))return!1;if(10===e.src.charCodeAt(n))return!1;if(93===e.src.charCodeAt(n))break}return n===l+2?!1:n>=i?!1:(n++,r=e.src.slice(l+2,n-1),"undefined"==typeof e.env.footnotes.refs[":"+r]?!1:(t||(e.env.footnotes.list||(e.env.footnotes.list=[]),e.env.footnotes.refs[":"+r]<0?(s=e.env.footnotes.list.length,e.env.footnotes.list[s]={label:r,count:0},e.env.footnotes.refs[":"+r]=s):s=e.env.footnotes.refs[":"+r],o=e.env.footnotes.list[s].count,e.env.footnotes.list[s].count++,e.push({type:"footnote_ref",id:s,subId:o,level:e.level})),e.pos=n,e.posMax=i,!0))}},{}],51:[function(e,t){"use strict";function r(e){var t=32|e;return t>=97&&122>=t}var n=e("../common/html_re").HTML_TAG_RE;t.exports=function(e,t){var s,o,i,l=e.pos;return e.options.html?(i=e.posMax,60!==e.src.charCodeAt(l)||l+2>=i?!1:(s=e.src.charCodeAt(l+1),(33===s||63===s||47===s||r(s))&&(o=e.src.slice(l).match(n))?(t||e.push({type:"htmltag",content:e.src.slice(l,l+o[0].length),level:e.level}),e.pos+=o[0].length,!0):!1)):!1}},{"../common/html_re":3}],52:[function(e,t){"use strict";t.exports=function(e,t){var r,n,s,o,i,l=e.posMax,a=e.pos;if(43!==e.src.charCodeAt(a))return!1;if(t)return!1;if(a+4>=l)return!1;if(43!==e.src.charCodeAt(a+1))return!1;if(e.level>=e.options.maxNesting)return!1;if(o=a>0?e.src.charCodeAt(a-1):-1,i=e.src.charCodeAt(a+2),43===o)return!1;if(43===i)return!1;if(32===i||10===i)return!1;for(n=a+2;l>n&&43===e.src.charCodeAt(n);)n++;if(n!==a+2)return e.pos+=n-a,t||(e.pending+=e.src.slice(a,n)),!0;for(e.pos=a+2,s=1;e.pos+1<l;){if(43===e.src.charCodeAt(e.pos)&&43===e.src.charCodeAt(e.pos+1)&&(o=e.src.charCodeAt(e.pos-1),i=e.pos+2<l?e.src.charCodeAt(e.pos+2):-1,43!==i&&43!==o&&(32!==o&&10!==o?s--:32!==i&&10!==i&&s++,0>=s))){r=!0;break}e.parser.skipToken(e)}return r?(e.posMax=e.pos,e.pos=a+2,t||(e.push({type:"ins_open",level:e.level++}),e.parser.tokenize(e),e.push({type:"ins_close",level:--e.level})),e.pos=e.posMax+2,e.posMax=l,!0):(e.pos=a,!1)}},{}],53:[function(e,t){"use strict";var r=e("../helpers/parse_link_label"),n=e("../helpers/parse_link_destination"),s=e("../helpers/parse_link_title"),o=e("../helpers/normalize_reference");t.exports=function(e,t){var i,l,a,c,u,p,h,f,d=!1,g=e.pos,m=e.posMax,b=e.pos,v=e.src.charCodeAt(b);if(33===v&&(d=!0,v=e.src.charCodeAt(++b)),91!==v)return!1;if(e.level>=e.options.maxNesting)return!1;if(i=b+1,l=r(e,b),0>l)return!1;if(p=l+1,m>p&&40===e.src.charCodeAt(p)){for(p++;m>p&&(f=e.src.charCodeAt(p),32===f||10===f);p++);if(p>=m)return!1;for(b=p,n(e,p)?(c=e.linkContent,p=e.pos):c="",b=p;m>p&&(f=e.src.charCodeAt(p),32===f||10===f);p++);if(m>p&&b!==p&&s(e,p))for(u=e.linkContent,p=e.pos;m>p&&(f=e.src.charCodeAt(p),32===f||10===f);p++);else u="";if(p>=m||41!==e.src.charCodeAt(p))return e.pos=g,!1;p++}else{if(e.linkLevel>0)return!1;for(;m>p&&(f=e.src.charCodeAt(p),32===f||10===f);p++);if(m>p&&91===e.src.charCodeAt(p)&&(b=p+1,p=r(e,p),p>=0?a=e.src.slice(b,p++):p=b-1),a||("undefined"==typeof a&&(p=l+1),a=e.src.slice(i,l)),h=e.env.references[o(a)],!h)return e.pos=g,!1;c=h.href,u=h.title}return t||(e.pos=i,e.posMax=l,d?e.push({type:"image",src:c,title:u,alt:e.src.substr(i,l-i),level:e.level}):(e.push({type:"link_open",href:c,title:u,level:e.level++}),e.linkLevel++,e.parser.tokenize(e),e.linkLevel--,e.push({type:"link_close",level:--e.level}))),e.pos=p,e.posMax=m,!0}},{"../helpers/normalize_reference":10,"../helpers/parse_link_destination":11,"../helpers/parse_link_label":12,"../helpers/parse_link_title":13}],54:[function(e,t){"use strict";t.exports=function(e,t){var r,n,s,o,i,l=e.posMax,a=e.pos;if(61!==e.src.charCodeAt(a))return!1;if(t)return!1;if(a+4>=l)return!1;if(61!==e.src.charCodeAt(a+1))return!1;if(e.level>=e.options.maxNesting)return!1;if(o=a>0?e.src.charCodeAt(a-1):-1,i=e.src.charCodeAt(a+2),61===o)return!1;if(61===i)return!1;if(32===i||10===i)return!1;for(n=a+2;l>n&&61===e.src.charCodeAt(n);)n++;if(n!==a+2)return e.pos+=n-a,t||(e.pending+=e.src.slice(a,n)),!0;for(e.pos=a+2,s=1;e.pos+1<l;){if(61===e.src.charCodeAt(e.pos)&&61===e.src.charCodeAt(e.pos+1)&&(o=e.src.charCodeAt(e.pos-1),i=e.pos+2<l?e.src.charCodeAt(e.pos+2):-1,61!==i&&61!==o&&(32!==o&&10!==o?s--:32!==i&&10!==i&&s++,0>=s))){r=!0;break}e.parser.skipToken(e)}return r?(e.posMax=e.pos,e.pos=a+2,t||(e.push({type:"mark_open",level:e.level++}),e.parser.tokenize(e),e.push({type:"mark_close",level:--e.level})),e.pos=e.posMax+2,e.posMax=l,!0):(e.pos=a,!1)}},{}],55:[function(e,t){"use strict";t.exports=function(e,t){var r,n,s=e.pos;if(10!==e.src.charCodeAt(s))return!1;if(r=e.pending.length-1,n=e.posMax,!t)if(r>=0&&32===e.pending.charCodeAt(r))if(r>=1&&32===e.pending.charCodeAt(r-1)){for(var o=r-2;o>=0;o--)if(32!==e.pending.charCodeAt(o)){e.pending=e.pending.substring(0,o+1);break}e.push({type:"hardbreak",level:e.level})}else e.pending=e.pending.slice(0,-1),e.push({type:"softbreak",level:e.level});else e.push({type:"softbreak",level:e.level});for(s++;n>s&&32===e.src.charCodeAt(s);)s++;return e.pos=s,!0}},{}],56:[function(e,t){"use strict";function r(e,t,r,n,s){this.src=e,this.env=n,this.options=r,this.parser=t,this.tokens=s,this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache=[],this.isInLabel=!1,this.linkLevel=0,this.linkContent="",this.labelUnmatchedScopes=0}r.prototype.pushPending=function(){this.tokens.push({type:"text",content:this.pending,level:this.pendingLevel}),this.pending=""},r.prototype.push=function(e){this.pending&&this.pushPending(),this.tokens.push(e),this.pendingLevel=this.level},r.prototype.cacheSet=function(e,t){for(var r=this.cache.length;e>=r;r++)this.cache.push(0);this.cache[e]=t},r.prototype.cacheGet=function(e){return e<this.cache.length?this.cache[e]:0},t.exports=r},{}],57:[function(e,t){"use strict";var r=/\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;t.exports=function(e,t){var n,s,o=e.posMax,i=e.pos;if(126!==e.src.charCodeAt(i))return!1;if(t)return!1;if(i+2>=o)return!1;if(e.level>=e.options.maxNesting)return!1;for(e.pos=i+1;e.pos<o;){if(126===e.src.charCodeAt(e.pos)){n=!0;break}e.parser.skipToken(e)}return n&&i+1!==e.pos?(s=e.src.slice(i+1,e.pos),s.match(/(^|[^\\])(\\\\)*\s/)?(e.pos=i,!1):(e.posMax=e.pos,e.pos=i+1,t||e.push({type:"sub",level:e.level,content:s.replace(r,"$1")}),e.pos=e.posMax+1,e.posMax=o,!0)):(e.pos=i,!1)}},{}],58:[function(e,t){"use strict";var r=/\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;t.exports=function(e,t){var n,s,o=e.posMax,i=e.pos;if(94!==e.src.charCodeAt(i))return!1;if(t)return!1;if(i+2>=o)return!1;if(e.level>=e.options.maxNesting)return!1;for(e.pos=i+1;e.pos<o;){if(94===e.src.charCodeAt(e.pos)){n=!0;break}e.parser.skipToken(e)}return n&&i+1!==e.pos?(s=e.src.slice(i+1,e.pos),s.match(/(^|[^\\])(\\\\)*\s/)?(e.pos=i,!1):(e.posMax=e.pos,e.pos=i+1,t||e.push({type:"sup",level:e.level,content:s.replace(r,"$1")}),e.pos=e.posMax+1,e.posMax=o,!0)):(e.pos=i,!1)}},{}],59:[function(e,t){"use strict";function r(e){switch(e){case 10:case 92:case 96:case 42:case 95:case 94:case 91:case 93:case 33:case 38:case 60:case 62:case 123:case 125:case 36:case 37:case 64:case 126:case 43:case 61:case 58:return!0;default:return!1}}t.exports=function(e,t){for(var n=e.pos;n<e.posMax&&!r(e.src.charCodeAt(n));)n++;return n===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}},{}],60:[function(t,r,n){!function(t,s){"function"==typeof e&&e.amd?e([],function(){return t.Autolinker=s()}):"object"==typeof n?r.exports=s():t.Autolinker=s()}(this,function(){var e=function(t){e.Util.assign(this,t)};return e.prototype={constructor:e,urls:!0,email:!0,twitter:!0,newWindow:!0,stripPrefix:!0,truncate:void 0,className:"",htmlParser:void 0,matchParser:void 0,tagBuilder:void 0,link:function(e){for(var t=this.getHtmlParser(),r=t.parse(e),n=0,s=[],o=0,i=r.length;i>o;o++){var l=r[o],a=l.getType(),c=l.getText();if("element"===a)"a"===l.getTagName()&&(l.isClosing()?n=Math.max(n-1,0):n++),s.push(c);else if("entity"===a)s.push(c);else if(0===n){var u=this.linkifyStr(c);s.push(u)}else s.push(c)}return s.join("")},linkifyStr:function(e){return this.getMatchParser().replace(e,this.createMatchReturnVal,this)},createMatchReturnVal:function(t){var r;if(this.replaceFn&&(r=this.replaceFn.call(this,this,t)),"string"==typeof r)return r;if(r===!1)return t.getMatchedText();if(r instanceof e.HtmlTag)return r.toString();var n=this.getTagBuilder(),s=n.build(t);return s.toString()},getHtmlParser:function(){var t=this.htmlParser;return t||(t=this.htmlParser=new e.htmlParser.HtmlParser),t},getMatchParser:function(){var t=this.matchParser;return t||(t=this.matchParser=new e.matchParser.MatchParser({urls:this.urls,email:this.email,twitter:this.twitter,stripPrefix:this.stripPrefix})),t},getTagBuilder:function(){var t=this.tagBuilder;return t||(t=this.tagBuilder=new e.AnchorTagBuilder({newWindow:this.newWindow,truncate:this.truncate,className:this.className})),t}},e.link=function(t,r){var n=new e(r);return n.link(t)},e.match={},e.htmlParser={},e.matchParser={},e.Util={abstractMethod:function(){throw"abstract"},assign:function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e},extend:function(t,r){var n=t.prototype,s=function(){};s.prototype=n;var o;o=r.hasOwnProperty("constructor")?r.constructor:function(){n.constructor.apply(this,arguments)};var i=o.prototype=new s;return i.constructor=o,i.superclass=n,delete r.constructor,e.Util.assign(i,r),o},ellipsis:function(e,t,r){return e.length>t&&(r=null==r?"..":r,e=e.substring(0,t-r.length)+r),e},indexOf:function(e,t){if(Array.prototype.indexOf)return e.indexOf(t);for(var r=0,n=e.length;n>r;r++)if(e[r]===t)return r;return-1},splitAndCapture:function(e,t){if(!t.global)throw new Error("`splitRegex` must have the 'g' flag set");for(var r,n=[],s=0;r=t.exec(e);)n.push(e.substring(s,r.index)),n.push(r[0]),s=r.index+r[0].length;return n.push(e.substring(s)),n}},e.HtmlTag=e.Util.extend(Object,{whitespaceRegex:/\s+/,constructor:function(t){e.Util.assign(this,t),this.innerHtml=this.innerHtml||this.innerHTML},setTagName:function(e){return this.tagName=e,this},getTagName:function(){return this.tagName||""},setAttr:function(e,t){var r=this.getAttrs();return r[e]=t,this},getAttr:function(e){return this.getAttrs()[e]},setAttrs:function(t){var r=this.getAttrs();return e.Util.assign(r,t),this},getAttrs:function(){return this.attrs||(this.attrs={})},setClass:function(e){return this.setAttr("class",e)},addClass:function(t){for(var r,n=this.getClass(),s=this.whitespaceRegex,o=e.Util.indexOf,i=n?n.split(s):[],l=t.split(s);r=l.shift();)-1===o(i,r)&&i.push(r);return this.getAttrs()["class"]=i.join(" "),this},removeClass:function(t){for(var r,n=this.getClass(),s=this.whitespaceRegex,o=e.Util.indexOf,i=n?n.split(s):[],l=t.split(s);i.length&&(r=l.shift());){var a=o(i,r);-1!==a&&i.splice(a,1)}return this.getAttrs()["class"]=i.join(" "),this},getClass:function(){return this.getAttrs()["class"]||""},hasClass:function(e){return-1!==(" "+this.getClass()+" ").indexOf(" "+e+" ")},setInnerHtml:function(e){return this.innerHtml=e,this},getInnerHtml:function(){return this.innerHtml||""},toString:function(){var e=this.getTagName(),t=this.buildAttrsStr();return t=t?" "+t:"",["<",e,t,">",this.getInnerHtml(),"</",e,">"].join("")},buildAttrsStr:function(){if(!this.attrs)return"";var e=this.getAttrs(),t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(r+'="'+e[r]+'"');return t.join(" ")}}),e.AnchorTagBuilder=e.Util.extend(Object,{constructor:function(t){e.Util.assign(this,t)},build:function(t){var r=new e.HtmlTag({tagName:"a",attrs:this.createAttrs(t.getType(),t.getAnchorHref()),innerHtml:this.processAnchorText(t.getAnchorText())});return r},createAttrs:function(e,t){var r={href:t},n=this.createCssClass(e);return n&&(r["class"]=n),this.newWindow&&(r.target="_blank"),r},createCssClass:function(e){var t=this.className;return t?t+" "+t+"-"+e:""},processAnchorText:function(e){return e=this.doTruncate(e)},doTruncate:function(t){return e.Util.ellipsis(t,this.truncate||Number.POSITIVE_INFINITY)}}),e.htmlParser.HtmlParser=e.Util.extend(Object,{htmlRegex:function(){var e=/[0-9a-zA-Z][0-9a-zA-Z:]*/,t=/[^\s\0"'>\/=\x01-\x1F\x7F]+/,r=/(?:"[^"]*?"|'[^']*?'|[^'"=<>`\s]+)/,n=t.source+"(?:\\s*=\\s*"+r.source+")?";return new RegExp(["(?:","<(!DOCTYPE)","(?:","\\s+","(?:",n,"|",r.source+")",")*",">",")","|","(?:","<(/)?","("+e.source+")","(?:","\\s+",n,")*","\\s*/?",">",")"].join(""),"gi")}(),htmlCharacterEntitiesRegex:/(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,parse:function(e){for(var t,r,n=this.htmlRegex,s=0,o=[];null!==(t=n.exec(e));){var i=t[0],l=t[1]||t[3],a=!!t[2],c=e.substring(s,t.index);c&&(r=this.parseTextAndEntityNodes(c),o.push.apply(o,r)),o.push(this.createElementNode(i,l,a)),s=t.index+i.length}if(s<e.length){var u=e.substring(s);u&&(r=this.parseTextAndEntityNodes(u),o.push.apply(o,r))}return o},parseTextAndEntityNodes:function(t){for(var r=[],n=e.Util.splitAndCapture(t,this.htmlCharacterEntitiesRegex),s=0,o=n.length;o>s;s+=2){var i=n[s],l=n[s+1];i&&r.push(this.createTextNode(i)),l&&r.push(this.createEntityNode(l))}return r},createElementNode:function(t,r,n){return new e.htmlParser.ElementNode({text:t,tagName:r.toLowerCase(),closing:n})},createEntityNode:function(t){return new e.htmlParser.EntityNode({text:t})},createTextNode:function(t){return new e.htmlParser.TextNode({text:t})}}),e.htmlParser.HtmlNode=e.Util.extend(Object,{text:"",constructor:function(t){e.Util.assign(this,t)},getType:e.Util.abstractMethod,getText:function(){return this.text}}),e.htmlParser.ElementNode=e.Util.extend(e.htmlParser.HtmlNode,{tagName:"",closing:!1,getType:function(){return"element"},getTagName:function(){return this.tagName},isClosing:function(){return this.closing}}),e.htmlParser.EntityNode=e.Util.extend(e.htmlParser.HtmlNode,{getType:function(){return"entity"}}),e.htmlParser.TextNode=e.Util.extend(e.htmlParser.HtmlNode,{getType:function(){return"text"}}),e.matchParser.MatchParser=e.Util.extend(Object,{urls:!0,email:!0,twitter:!0,stripPrefix:!0,matcherRegex:function(){var e=/(^|[^\w])@(\w{1,15})/,t=/(?:[\-;:&=\+\$,\w\.]+@)/,r=/(?:[A-Za-z][-.+A-Za-z0-9]+:(?![A-Za-z][-.+A-Za-z0-9]+:\/\/)(?!\d+\/?)(?:\/\/)?)/,n=/(?:www\.)/,s=/[A-Za-z0-9\.\-]*[A-Za-z0-9\-]/,o=/\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/,i=/[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]?!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]]/;return new RegExp(["(",e.source,")","|","(",t.source,s.source,o.source,")","|","(","(?:","(",r.source,s.source,")","|","(?:","(.?//)?",n.source,s.source,")","|","(?:","(.?//)?",s.source,o.source,")",")","(?:"+i.source+")?",")"].join(""),"gi")}(),charBeforeProtocolRelMatchRegex:/^(.)?\/\//,constructor:function(t){e.Util.assign(this,t),this.matchValidator=new e.MatchValidator},replace:function(e,t,r){var n=this;return e.replace(this.matcherRegex,function(e,s,o,i,l,a,c,u,p){var h=n.processCandidateMatch(e,s,o,i,l,a,c,u,p);if(h){var f=t.call(r,h.match);return h.prefixStr+f+h.suffixStr}return e})},processCandidateMatch:function(t,r,n,s,o,i,l,a,c){var u,p=a||c,h="",f="";if(r&&!this.twitter||o&&!this.email||i&&!this.urls||!this.matchValidator.isValidMatch(i,l,p))return null;if(this.matchHasUnbalancedClosingParen(t)&&(t=t.substr(0,t.length-1),f=")"),o)u=new e.match.Email({matchedText:t,email:o});else if(r)n&&(h=n,t=t.slice(1)),u=new e.match.Twitter({matchedText:t,twitterHandle:s});else{if(p){var d=p.match(this.charBeforeProtocolRelMatchRegex)[1]||"";d&&(h=d,t=t.slice(1))}u=new e.match.Url({matchedText:t,url:t,protocolUrlMatch:!!l,protocolRelativeMatch:!!p,stripPrefix:this.stripPrefix})}return{prefixStr:h,suffixStr:f,match:u}},matchHasUnbalancedClosingParen:function(e){var t=e.charAt(e.length-1);if(")"===t){var r=e.match(/\(/g),n=e.match(/\)/g),s=r&&r.length||0,o=n&&n.length||0;if(o>s)return!0}return!1}}),e.MatchValidator=e.Util.extend(Object,{invalidProtocolRelMatchRegex:/^[\w]\/\//,hasFullProtocolRegex:/^[A-Za-z][-.+A-Za-z0-9]+:\/\//,uriSchemeRegex:/^[A-Za-z][-.+A-Za-z0-9]+:/,hasWordCharAfterProtocolRegex:/:[^\s]*?[A-Za-z]/,isValidMatch:function(e,t,r){return t&&!this.isValidUriScheme(t)||this.urlMatchDoesNotHaveProtocolOrDot(e,t)||this.urlMatchDoesNotHaveAtLeastOneWordChar(e,t)||this.isInvalidProtocolRelativeMatch(r)?!1:!0},isValidUriScheme:function(e){var t=e.match(this.uriSchemeRegex)[0].toLowerCase();return"javascript:"!==t&&"vbscript:"!==t},urlMatchDoesNotHaveProtocolOrDot:function(e,t){return!(!e||t&&this.hasFullProtocolRegex.test(t)||-1!==e.indexOf("."))},urlMatchDoesNotHaveAtLeastOneWordChar:function(e,t){return e&&t?!this.hasWordCharAfterProtocolRegex.test(e):!1},isInvalidProtocolRelativeMatch:function(e){return!!e&&this.invalidProtocolRelMatchRegex.test(e)}}),e.match.Match=e.Util.extend(Object,{constructor:function(t){e.Util.assign(this,t)},getType:e.Util.abstractMethod,getMatchedText:function(){return this.matchedText},getAnchorHref:e.Util.abstractMethod,getAnchorText:e.Util.abstractMethod}),e.match.Email=e.Util.extend(e.match.Match,{getType:function(){return"email"},getEmail:function(){return this.email},getAnchorHref:function(){return"mailto:"+this.email},getAnchorText:function(){return this.email}}),e.match.Twitter=e.Util.extend(e.match.Match,{getType:function(){return"twitter"},getTwitterHandle:function(){return this.twitterHandle},getAnchorHref:function(){return"https://twitter.com/"+this.twitterHandle},getAnchorText:function(){return"@"+this.twitterHandle}}),e.match.Url=e.Util.extend(e.match.Match,{urlPrefixRegex:/^(https?:\/\/)?(www\.)?/i,protocolRelativeRegex:/^\/\//,protocolPrepended:!1,getType:function(){return"url"},getUrl:function(){var e=this.url;return this.protocolRelativeMatch||this.protocolUrlMatch||this.protocolPrepended||(e=this.url="http://"+e,this.protocolPrepended=!0),e},getAnchorHref:function(){var e=this.getUrl();return e.replace(/&amp;/g,"&")},getAnchorText:function(){var e=this.getUrl();return this.protocolRelativeMatch&&(e=this.stripProtocolRelativePrefix(e)),this.stripPrefix&&(e=this.stripUrlPrefix(e)),e=this.removeTrailingSlash(e)},stripUrlPrefix:function(e){return e.replace(this.urlPrefixRegex,"")},stripProtocolRelativePrefix:function(e){return e.replace(this.protocolRelativeRegex,"")},removeTrailingSlash:function(e){return"/"===e.charAt(e.length-1)&&(e=e.slice(0,-1)),e}}),e})},{}],"/":[function(e,t){"use strict";t.exports=e("./lib/")},{"./lib/":14}]},{},[])("/")});
/* jshint ignore:end */

const EDITOR_URI = "chrome-extension://mpognobbkildjkofajifpdfhcoklimli/user_modfiles/betterNotesEditor.html";
const VIVALDI_ORIGIN = "chrome-extension://mpognobbkildjkofajifpdfhcoklimli";
let VIVALDI_SOURCE;
let THEME_COLOURS;
let MARKDOWN;
let SCROLLMAP;

/**
 * Handle incoming messages from the vivaldi UI
 * @param e message event
 */
function onMessage(e){
    if(e.origin !== VIVALDI_ORIGIN){
        return;
    }
    switch(e.data.verb){
        case "INIT_QRY":
            return onInitQuery(e.source);
        case "NOTE":
            return onNote(e.data.note);
        case "EMPTY":
            return onEmpty();
        case "THEME":
            return onTheme(e.data.theme);
        default:
            console.error('unknown message format', e);
    }
}

/**
 * The Vivaldi UI has begun communications with the editor tab
 * @param source The source that wants to initialise
 */
function onInitQuery(source){
    VIVALDI_SOURCE = source;
    sendInitResponse();
    renderText(SELECTED_LANGUAGE.Select);
    updateWordCount(0);
}

/**
 * A note has been selected from the vivaldi UI
 * @param note The vivaldi.note that has been selected
 */
function onNote(note){
    document.querySelector("#title").value = note.title;
    document.querySelector("#title").readOnly = false;
    setExportTitle(note.title);
    document.querySelector("#noteId").value = note.id;
    if(note.children){
        document.querySelector("textarea").readOnly = true;
        document.querySelector("textarea").value = "";
        renderText(SELECTED_LANGUAGE.Select);
        updateWordCount(0);
        exportEnabled(false);
    } else {
        document.querySelector("textarea").readOnly = false;
        document.querySelector("textarea").value = note.content;
        renderText();
        updateWordCount();
        exportEnabled(true);
    }
}

/**
 * No note is selected in the vivaldi UI
 */
function onEmpty(){
    document.querySelector("textarea").readOnly = true;
    document.querySelector("textarea").value = "";
    document.querySelector("#title").value = SELECTED_LANGUAGE.NotesTitle;
    document.querySelector("#title").readOnly = true;
    document.querySelector("#noteId").value = "";
    renderText(SELECTED_LANGUAGE.Select);
    updateWordCount(0);
    exportEnabled(false);
}

/**
 * The Vivaldi UI theme has changed
 * @param theme Style string to be applied
 */
function onTheme(theme){
    if(!THEME_COLOURS){
        THEME_COLOURS = document.createElement('style');
        document.head.appendChild(THEME_COLOURS);
    }
    THEME_COLOURS.textContent = theme;
}



/**
 * Send a message to the Vivaldi UI
 * @param msg The object to send as a message. must contain a valid verb
 */
function sendMessage(msg){
    if(VIVALDI_SOURCE){
        VIVALDI_SOURCE.postMessage(msg, VIVALDI_ORIGIN);
    }
}

/**
 * Tell the Vivaldi UI that initialisation of connection was a success
 */
function sendInitResponse(){
    sendMessage({
        verb: "INIT_YES"
    });
}

/**
 * Send the updated contents of the active note back to the UI to save it
 */
function sendNoteText(){
    const noteText = document.querySelector("textarea").value;
    const id = document.querySelector("#noteId").value;
    if(id===""){
        return;
    }
    sendMessage({
        verb: "NOTE_TEXT",
        note: noteText,
        noteId: id
    });
}

/**
 * Send the title of the active note back to the UI to save it
 */
function sendNoteTitle(){
    const noteTitle = document.querySelector("#title").value;
    const id = document.querySelector("#noteId").value;
    if(id===""){
        return;
    }
    sendMessage({
        verb: "NOTE_TITLE",
        title: noteTitle,
        noteId: id
    });
}

/**
 * Inform the vivaldi UI that the notes editor tab has closed
 */
function sendClosed(){
    sendMessage({
        verb: "CLOSE"
    });
}

/**
 * Event fired when the note text changes
 * Handle the necessary UI updates and messaging
 * @param event fired (textarea input)
 */
function noteTextChanged(event){
    sendNoteText();
    renderText();
    updateWordCount();
}



/**
 * Initialise the Remarkable renderer
 * Also, Inject line numbers for sync scroll
 */
function initRenderer(){
    MARKDOWN = new Remarkable('full');

    //
    // . Notes:
    // - We track only headings and paragraphs on first level. That's enougth.
    // - Footnotes content causes jumps. Level limit filter it automatically.
    //

    MARKDOWN.renderer.rules.paragraph_open = function (tokens, idx) {
        var line;
        if (tokens[idx].lines && tokens[idx].level === 0) {
            line = tokens[idx].lines[0];
            return '<p class="line" data-line="' + line + '">';
        }
        return '<p>';
    };

    MARKDOWN.renderer.rules.heading_open = function (tokens, idx) {
        var line;
        if (tokens[idx].lines && tokens[idx].level === 0) {
            line = tokens[idx].lines[0];
            return '<h' + tokens[idx].hLevel + ' class="line" data-line="' + line + '">';
        }
        return '<h' + tokens[idx].hLevel + '>';
    };

    document.querySelector("textarea").addEventListener("scroll", syncScroll);
    document.querySelector("textarea").addEventListener("resize", clearScrollMap);
    window.addEventListener("resize", clearScrollMap);
}

/**
 * A change has happened that requires the scroll map to be rebuilt
 */
function clearScrollMap(){
    SCROLLMAP = undefined;
}

/**
 * Build a Scroll Map to map between source and preview lines
 */
function buildScrollMap() {
  // Build offsets for each line (lines can be wrapped)
  // That's a bit dirty to process each line everytime, but ok for demo.
  // Optimizations are required only for big texts.
    var i, nonEmptyList, pos, a, b, lineHeightMap, linesCount,
        acc, sourceLikeDiv, textarea = document.querySelector('textarea'),
        _scrollMap;

    sourceLikeDiv = document.createElement("div");
    sourceLikeDiv.style.position = 'absolute';
    sourceLikeDiv.style.visibility = 'hidden';
    sourceLikeDiv.style.height = 'auto';
    sourceLikeDiv.style.width = textarea.clientWidth;
    sourceLikeDiv.style.fontSize = getComputedStyle(textarea, "font-size");
    sourceLikeDiv.style.fontFamily = getComputedStyle(textarea, "font-family");
    sourceLikeDiv.style.lineHeight = getComputedStyle(textarea, "line-height");
    sourceLikeDiv.style.whiteSpace = getComputedStyle(textarea, "white-space");
    document.body.appendChild(sourceLikeDiv);

    const preview = document.querySelector("#preview");

    _scrollMap = [];
    nonEmptyList = [];
    lineHeightMap = [];

    acc = 0;
    textarea.value.split('\n').forEach(function(str) {
        var h, lh;

        lineHeightMap.push(acc);

        if (str.length === 0) {
        acc++;
        return;
        }

        sourceLikeDiv.innerText = str;
        h = parseFloat(getComputedStyle(sourceLikeDiv, "height"));
        lh = parseFloat(getComputedStyle(sourceLikeDiv, "line-height"));
        acc += Math.round(h / lh);
    });
    sourceLikeDiv.parentElement.removeChild(sourceLikeDiv);
    lineHeightMap.push(acc);
    linesCount = acc;

    for (i = 0; i < linesCount; i++) { _scrollMap.push(-1); }

    nonEmptyList.push(0);
    _scrollMap[0] = 0;

    document.querySelectorAll(".line").forEach((el, n) => {
        var t = el.getAttribute("data-line");
        if (t === '') { return; }
        t = lineHeightMap[t];
        if (t !== 0) { nonEmptyList.push(t); }
        _scrollMap[t] = Math.round(el.offsetTop);
    });

    nonEmptyList.push(linesCount);
    _scrollMap[linesCount] = preview.scrollHeight;

    pos = 0;
    for (i = 1; i < linesCount; i++) {
        if (_scrollMap[i] !== -1) {
        pos++;
        continue;
        }

        a = nonEmptyList[pos];
        b = nonEmptyList[pos + 1];
        _scrollMap[i] = Math.round((_scrollMap[b] * (i - a) + _scrollMap[a] * (b - i)) / (b - a));
    }

    return _scrollMap;
}

/**
 * Get the computed style of an element, not the set value
 * @param element DOM element
 * @param property CSS property name
 */
function getComputedStyle(element, property){
    return window.getComputedStyle(element, null).getPropertyValue(property);
}

/**
 * Perform a scroll sync, if user has this enabled
 * @param event fired (textarea scroll)
 */
function syncScroll(event) {
    if(!document.querySelector("#syncscroll").checked){
        return;
    }
    var textarea = document.querySelector('textarea'),
    lineHeight = parseFloat(getComputedStyle(textarea, "line-height")),
    lineNo, posTo;

    lineNo = Math.floor(textarea.scrollTop / lineHeight);
    if (!SCROLLMAP) { SCROLLMAP = buildScrollMap(); }
    posTo = SCROLLMAP[lineNo];
    document.querySelector("#preview").scrollTo(0, posTo);
}

/**
 * Render the textarea contents in the preview zone
 * @param override A string of MD to use instead of the textarea contents
 */
function renderText(override){
    clearScrollMap();
    if(override || override === ""){
        document.querySelector("#preview").innerHTML = MARKDOWN.render(override);
        return;
    }
    const noteText = document.querySelector("textarea").value;
    document.querySelector("#preview").innerHTML = MARKDOWN.render(noteText);
    setExportContent();
}

/**
 * Read and update the word count according to the rendered markdown (not the source)
 * @param override If 0, Will set all counts to 0
 */
function updateWordCount(override){
    if(override === 0){
        document.querySelector("#chars").innerText = SELECTED_LANGUAGE.Chars + ": " + 0;
        document.querySelector("#words").innerText = SELECTED_LANGUAGE.Words + ": " + 0;
        document.querySelector("#lines").innerText = SELECTED_LANGUAGE.Lines + ": " + 0;
        return;
    }
    const notetext = document.querySelector("#preview").textContent;
    const characters = notetext.length;
    const wordsMatches = notetext.match(/\S+/g);
    const lineMatches = notetext.match(/\n/g);
    document.querySelector("#chars").innerText = SELECTED_LANGUAGE.Chars + ": " +characters;
    document.querySelector("#words").innerText = SELECTED_LANGUAGE.Words + ": " +(wordsMatches ? wordsMatches.length : 0);
    document.querySelector("#lines").innerText = SELECTED_LANGUAGE.Lines + ": " +(lineMatches ? lineMatches.length : (characters ? 1 : 0));
}



/**
 * Add the event listeners for the formatting toolbar buttons
 */
function initFormatting(){
    document.querySelector("#head1").addEventListener("click", doFormatH1);
    document.querySelector("#head2").addEventListener("click", doFormatH2);
    document.querySelector("#head3").addEventListener("click", doFormatH3);
    document.querySelector("#rule").addEventListener("click", doFormatRule);
    document.querySelector("#bold").addEventListener("click", doFormatBold);
    document.querySelector("#italic").addEventListener("click", doFormatItalic);
    document.querySelector("#strike").addEventListener("click", doFormatStrike);
    document.querySelector("#under").addEventListener("click", doFormatUnder);
    document.querySelector("#light").addEventListener("click", doFormatLight);
    document.querySelector("#super").addEventListener("click", doFormatSuper);
    document.querySelector("#subs").addEventListener("click", doFormatSubs);
    document.querySelector("#quote").addEventListener("click", doFormatQuote);
    document.querySelector("#code").addEventListener("click", doFormatCode);
    document.querySelector("#link").addEventListener("click", doFormatLink);
    document.querySelector("#bullet").addEventListener("click", doFormatBullet);
    document.querySelector("#number").addEventListener("click", doFormatNumber);
}

/**
 * Input the new text after formatting, and handle the required UI updates
 * @param newtext The source text, with any additions added in
 * @param newCursorPos The new position of the caret
 */
function doFormatInputNewText(newtext, newCursorPos){
    // find a way to simulate an input such that ctrl+Z undo is possible
    // in the meantime just set it directly
    document.querySelector("textarea").value = newtext;
    /*document.querySelector("textarea").focus();
    document.querySelector("textarea").setSelectionRange(newCursorPos, newCursorPos);
    document.querySelector("textarea").setSelectionRange(newCursorPos, newCursorPos);*/
    noteTextChanged();
}

/**
 * Do a format which has an open and closing tag on the selected area
 * @param openTag the Format tag at the start of selection
 * @param endTag the Format tag at the end of selection
 */
function doFormat(openTag, endTag){
    const textarea = document.querySelector("textarea");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    let replacement;
    replacement = textarea.value.substring(0, start) + openTag + textarea.value.substring(start, end) + endTag + textarea.value.substring(end);
    if(start===end){
        doFormatInputNewText(replacement, start+openTag.length);
    } else {
        doFormatInputNewText(replacement, end+replacement.length-textarea.value.length);
    }
}

/**
 * Format the selection to turn it into a formatted list
 * @param numeric Boolean true if list is numbered, false for bullets
 */
function doListFormat(numeric){
    const textarea = document.querySelector("textarea");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    if(start===end){
        let replacement = textarea.value.substring(0, start) + (numeric ? "1. " : "* ") + textarea.value.substring(end);
        doFormatInputNewText(replacement, start+3);
        return;
    }
    let selection = textarea.value.substring(start, end);
    const lines = selection.split("\n");
    selection = "";
    for(let index = 0; index < lines.length; index++){
        selection += (numeric ? (index+1) + ". " : "* ") + lines[index]+"\n";
    }
    let replacement = textarea.value.substring(0, start) + selection + textarea.value.substring(end);
    doFormatInputNewText(replacement, end+replacement.length-textarea.value.length);
}

/**
 * The following functions denote various formatting rules
 */
function doFormatH1(){
    doFormat("# ", "");
}
function doFormatH2(){
    doFormat("## ", "");
}
function doFormatH3(){
    doFormat("### ", "");
}
function doFormatRule(){
    doFormat("", "\n\n---");
}
function doFormatBold(){
    doFormat("**", "**");
}
function doFormatItalic(){
    doFormat("*", "*");
}
function doFormatStrike(){
    doFormat("~~", "~~");
}
function doFormatUnder(){
    doFormat("++", "++");
}
function doFormatLight(){
    doFormat("==", "==");
}
function doFormatSuper(){
    doFormat("^", "^");
}
function doFormatSubs(){
    doFormat("~", "~");
}
function doFormatQuote(){
    doFormat("> ", "");
}
function doFormatLink(){
    doFormat("[", "](url)");
}
function doFormatBullet(){
    doListFormat(false);
}
function doFormatNumber(){
    doListFormat(true);
}
/**
 * Determine and format if simple code or multi-line code should be used
 */
function doFormatCode(){
    const textarea = document.querySelector("textarea");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    let selection = textarea.value.substring(start, end);
    if(selection.indexOf("\n") >= 0){
        doFormat("```\n", "\n```");
    } else {
        doFormat("`", "`");
    }
}



/**
 * Block an event from continuing unless a modifier key is depressed
 * @param event An Event (export anchor click)
 */
function blockEventUnlessModifierKey(event){
    if(event.altKey || event.ctrlKey || event.shiftKey || event.metaKey){
        return;
    }
    event.preventDefault();
}

/**
 * Add click listeners to export control
 */
function initExport(){
    document.querySelector("#exportTxt").addEventListener("click", blockEventUnlessModifierKey);
    document.querySelector("#exportHtml").addEventListener("click", blockEventUnlessModifierKey);
}

/**
 * Set whether exporting is allowed / displayed
 * @param isEnabled boolean whether to enable or not
 */
function exportEnabled(isEnabled){
    if(isEnabled){
        document.querySelector("#exportLabel").style.display = "inline-block";
        document.querySelector("#exportArea").style.display = "inline-block";
    } else {
        document.querySelector("#exportLabel").style.display = "none";
        document.querySelector("#exportArea").style.display = "none";
    }
}

/**
 * Update the export controls with new download title
 * @param newtitle the new title string to set
 */
function setExportTitle(newtitle){
    document.querySelector("#exportTxt").setAttribute("download", newtitle+".txt");
    document.querySelector("#exportHtml").setAttribute("download", newtitle+".html");
}

/**
 * Set the export content according to current source text and markdown preview
 */
function setExportContent(){
    const textfile = new File(
        [document.querySelector("textarea").value],
        document.querySelector("#title").value+".txt",
        {type: "text/plain"}
    );
    const textobj = window.URL.createObjectURL(textfile);
    document.querySelector("#exportTxt").setAttribute("href", textobj);

    const htmldoc = `<html>
    <head>
    <meta charset="utf-8" />
    <title>${document.querySelector("#title").value}</title>
    </head>
    <body>${document.querySelector("#preview").innerHTML}</body>
    </html>`;
    const htmlfile = new File(
        [htmldoc],
        document.querySelector("#title").value+".html",
        {type: "text/html"}
    );
    const htmlobj = window.URL.createObjectURL(htmlfile);
    document.querySelector("#exportHtml").setAttribute("href", htmlobj);
}



/**
 * Initialise the page, and call any sub-component init methods
 */
function init(){
    addEventListener('message', onMessage);
    document.querySelector("textarea").addEventListener("input", noteTextChanged);
    document.querySelector("#title").addEventListener("input", sendNoteTitle);
    window.onunload = sendClosed;
    initRenderer();
    initFormatting();
    initExport();
    initStrings();
}

/**
 * Only initialise this script on the note editor page
 * This check is included to allow for easier mod installation
 */
if(window.location.href===EDITOR_URI){
    init();
}

})();
