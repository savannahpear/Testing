// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"tabs")
                .setItems([
                    {
                        "id" : "Home",
                        "caption" : "Home"
                    },
                    {
                        "id" : "Specifications",
                        "caption" : "Specifications"
                    },
                    {
                        "id" : "Generator",
                        "caption" : "Generator"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setZIndex(0)
                .setValue("Home")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#31081F"
                    }
                })
            );
            
            host.tabs.append(
                xui.create("xui.UI.SVGPaper")
                .setHost(host,"home_svg")
                .setLeft("0em")
                .setTop("0.1523809523809524em")
                .setWidth("60.95238095238095em")
                .setHeight("41.75238095238095em"),
                "Home"
            );
            
            host.home_svg.append(
                xui.create("xui.UI.Block")
                .setHost(host,"home_block")
                .setLeft("0em")
                .setTop("25.904761904761905em")
                .setWidth("64.83333333333333em")
                .setHeight("19.166666666666668em")
                .setZIndex(1002)
                .setBackground("#31081F")
            );
            
            host.home_block.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label20")
                .setLeft("2.2095238095238097em")
                .setTop("1.4476190476190476em")
                .setWidth("14.552380952380952em")
                .setHeight("2.5904761904761906em")
                .setCaption("Pick a category:")
                .setFontColor("#FFFFFF")
                .setFontSize("25px")
            );
            
            host.home_block.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"checkbox_quotes")
                .setLeft("2.0416666666666665em")
                .setTop("2.875em")
                .setWidth("5.75em")
                .setHeight("1.9166666666666667em")
                .setCaption("Quotes")
                .onChange("_mat1")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#FFFFFF",
                        "font-size" : "24px"
                    }
                })
            );
            
            host.home_block.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"checkbox_books")
                .setLeft("14.958333333333334em")
                .setTop("2.875em")
                .setWidth("7.25em")
                .setHeight("1.65em")
                .setCaption("Book Titles")
                .onChange("_mat3")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#FFFFFF",
                        "font-size" : "24px"
                    }
                })
            );
            
            host.home_block.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"checkbox_movies")
                .setLeft("22.875em")
                .setTop("2.875em")
                .setWidth("7.75em")
                .setHeight("1.65em")
                .setCaption("Movie Titles")
                .onChange("_mat4")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#FFFFFF",
                        "font-size" : "24px"
                    }
                })
            );
            
            host.home_block.append(
                xui.create("xui.UI.Button")
                .setHost(host,"switchNext")
                .setLeft("26.590476190476192em")
                .setTop("9.066666666666666em")
                .setWidth("9.142857142857142em")
                .setHeight("3.657142857142857em")
                .setCaption("Add more specifics")
                .setFontColor("#31081F")
                .onClick("_switch1")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#31081F"
                    }
                })
            );
            
            host.home_block.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"checkbox_lyrics")
                .setLeft("8.75em")
                .setTop("2.875em")
                .setWidth("4.75em")
                .setHeight("1.65em")
                .setCaption("Lyrics")
                .onChange("_mat2")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#FFFFFF",
                        "font-size" : "24px"
                    }
                })
            );
            
            host.home_svg.append(
                xui.create("xui.UI.Input")
                .setHost(host,"inputter")
                .setLeft("20.571428571428573em")
                .setTop("16em")
                .setWidth("23.923809523809524em")
                .setHeight("5em")
                .setLabelSize("8em")
            );
            
            host.home_svg.append(
                xui.create("xui.UI.Image")
                .setHost(host,"home_choose")
                .setLeft("0em")
                .setTop("0.6857142857142857em")
                .setWidth("60.95238095238095em")
                .setHeight("5.485714285714286em")
                .setSrc("{/}Publication2.jpg")
            );
            
            host.home_svg.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image41")
                .setLeft("1.5238095238095237em")
                .setTop("7.619047619047619em")
                .setWidth("57.5em")
                .setHeight("5.083333333333333em")
                .setSrc("{/}Publication3.jpg")
            );
            
            host.home_svg.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image44")
                .setLeft("8.380952380952381em")
                .setTop("15.238095238095237em")
                .setWidth("14.857142857142858em")
                .setHeight("7.0095238095238095em")
                .setSrc("{/}pub2.jpg")
            );
            
            host.home_svg.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image436")
                .setLeft("47.23809523809524em")
                .setTop("18.285714285714285em")
                .setWidth("8.99047619047619em")
                .setHeight("12.19047619047619em")
                .setZIndex(1004)
                .setSrc("{/}music note.png")
            );
            
            host.home_svg.append(
                xui.create("xui.UI.Label")
                .setHost(host,"finaly")
                .setLeft("3.8095238095238093em")
                .setTop("22.857142857142858em")
                .setWidth("12.342857142857143em")
                .setHeight("5.0285714285714285em")
                .setCaption("Label")
            );
            
            host.home_svg.append(
                xui.create("xui.UI.Label")
                .setHost(host,"finaly2")
                .setLeft("24.38095238095238em")
                .setTop("23.61904761904762em")
                .setWidth("7.0095238095238095em")
                .setHeight("3.5047619047619047em")
                .setCaption("Label")
            );
            
            host.tabs.append(
                xui.create("xui.UI.SVGPaper")
                .setHost(host,"gen_svg")
                .setLeft("0em")
                .setTop("0.1523809523809524em")
                .setWidth("60.95238095238095em")
                .setHeight("41.75238095238095em"),
                "Generator"
            );
            
            host.gen_svg.append(
                xui.create("xui.UI.Button")
                .setHost(host,"clicker")
                .setLeft("12.19047619047619em")
                .setTop("4.495238095238095em")
                .setWidth("29.75em")
                .setHeight("13.5em")
                .setCaption("Click here for your password!")
                .setFontColor("#31081F")
                .onClick("_homonymer")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#31081F",
                        "background-color" : "#31081F"
                    }
                })
            );
            
            host.gen_svg.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image320")
                .setLeft("2.2857142857142856em")
                .setTop("22.857142857142858em")
                .setWidth("25em")
                .setHeight("2.4166666666666665em")
                .setSrc("{/}publication7 (2).jpg")
            );
            
            host.gen_svg.append(
                xui.create("xui.UI.Input")
                .setHost(host,"gen_inpt_passspace")
                .setLeft("1.5238095238095237em")
                .setTop("26.666666666666668em")
                .setWidth("26.666666666666668em")
                .setHeight("3.5em")
            );
            
            host.gen_svg.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image345")
                .setLeft("30.476190476190474em")
                .setTop("22.857142857142858em")
                .setWidth("28.333333333333332em")
                .setHeight("2.8333333333333335em")
                .setSrc("{/}publication7 (3).jpg")
            );
            
            host.gen_svg.append(
                xui.create("xui.UI.Input")
                .setHost(host,"gen_inpt_passswpace")
                .setLeft("32em")
                .setTop("26.666666666666668em")
                .setWidth("26.666666666666668em")
                .setHeight("3.5em")
                .setLabelCaption("Input")
            );
            
            host.tabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"spec_block")
                .setLeft("0.16666666666666666em")
                .setTop("-0.16666666666666666em")
                .setWidth("62.476190476190474em")
                .setHeight("46.17142857142857em")
                .setZIndex(0)
                .setBackground("#31081F"),
                "Specifications"
            );
            
            host.spec_block.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image123")
                .setLeft("1.2952380952380953em")
                .setTop("2.5142857142857142em")
                .setWidth("57.523809523809526em")
                .setHeight("5.104761904761904em")
                .setSrc("{/}Publication5 (2).jpg")
            );
            
            host.spec_block.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image128")
                .setLeft("3.580952380952381em")
                .setTop("9.371428571428572em")
                .setWidth("23.466666666666665em")
                .setHeight("3.8095238095238093em")
                .setSrc("{/}Publication6 (2).jpg")
            );
            
            host.spec_block.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image129")
                .setLeft("5.104761904761904em")
                .setTop("16.685714285714287em")
                .setWidth("19.047619047619047em")
                .setHeight("3.7333333333333334em")
                .setSrc("{/}Publication6 (3).jpg")
            );
            
            host.spec_block.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image130")
                .setLeft("5.866666666666666em")
                .setTop("23.085714285714285em")
                .setWidth("17.904761904761905em")
                .setHeight("4.3428571428571425em")
                .setSrc("{/}Publication6 (4).jpg")
            );
            
            host.spec_block.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"capInput")
                .setLeft("30.17142857142857em")
                .setTop("9.371428571428572em")
                .setWidth("18.833333333333332em")
                .setHeight("3.5em")
                .setLabelSize("8em")
                .setType("spin")
                .setPrecision(0)
                .setMin(0)
                .setMax(6)
                .setValue(1)
            );
            
            host.spec_block.append(
                xui.create("xui.UI.Button")
                .setHost(host,"switchNext2")
                .setLeft("19.580952380952382em")
                .setTop("32.22857142857143em")
                .setWidth("17.916666666666668em")
                .setHeight("5.333333333333333em")
                .setCaption("Go to Generator ")
                .setFontColor("#31081F")
                .onClick("_switch2")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#31081F"
                    }
                })
            );
            
            host.tabs.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"numInput")
                .setLeft("29.714285714285715em")
                .setTop("16.685714285714287em")
                .setWidth("18.833333333333332em")
                .setHeight("3.5em")
                .setLabelSize("8em")
                .setType("spin")
                .setPrecision(0)
                .setMin(0)
                .setMax(6)
                .setValue(1),
                "Specifications"
            );
            
            host.tabs.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"symbInput")
                .setLeft("28.952380952380953em")
                .setTop("23.771428571428572em")
                .setWidth("18.833333333333332em")
                .setHeight("3.5em")
                .setLabelSize("8em")
                .setType("spin")
                .setPrecision(0)
                .setMin(0)
                .setMax(6)
                .setValue(1),
                "Specifications"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        
        _homonymer:function(){
            alert("here");
            this._material();
            var initial = this.inputter.getUIValue();
            var done = " ";
            if (initial.includes("altar"))
                done = initial.replace("altar","alter");
            else if (initial.includes("alter"))
                done = initial.replace("alter","altar");
            else if (initial.includes("arc"))
                done = initial.replace("arc","ark");
            else if (initial.includes("ark"))
                done = initial.replace("ark","arc");
            else if (initial.includes("ate"))
                done = initial.replace("ate","eight");
            else if (initial.includes("eight"))
                done = initial.replace("eight","ate");
            else if (initial.includes("aural"))
                done = initial.replace("aural","oral");
            else if (initial.includes("bald"))
                done = initial.replace("bald","bawled");
            else if (initial.includes("bawled"))
                done = initial.replace("bawled","bald");
            else if (initial.includes("ball"))
                done = initial.replace("ball","bawl");
            else if (initial.includes("bawl"))
                done = initial.replace("bawl","ball");
            else if (initial.includes("band"))
                done = initial.replace("band","banned");
            else if (initial.includes("banned"))
                done = initial.replace("banned","band");
            else if (initial.includes("bard"))
                done = initial.replace("bard","barred");
            else if (initial.includes("barred"))
                done = initial.replace("barred","bard");
            else if (initial.includes("bare"))
                done = initial.replace("bare","bear");
            else if (initial.includes("bear"))
                done = initial.replace("bear","bare");
            else if (initial.includes("baron"))
                done = initial.replace("baron","barren");
            else if (initial.includes("barren"))
                done = initial.replace("barrren","baron");
            else if (initial.includes("be"))
                done = initial.replace("be","bee");
    else if (initial.includes("bee"))
                done = initial.replace("bee","be");
    else if (initial.includes("beach"))
                done = initial.replace("beach","bee");
    else if (initial.includes("bee"))
                done = initial.replace("bee","beach");
     if (initial.includes("beer"))
                done = initial.replace("beer","bier");
    else if (initial.includes("bier"))
                done = initial.replace("bier","beer");
    else if (initial.includes("berry"))
                done = initial.replace("berry","bury");
    else if (initial.includes("bury"))
                    done = initial.replace("bury","berry");
    else if (initial.includes("billed"))
                done = initial.replace("billed","build");
    else if (initial.includes("build"))
                done = initial.replace("build","billed");
    else if (initial.includes("blue"))
                done = initial.replace("blue","blew");
    else if (initial.includes("blew"))
                done = initial.replace("blew","blue");
    else if (initial.includes("board"))
                done = initial.replace("board","bored");
    else if (initial.includes("bored"))
                done = initial.replace("bored","board");
    else if (initial.includes("braid"))
                done = initial.replace("braid","brayed");
    else if (initial.includes("brayed"))
                done = initial.replace("brayed","braid");
    else if (initial.includes("break"))
                done = initial.replace("break","brake");
    else if (initial.includes("brake"))
                done = initial.replace("brake","break");
else if (initial.includes("brews"))
                done = initial.replace("brews","bruise");
else if (initial.includes("bruise"))
                done = initial.replace("bruise","brews");
else if (initial.includes("bridal"))
                done = initial.replace("bridal","bridle");
else if (initial.includes("bridle"))
                done = initial.replace("bridle","bridal");
else if (initial.includes("broach"))
                done = initial.replace("broach","brooch");
else if (initial.includes("buy"))
                done = initial.replace("buy","bye");
else if (initial.includes("bye"))
                done = initial.replace("bye","buy");
else if (initial.includes("capital"))
                done = initial.replace("capital","capitol");
else if (initial.includes("capitol"))
                done = initial.replace("capitol","capital");
else if (initial.includes("cellar"))
                done = initial.replace("cellar","seller");
else if (initial.includes("sellar"))
                done = initial.replace("seller","cellar");
else if (initial.includes("cereal"))
                done = initial.replace("cereal","serial");
else if (initial.includes("serial"))
                done = initial.replace("serial","cereal");
else if (initial.includes("chili"))
                done = initial.replace("chili","chilly");
else if (initial.includes("chilly"))
                done = initial.replace("chilly","chili");
else if (initial.includes("choral"))
                done = initial.replace("choral","coral");
else if (initial.includes("coral"))
                done = initial.replace("coral","choral");
else if (initial.includes("cite"))
                done = initial.replace("cite","sight");
else if (initial.includes("sight"))
                done = initial.replace("sight","cite");
else if (initial.includes("coarse"))
                done = initial.replace("coarse","course");
else if (initial.includes("course"))
                done = initial.replace("course","coarse");
else if (initial.includes("complement"))
                done = initial.replace("complement","compliment");
else if (initial.includes("compliment"))
                done = initial.replace("compliment","complement");
else if (initial.includes("deer"))
                done = initial.replace("deer","dear");
else if (initial.includes("dear"))
                done = initial.replace("dear","deer");
else if (initial.includes("die"))
                done = initial.replace("die","dye");
else if (initial.includes("dye"))
                done = initial.replace("dye","die");
else if (initial.includes("discreet"))
                done = initial.replace("discreet","discrete");
else if (initial.includes("discrete"))
                done = initial.replace("discrete","discreet");
else if (initial.includes("doe"))
                done = initial.replace("doe","dough");
else if (initial.includes("dough"))
                done = initial.replace("dough","doe");
else if (initial.includes("dual"))
                done = initial.replace("dual","duel");
else if (initial.includes("duel"))
                done = initial.replace("duel","dual");
else if (initial.includes("earn"))
                done = initial.replace("earn","urn");
else if (initial.includes("urn"))
                done = initial.replace("urn","earn");
else if (initial.includes("ewe"))
                done = initial.replace("ewe","you");
else if (initial.includes("you"))
                done = initial.replace("you","ewe");
else if (initial.includes("faze"))
                done = initial.replace("faze","phase");
else if (initial.includes("phase"))
                done = initial.replace("phase","faze");
else if (initial.includes("faze"))
                done = initial.replace("faze","phase");
else if (initial.includes("file")) 
    done = initial.replace("file","phial");               
else if (initial.includes("phial"))
                done = initial.replace("phial","file");
else if (initial.includes("find"))
                done = initial.replace("find","fined");
else if (initial.includes("fined"))
                done = initial.replace("fined","find");
else if (initial.includes("fir"))
                done = initial.replace("fir","fur");
else if (initial.includes("fur"))
                done = initial.replace("fur","fir");
else if (initial.includes("flea"))
                done = initial.replace("flea","flee");
else if (initial.includes("flee"))
                done = initial.replace("flee","flea");
else if (initial.includes("flew"))
                done = initial.replace("flew","flu");
else if (initial.includes("flu"))
                done = initial.replace("flu","flew");
else if (initial.includes("flex"))
                done = initial.replace("flex","flecks");
else if (initial.includes("flecks"))
                done = initial.replace("flecks","flex");
else if (initial.includes("flour"))
                done = initial.replace("flour","flower");
else if (initial.includes("flower"))
                done = initial.replace("flower","flour");
else if (initial.includes("for"))
                done = initial.replace("for","four");
else if (initial.includes("four"))
                done = initial.replace("four","for");
else if (initial.includes("foreword"))
                done = initial.replace("foreword","forward");
else if (initial.includes("forward"))
                done = initial.replace("forward","foreward");
else if (initial.includes("foul"))
                done = initial.replace("foul","fowl");
else if (initial.includes("fowl"))
                done = initial.replace("fowl","foul");
else if (initial.includes("gait"))
                done = initial.replace("gait","gate");
else if (initial.includes("gate"))
                done = initial.replace("gate","gait");
else if (initial.includes("genes"))
                done = initial.replace("genes","jeans");
else if (initial.includes("jeans"))
                done = initial.replace("jeans","genes");
else if (initial.includes("gored"))
                done = initial.replace("gored","gourd");
else if (initial.includes("gourd"))
                done = initial.replace("gourd","gored");
else if (initial.includes("great"))
                done = initial.replace("great","grate");
else if (initial.includes("grate"))
                done = initial.replace("grate","great");
else if (initial.includes("groan"))
                done = initial.replace("groan","grown");
else if (initial.includes("grown"))
                done = initial.replace("grown","groan");
else if (initial.includes("hear"))
                done = initial.replace("hear","here");
else if (initial.includes("here"))
                done = initial.replace("here","hear");
else if (initial.includes("heel"))
                done = initial.replace("heel","heal");
else if (initial.includes("heal"))
                done = initial.replace("heal","heel");
else if (initial.includes("hi"))
                done = initial.replace("hi","high");
else if (initial.includes("high"))
                done = initial.replace("high","hi");
else if (initial.includes("him"))
                done = initial.replace("him","hymn");
else if (initial.includes("hymn"))
                done = initial.replace("hymn","him");
else if (initial.includes("hoard"))
                done = initial.replace("hoard","horde");
else if (initial.includes("horde"))
                done = initial.replace("horde","hoard");
else if (initial.includes("hole"))
                done = initial.replace("hole","whole");
else if (initial.includes("whole"))
                done = initial.replace("whole","hole");
else if (initial.includes("holy"))
                done = initial.replace("holy","wholly");
else if (initial.includes("wholly"))
                done = initial.replace("wholly","holy");
else if (initial.includes("hour"))
                done = initial.replace("hour","our");
else if (initial.includes("our"))
                done = initial.replace("our","hour");
else if (initial.includes("idle"))
                done = initial.replace("idle","idol");
else if (initial.includes("idol"))
                done = initial.replace("idol","idle"); //good word: idol/idle
else if (initial.includes("incite"))
                done = initial.replace("incite","insight");
else if (initial.includes("insight"))
                done = initial.replace("insight","incite");
else if (initial.includes("knead"))
                done = initial.replace("knead","need");
else if (initial.includes("need"))
                done = initial.replace("need","knead");
else if (initial.includes("knew"))
                done = initial.replace("knew","new");
else if (initial.includes("new"))
                done = initial.replace("new","knew");
else if (initial.includes("knight"))
                done = initial.replace("knight","night");
else if (initial.includes("night"))
                done = initial.replace("night","knight");
else if (initial.includes("knot"))
                done = initial.replace("knot","not");
else if (initial.includes("not"))
                done = initial.replace("not","knot");
else if (initial.includes("know"))
                done = initial.replace("know","no");
else if (initial.includes("no"))
                done = initial.replace("no","know");
else if (initial.includes("leak"))
                done = initial.replace("leak","leek");
else if (initial.includes("leek"))
                done = initial.replace("leek","leak");
else if (initial.includes("lessen"))
                done = initial.replace("lessen","lesson");
else if (initial.includes("lesson"))
                done = initial.replace("lesson","lessen");
else if (initial.includes("links"))
                done = initial.replace("links","lynx");
else if (initial.includes("lynx"))
                done = initial.replace("lynx","links");
else if (initial.includes("loan"))
                done = initial.replace("loan","lone");
else if (initial.includes("lone"))
                done = initial.replace("lone","loan");
else if (initial.includes("loot"))
                done = initial.replace("loot","lute");
else if (initial.includes("lute"))
                done = initial.replace("lute","loot");
else if (initial.includes("made"))
                done = initial.replace("made","maid");
else if (initial.includes("maid"))
                done = initial.replace("maid","made");
else if (initial.includes("mail"))
                done = initial.replace("mail","male");
else if (initial.includes("male"))
                done = initial.replace("male","mail");
else if (initial.includes("main"))
                done = initial.replace("main","mane");
else if (initial.includes("mane"))
                done = initial.replace("mane","main");
else if (initial.includes("marshal"))
                done = initial.replace("marshal","martial");
else if (initial.includes("martial"))
                done = initial.replace("martial","marshal");
else if (initial.includes("medal"))
                done = initial.replace("medal","meddle");
else if (initial.includes("meddle"))
                done = initial.replace("meddle","medal");
else if (initial.includes("meet"))
                done = initial.replace("meet","meat");
else if (initial.includes("meat"))
                done = initial.replace("meat","meet");
else if (initial.includes("might"))
                done = initial.replace("might","mite");
else if (initial.includes("mite"))
                done = initial.replace("mite","might");
else if (initial.includes("mist"))
                done = initial.replace("mist","missed");
else if (initial.includes("missed"))
                done = initial.replace("missed","mist");
else if (initial.includes("moose"))
                done = initial.replace("moose","mousse");
else if (initial.includes("mousse"))
                done = initial.replace("mousse","moose");
else if (initial.includes("muscle"))
                done = initial.replace("muscle","mussel");
else if (initial.includes("mussel"))
                done = initial.replace("mussel","muscle");
else if (initial.includes("none"))
                done = initial.replace("none","nun");
else if (initial.includes("nun"))
                done = initial.replace("nun","none");
else if (initial.includes("oar"))
                done = initial.replace("oar","or");
else if (initial.includes("or"))
                done = initial.replace("or","oar");
else if (initial.includes("overdo"))
                done = initial.replace("overdo","overdue");
else if (initial.includes("overdue"))
                done = initial.replace("overdue","overdo");
else if (initial.includes("pail"))
                done = initial.replace("pail","pale");
else if (initial.includes("pale"))
                done = initial.replace("pale","pail");
else if (initial.includes("pain"))
                done = initial.replace("pain","pane");
else if (initial.includes("pane"))
                done = initial.replace("pane","pain");
else if (initial.includes("pair"))
                done = initial.replace("pair","pear");
else if (initial.includes("pear"))
                done = initial.replace("pear","pair");
else if (initial.includes("passed"))
                done = initial.replace("passed","past");
else if (initial.includes("past"))
                done = initial.replace("past","passed");
else if (initial.includes("peace"))
                done = initial.replace("peace","piece");
else if (initial.includes("piece"))
                done = initial.replace("piece","peace");
else if (initial.includes("peak"))
                done = initial.replace("peak","peek");
else if (initial.includes("peek"))
                done = initial.replace("peek","peak");
else if (initial.includes("pedal"))
                done = initial.replace("pedal","peddle");
else if (initial.includes("peddle"))
                done = initial.replace("peddle","pedal");
else if (initial.includes("plane"))
                done = initial.replace("plane","plain");
else if (initial.includes("plain"))
                done = initial.replace("plain","plane");
else if (initial.includes("principal"))
                done = initial.replace("principal","principle");            
else if (initial.includes("principle"))
                done = initial.replace("principle","principal");
else if (initial.includes("profit"))
                done = initial.replace("profit","prophet");
else if (initial.includes("prophet"))
                done = initial.replace("prophet","profit");
else if (initial.includes("rain"))
                done = initial.replace("rain","reign");
else if (initial.includes("reign"))
                done = initial.replace("reign","rain");
else if (initial.includes("red"))
                done = initial.replace("red","read");
else if (initial.includes("read"))
                done = initial.replace("read","red");
else if (initial.includes("right"))
                done = initial.replace("right","write");
else if (initial.includes("write"))
                done = initial.replace("write","right");
else if (initial.includes("ring"))
                done = initial.replace("ring","wring");
else if (initial.includes("wring"))
                done = initial.replace("wring","ring");
else if (initial.includes("rode"))
                done = initial.replace("rode","road");
else if (initial.includes("road"))
                done = initial.replace("road","rode");
else if (initial.includes("role"))
                done = initial.replace("role","roll");
else if (initial.includes("roll"))
                done = initial.replace("roll","role");
else if (initial.includes("rung"))
                done = initial.replace("rung","wrung");
else if (initial.includes("wrung"))
                done = initial.replace("wrung","rung");
else if (initial.includes("sail"))
                done = initial.replace("sail","sale");
else if (initial.includes("sale"))
                done = initial.replace("sale","sail");
else if (initial.includes("see"))
                done = initial.replace("see","sea");
else if (initial.includes("sea"))
                done = initial.replace("sea","see");
else if (initial.includes("shoe"))
                done = initial.replace("shoe","shoo");
else if (initial.includes("shoo"))
                done = initial.replace("shoo","shoe");
else if (initial.includes("side"))
                done = initial.replace("side","sighed");
else if (initial.includes("sighed"))
                done = initial.replace("sighed","side");
else if (initial.includes("slay"))
                done = initial.replace("slay","sleigh");
else if (initial.includes("sleigh"))
                done = initial.replace("sleigh","slay");
else if (initial.includes("soar"))
                done = initial.replace("soar","sore");
else if (initial.includes("sore"))
                done = initial.replace("sore","soar");
else if (initial.includes("sole"))
                done = initial.replace("sole","soul");
else if (initial.includes("soul"))
                done = initial.replace("soul","sole");
else if (initial.includes("some"))
                done = initial.replace("some","sum");
else if (initial.includes("sum"))
                done = initial.replace("sum","some");
else if (initial.includes("stare"))
                done = initial.replace("stare","stair");
else if (initial.includes("stair"))
                done = initial.replace("stair","stare");
else if (initial.includes("stationary"))
                done = initial.replace("stationary","stationery");            
else if (initial.includes("stationery"))
                done = initial.replace("stationery","stationary");
else if (initial.includes("steal"))
                done = initial.replace("steal","steel");
else if (initial.includes("steel"))
                done = initial.replace("steel","steal");
else if (initial.includes("stile"))
                done = initial.replace("stile","style");
else if (initial.includes("style"))
                done = initial.replace("style","stile");
else if (initial.includes("sun"))
                done = initial.replace("sun","son");
else if (initial.includes("son"))
                done = initial.replace("son","sun");
else if (initial.includes("tail"))
                done = initial.replace("tail","tale");
else if (initial.includes("tale"))
                done = initial.replace("tale","tail");
else if (initial.includes("team"))
                done = initial.replace("team","teem");
else if (initial.includes("teem"))
                done = initial.replace("teem","team");
else if (initial.includes("than"))
                done = initial.replace("than","then");
else if (initial.includes("then"))
                done = initial.replace("then","than");
else if (initial.includes("their"))
                done = initial.replace("their","there");
else if (initial.includes("there"))
                done = initial.replace("there","their");
else if (initial.includes("throne"))
                done = initial.replace("throne","thrown");
else if (initial.includes("thrown"))
                done = initial.replace("thrown","throne");
else if (initial.includes("tide"))
                done = initial.replace("tide","tied");
else if (initial.includes("tied"))
                done = initial.replace("tied","tide");
else if (initial.includes("to"))
                done = initial.replace("to","two");
else if (initial.includes("too"))
                done = initial.replace("too","two");
else if (initial.includes("two"))
                done = initial.replace("two","too");
else if (initial.includes("toe"))
                done = initial.replace("toe","tow");
else if (initial.includes("tow"))
                done = initial.replace("tow","toe");
else if (initial.includes("vain"))
                done = initial.replace("vain","vein");
else if (initial.includes("vein"))
                done = initial.replace("vein","vain");
else if (initial.includes("vary"))
                done = initial.replace("vary","very");
else if (initial.includes("very"))
                done = initial.replace("very","vary");
else if (initial.includes("wail"))
                done = initial.replace("wail","whale");
else if (initial.includes("whale"))
                done = initial.replace("whale","wail");
else if (initial.includes("waste"))
                done = initial.replace("waste","waist");
else if (initial.includes("waist"))
                done = initial.replace("waist","waste");
else if (initial.includes("way"))
                done = initial.replace("way","weigh");
else if (initial.includes("weigh"))
                done = initial.replace("weigh","way");
else if (initial.includes("weak"))
                done = initial.replace("weak","week");
else if (initial.includes("week"))
                done = initial.replace("week","weak");
else if (initial.includes("weather"))
                done = initial.replace("weather","whether");
else if (initial.includes("whether"))
                done = initial.replace("whether","weather");
else if (initial.includes("where"))
                done = initial.replace("where","wear");
else if (initial.includes("wear"))
                done = initial.replace("wear","where");
else if (initial.includes("which"))
                done = initial.replace("which","witch");
else if (initial.includes("witch"))
                done = initial.replace("witch","which");
else if (initial.includes("who's"))
                done = initial.replace("who's","whose");
else if (initial.includes("whose"))
                done = initial.replace("whose","who's");
else if (initial.includes("won"))
                done = initial.replace("won","one");
else if (initial.includes("one"))
                done = initial.replace("one","won");
else if (initial.includes("would"))
                done = initial.replace("would","wood");
else if (initial.includes("wood"))
                done = initial.replace("wood","would");
else if (initial.includes("you're"))
                done = initial.replace("you're","your");
else if (initial.includes("your"))
                done = initial.replace("your","you're");
else 
    done = initial;

            this.finaly.setCaption(done);
            

            this._getInput();
            alert("here2");
        },
        
        _getInput:function(){            
            var beg = this.finaly.getCaption(); 
            //alert(beg);
            this.$word = ["no", "no", "no"];            
            for (var a = 0; a < beg.length; a++) {
                this.$word[a] = new Array(3);
            }
            for(var b = 0; b < beg.length; b++) {
                this.$word[b] = beg[b];
            }
            
            var build = "";
            var build2 = "";

            for (var c = 0; c<this.$word.length; c++) {
                var x = -1; 
                if (this.$word[c]=="a")    {
                        build2 = "@"; 
                    this.$symbs++;
                }
                else if (this.$word[c]=="b") {
                    build2 = "b";           }    
                else if (this.$word[c]=="c") {
                        build2 = "(";
                    this.$symbs++;
                }
                else if (this.$word[c]=="d") {
                    build2 = "d";
                }
                else if (this.$word[c]=="e") {
                    build2 = "e";              }
                else if (this.$word[c]=="f") {
                    build2 = "f";
                }
                else if (this.$word[c]=="g") {
                    build2 = "g";
                }
                else if (this.$word[c]=="h") {
                    build2 = "h";
                }
                else if (this.$word[c]=="i") {
                    x = Math.round(Math.random() * 1);
                    if (x===0) {
                        build2 = "!";
                    }
                    else if (x==1) {
                        build2 = ";";
                    }
                    this.$symbs++;
                }
                else if (this.$word[c]=="j") {
                    build2 = "j";
                }
                else if (this.$word[c]=="k") {
                    build2 = "k";
                }
                else if (this.$word[c]=="l") {
                    x = Math.round(Math.random() * 1);
                    if (x===0) {
                        build2 = "1";
                        this.$numms++;
                    }
                    else if (x==1) {
                        build2 = "/";
                        this.$symbs++;
                    }                    
                }
                else if (this.$word[c]=="m") {
                    build2 = "m";
                }
                else if (this.$word[c]=="n") {
                    build2 = "n";
                }
                else if (this.$word[c]=="o") {
                    build2 = "0";
                    this.$numms++;
                }
                else if (this.$word[c]=="p") {
                    build2 = "p";
                }
                else if (this.$word[c]=="q") {
                    build2 = "q";
                }
                else if (this.$word[c]=="r") {
                    build2 = "r";
                }
                else if (this.$word[c]=="s") {
                    build2 = "$";
                    this.$symbs++;
                }
                else if (this.$word[c]=="t") {
                    build2 = "+";
                    this.$symbs++;
                }
                else if (this.$word[c]=="u") {
                    build2 = "u";
                }
                else if (this.$word[c]=="v") {
                    build2 = "v";
                }
                else if (this.$word[c]=="w") {
                    build2 = "w";
                }
                else if (this.$word[c]=="x") {
                    build2 = "x";
                }
                else if (this.$word[c]=="y") {
                    build2 = "y";
                }
                else if (this.$word[c]=="z") {
                    build2 = "z";
                }
                else if (this.$word[c]==" ") {
                    build2 = "  ";
                }
                
                //capitals addition
                
                else if (this.$word[c]=="A")    {            
                        build2 = "A";
                    this.$capps++;
                }
                else if (this.$word[c]=="B") {
                    build2 = "B";  
                    this.$capps++;
                }    
                else if (this.$word[c]=="C") {
                        build2 = "C";
                    this.$capps++;
                }
                else if (this.$word[c]=="D") {
                    build2 = "D";
                    this.$capps++;
                }
                else if (this.$word[c]=="E") {
                    build2 = "E";  
                this.$capps++;
                }
                else if (this.$word[c]=="F") {
                    build2 = "F";
                    this.$capps++;
                }
                else if (this.$word[c]=="G") {
                    build2 = "G";
                    this.$capps++;
                }
                else if (this.$word[c]=="H") {
                    build2 = "H";
                    this.$capps++;
                }
                else if (this.$word[c]=="I") {
                    build2 = "I";
                    this.$capps++;
                }
                else if (this.$word[c]=="J") {
                    build2 = "J";
                    this.$capps++;
                }
                else if (this.$word[c]=="K") {
                    build2 = "K";
                    this.$capps++;
                }
                else if (this.$word[c]=="L") {
                    build2 = "L";
                    this.$capps++;
                }
                else if (this.$word[c]=="M") {
                    build2 = "M";
                    this.$capps++;
                }
                else if (this.$word[c]=="N") {
                    build2 = "N";
                    this.$capps++;
                }
                else if (this.$word[c]=="O") {
                    build2 = "O";
                    this.$capps++;
                }
                else if (this.$word[c]=="P") {
                    build2 = "P";
                    this.$capps++;
                }
                else if (this.$word[c]=="Q") {
                    build2 = "Q";
                    this.$capps++;
                }
                else if (this.$word[c]=="R") {
                    build2 = "R";
                    this.$capps++;
                }
                else if (this.$word[c]=="S") {
                    build2 = "S";
                    this.$capps++;
                }
                else if (this.$word[c]=="T") {
                    build2 = "T";
                    this.$capps++;
                }
                else if (this.$word[c]=="U") {
                    build2 = "U";
                    this.$capps++;
                }
                else if (this.$word[c]=="V") {
                    build2 = "V";
                    this.$capps++;
                }
                else if (this.$word[c]=="W") {
                    build2 = "W";
                    this.$capps++;
                }
                else if (this.$word[c]=="X") {
                    build2 = "X";
                    this.$capps++;
                }
                else if (this.$word[c]=="Y") {
                    build2 = "Y";
                    this.$capps++;
                }
                else if (this.$word[c]=="Z") {
                    build2 = "Z";
                    this.$capps++;
                }
                
                // numbers addition
                
                else if (this.$word[c]=="0") {
                    build2 = "0";
                    this.$numms++;
                }
                else if (this.$word[c]=="1") {
                    build2 = "1";
                    this.$numms++;
                }
                else if (this.$word[c]=="2") {
                    build2 = "2";
                    this.$numms++;
                }
                else if (this.$word[c]=="3") {
                    build2 = "3";
                    this.$numms++;
                }
                else if (this.$word[c]=="4") {
                    build2 = "4";
                    this.$numms++;
                }
                else if (this.$word[c]=="4") {
                    build2 = "1";
                    this.$numms++;
                }
                else if (this.$word[c]=="4") {
                    build2 = "4";
                    this.$numms++;
                }
                else if (this.$word[c]=="5") {
                    build2 = "5";
                    this.$numms++;
                }
                else if (this.$word[c]=="6") {
                    build2 = "6";
                    this.$numms++;
                }
                else if (this.$word[c]=="7") {
                    build2 = "7";
                    this.$numms++;
                }
                else if (this.$word[c]=="8") {
                    build2 = "8";
                    this.$numms++;
                }
                else if (this.$word[c]=="9") {
                    build2 = "9";
                    this.$numms++;
                }
                
                
                build = build.concat(build2);
                //alert(build);
                
            }
            this.finaly2.setCaption(build);
            this.$changed = build;
            //alert("Modified password: "+build);
           this._fixer();
        },
        
        _fixer:function(){
            symbols = this.symbInput.getUIValue();
            //alert(symbols);
            
            // adding capital letters
            var beg = this.$changed;
            var beg2 = " ";
            this.$charge = ["no", "no", "no"];            
            for (var a = 0; a < beg.length; a++) {
                this.$charge[a] = new Array(3);
            }
            for(var b = 0; b < beg.length; b++) {
                this.$charge[b] = beg[b];
            }
            while (this.$capps < Number(this.capInput.getUIValue()))
            {
                var c = Math.round(Math.random() * (beg.length)) - 1;
                // turning lowercases into capitals
                if (this.$charge[c]==" " || this.$charge[c]=="@" || this.$charge[c]=="(" || this.$charge[c]=="!" || this.$charge[c]==";" || this.$charge[c]=="%" || this.$charge[c]=="1" || this.$charge[c]=="/" || this.$charge[c]=="0" || this.$charge[c]=="*" || this.$charge[c]=="?" || this.$charge[c]=="{" || this.$charge[c]=="8" || this.$charge[c]=="$" || this.$charge[c]=="+" || this.$charge[c]==">" || this.$charge[c]=="<" || this.$charge[c]=="/") {        
                }
                else if (this.$charge[c] == (this.$charge[c].toLowerCase())) {
                    this.$charge[c] = (this.$charge[c].toUpperCase());
                    this.$capps++;   
                }
                else {               
                }               
            }
            for(var h = 0; h < beg.length; h++) {
                beg2 = beg2.concat(this.$charge[h]);
            }
            
            // adding numbers
            while (this.$numms < Number(this.numInput.getUIValue()))
            {
                var d = (Math.round(Math.random() * 9));
                beg2 = beg2.concat(d.toString());
                this.$numms++;
            }
            
            // adding symbols
            var build2 = " ";
            while (this.$symbs < Number(this.symbInput.getUIValue()))
            {
                var e = (Math.round(Math.random() * 14));
                if (e == 1) {
                    build2 = "@";
                }
                else if (e==2) {
                    build2 = "(";
                }
                else if (e==3) {
                    build2 = "!";
                }
                else if (e==4) {
                    build2 = ";";
                }
                else if (e==5) {
                    build2 = "%";
                }
                else if (e==6) {
                    build2 = "/";
                }
                else if (e==7) {
                    build2 = "*";
                }
                else if (e==8) {
                    build2 = "?";
                }
                else if (e==9) {
                    build2 = "{";
                }
                else if (e==10) {
                    build2 = "$";
                }
                else if (e==11) {
                    build2 = "+";
                }
                else if (e==12) {
                    build2 = ">";
                }
                else if (e==13) {
                    build2 = "<";
                }
                else if (e==14) {
                    build2 = "/";
                }
                //beg2 = beg2.concat(build2);
                beg2 += String(build2);
                this.$symbs++;

            }
            
            this.$capps = 0;
            this.$numms = 0;
            this.$symbs = 0;
            this.checkbox_books.setUIValue(false);
            this.checkbox_lyrics.setUIValue(false);
            this.checkbox_movies.setUIValue(false);
            this.checkbox_quotes.setUIValue(false);
            var index, len=beg2.length;
            alert(beg2);
            var newStr="";
            for (index= 0; index < len; ++index) {
                // newStr += String(beg2[index]);
                switch (beg2[index]) {
                    case '@': newStr += "@";
                        break;
                    case '!': newStr += "!"; 
                        break;   
                    case '$': newStr += "$";
                        break;
                    case '(': newStr += "(";
                        break;
                    case ' ': newStr += " ";
                        break;
                    default: newStr += String(beg2[index]);
                        break;
                }
                //alert("Each char: " + Char(beg2[index]))
            }
            //newStr[index] = '\0';
            //alert("Newstr: " + newStr)         
            this.gen_inpt_passspace.setUIValue(newStr);
            var index2, len2 = newStr.length;
            var newStr2 = "";
            for (index2 = 0; index2 < len2; ++index2) {
                switch (newStr[index2]) {
                    case '@': newStr2 += "@";
                        break;
                    case '!': newStr2 += "!";
                        break;
                    case '$': newStr2 += "$";
                        break;
                    case '(': newStr2 += "(";
                        break;
                    case ' ': newStr2 += "";
                        break;
                    default: newStr2 += String(newStr[index2]);
                        break;
                }
            }
            this.gen_inpt_passswpace.setUIValue(newStr2);
            
        },
        
        _material:function(){            
            //var input = this.categories.getUIValue();
            var fin = "";
            var rando = 0; 
            rando = (Math.round(Math.random() * this.$tota.length-1));
            fin = this.$tota[rando];   
            this.inputter.setUIValue(fin);   
            this.$tota = [];
        },
        
        
        _mat1:function(){
            var quotes = ["No guts, no glory", "Screw it, lets do it", "She believed she could, so she did", "Believe you can and you're halfway there", "You get what you give", "Spread love everywhere", "You are enough", "Be the change that you wish to see"];
            for (i = 0; i<quotes.length; i++) {
                this.$tota.push(quotes[i]);
            }
        },
        
        _mat2:function(){
            var songs = ["Dont Stop Believin","Single Ladies","Baby One More Time","Brown Eyed Girl","Born to Run","I Will Survive","Singin in the Rain","What a Wonderful World","New York New York","Somewhere Over the Rainbow","All You Need is Love","Picture to Burn","Shouldve Said No","No Body No Crime","Tis the Damn Season","Long Story Short","patch up your tapestry","My kingdom come undone","Chains around my demons","Im a mirrorball","Death by a Thousand Cuts","I Think He Knows","And the 7th thing","Chill it out take it slow","hopped off the plane at LAX","Who said I cant be","Cant Be Tamed","Party in the USA","If We Were A Movie","Fly On The Wall","The Other Side of Me","Im a southern belle","Everybody makes mistakes","Its All The Same To Me","Achy Breaky Heart","Ready Set Dont Go","Words By Heart","In The Heart of a Woman","Back To Tennessee","One Last Thrill","Guns Gold and Guitars","Goddess of Democracy","Theyre Playin Our Song","Wanna Be Your Joe","Tik tok on the clock","We R Who We R","Im yelling timber","My First Kiss","Ill Oil Wells Love You","Before the Next Teardrop Falls","Two Doors Down","Gypsy, Joe and Me","What Will Baby Be","The Love You Gave","Games People Play","Early Morning Breeze","Me and Little Andy","The Grass Is Blue","Down From Dover","The Pain of Loving You","Our Kind of Love","Dancin Away With My Heart","American Honey","We Owned the Night","Love Dont Live Here","I Run to You","Need You Now","Just a Kiss","Loves The Only House","Gonna Love You Through It","Whatever You Say","A Broken Wing","This Ones For The Girls","Independence Day","One Number Away","Mustve Never Met You","What You See Is What You Get","Let the Moonshine","She Got the Best of Me","Beer Never Broke My Heart","When It Rains It Pours"];
            for (i = 0; i<songs.length; i++) {
                this.$tota.push(songs[i]);
            }
        },
        
        _mat3:function(){
            var books = ["Don Quixote","One Hundred Years of Solitude","Great Gatsby","War and Peace","Divine Comedy","Crime and Punishment","Wuthering Heights","Catcher in the Rye","Pride and Prejudice","Adventures of Huckleberry Finn","Alices Adventures in Wonderland","Heart of Darkness","Sound and the Fury"];            
            for (i = 0; i<books.length; i++) {
                this.$tota.push(books[i]);
            }
        },
        
        _mat4:function(){
            var movies = ["Seven Samurai","Bonnie and Clyde","Reservoir Dogs","Pans Labyrinth","Doctor Zhivago","Good Will Hunting","Jurassic Park","Ferris Buellers Day Off","Empire Strikes Back","Princess Bride","Breakfast Club","Sound of Music","Its a Wonderful Life","To Kill a Mockingbird","Gone With the Wind","Raiders of the Lost Ark","Back to the Future"];                      
            for (i = 0; i<movies.length; i++) {
                this.$tota.push(movies[i]);
            }
        },
        
        
        
        _switch1:function(){
            this.tabs.setValue("Specifications",true);   
        },
        
        _switch2:function(){
            this.tabs.setValue("Generator",true);
        }
        
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});