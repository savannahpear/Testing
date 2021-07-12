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
                .setTop("2.2095238095238097em")
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
                .setTop("3.7083333333333335em")
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
                .setHost(host,"checkbox_lyrics")
                .setLeft("9.125em")
                .setTop("3.6666666666666665em")
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
            
            host.home_block.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"checkbox_books")
                .setLeft("14.958333333333334em")
                .setTop("3.6666666666666665em")
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
                .setTop("3.6666666666666665em")
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
            
            host.home_svg.append(
                xui.create("xui.UI.Input")
                .setHost(host,"inputter")
                .setLeft("25.904761904761905em")
                .setTop("16.685714285714287em")
                .setWidth("27em")
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