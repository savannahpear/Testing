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
                .setHost(host,"xui_ui_tabs8")
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
                .setValue("Home")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#31081F"
                    }
                })
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.SVGPaper")
                .setHost(host,"home_svg")
                .setLeft("0em")
                .setTop("0.1523809523809524em")
                .setWidth("60.95238095238095em")
                .setHeight("42.51428571428571em"),
                "Home"
            );
            
            host.home_svg.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image5")
                .setLeft("0.7619047619047619em")
                .setTop("1.5238095238095237em")
                .setWidth("59.42857142857143em")
                .setHeight("5.40952380952381em")
                .setSrc("{/}Publication2.jpg")
            );
            
            host.home_svg.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image6")
                .setLeft("2.2857142857142856em")
                .setTop("6.857142857142857em")
                .setWidth("57.5em")
                .setHeight("5.083333333333333em")
                .setSrc("{/}Publication3.jpg")
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image9")
                .setLeft("6.095238095238095em")
                .setTop("14.628571428571428em")
                .setWidth("14.857142857142858em")
                .setHeight("7.0095238095238095em")
                .setSrc("{/}next.jpg"),
                "Home"
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Input")
                .setHost(host,"inputter")
                .setLeft("17.523809523809526em")
                .setTop("16.228571428571428em")
                .setWidth("27em")
                .setHeight("5em")
                .setLabelSize("8em"),
                "Home"
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Block")
                .setHost(host,"home_block")
                .setLeft("0.16666666666666666em")
                .setTop("26.5em")
                .setWidth("59.96190476190476em")
                .setHeight("19.166666666666668em")
                .setZIndex(0)
                .setBackground("#31081F"),
                "Home"
            );
            
            host.xui_ui_tabs8.append(
                xui.create("xui.UI.Label")
                .setHost(host,"pickCat")
                .setLeft("4.333333333333333em")
                .setTop("29em")
                .setCaption("Pick a Category:")
                .setFontColor("#FFFFFF")
                .setFontSize("26px"),
                "Home"
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