﻿{#targetengine "indesign"#include "../styling/doc.jsx";#include "../process/import.jsx";#include "../functions/clear_XML_Structure.jsx";#include "../meta/FileWriter.jsx";// written by fabiantheblind for indesign cs4// how to include a quote script into the alert// the script "homerQuote.js" has to be next to this script#include "../meta/homerQuote.js";// 157 is the lenght of a quote array//var num = Math.floor(157*Math.random());// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // this ID CS 4 -5 // Copyright (C) 2011 Fabian "fabiantheblind" Morón Zirfas// http://www.the-moron.net // info [at] the - moron . net// This script is free software: you can redistribute it and/or modify// it under the terms of the GNU General Public License as published by// the Free Software Foundation, either version 3 of the License, or// any later version.// This script is distributed in the hope that it will be useful,// but WITHOUT ANY WARRANTY; without even the implied warranty of// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the// GNU General Public License for more details.// You should have received a copy of the GNU General Public License// along with this program.  If not, see <http://www.gnu.org/licenses/.// UI PANEL based on:// rd_EditText.jsx// Copyright (c) 2006-2007 redefinery (Jeffrey R. Almasol). All rights reserved.// check it: www.redefinery.com// // Name: rd_EditText// Version: 2.0// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 		function basic_panel(thisObj,xml,list,doc){				var x_data = new Object();	// Store globals in an object	x_data.list = list;	x_data.xml = xml;	x_data.xmlRef = null;	x_data.doc = doc;	x_data.consoleTxt  = "Welcome";	x_data.scriptName = "vFFF WP XML importer";	x_data.scriptTitle = x_data.scriptName + " v0.3";	x_data.str_tmn_SUrl = "http://www.the-moron.net";			x_data.winProgramFiles = Folder.commonFiles.parent.fsName;	x_data.winBrowserCmd = x_data.winProgramFiles + "\\Internet Explorer\\iexplore.exe";// You can chage the browser to use on windows here, use double slashes	x_data.macBrowserCmdStart = "osascript -e 'open location \"";	x_data.macBrowserCmdEnd = "\"'";	x_data.strHelpHeader =  "vFFF Wordpress XML importer Help";	x_data.str3xwtmn = "got to 3xW.T-M.N";	x_data.strHelp = {en: "?"}	x_data.strErrNoCompSel = {en: "Cannot perform operation."};	x_data.strErrNoLayerSel = {en: "Cannot perform operation."};	x_data.app = app.name;	// x_data.strMinAE80 = {en: "This script requires Adobe After Effects CS3 or later."};	x_data.strHelpText = 	"Copyright (c) 2011 fabiantheblind\n";		// Tells us where this script is running from	x_data.scriptsFile = new File($.fileName);		// and get all the icons	x_data.IconPrssd = new File(x_data.scriptsFile.parent.fsName + "/icons/iconButton_pressed.png");	x_data.IconNormal = new File(x_data.scriptsFile.parent.fsName + "/icons/iconButton_normal.png");	x_data.ufile = new File(x_data.scriptsFile.parent.fsName + "/icons/u.png");	x_data.dfile = new File(x_data.scriptsFile.parent.fsName + "/icons/d.png");	x_data.rlfile = new File(x_data.scriptsFile.parent.fsName + "/icons/rl.png");	x_data.hfile = new File(x_data.scriptsFile.parent.fsName + "/icons/h.png");	x_data.lfile = new File(x_data.scriptsFile.parent.fsName + "/icons/l.png");	x_data.sfile = new File(x_data.scriptsFile.parent.fsName + "/icons/s.png");	x_data.prfile = new File(x_data.scriptsFile.parent.fsName + "/icons/pr.png");	x_data.cfile = new File(x_data.scriptsFile.parent.fsName + "/icons/c.png");	x_data.rmfile = new File(x_data.scriptsFile.parent.fsName + "/icons/rm.png");	x_data.nuffile = new File(x_data.scriptsFile.parent.fsName + "/icons/nuf.png");	x_data.csfile = new File(x_data.scriptsFile.parent.fsName + "/icons/cs.png");	x_data.kfile = new File(x_data.scriptsFile.parent.fsName + "/icons/k.png");		x_data.redfile = new File(x_data.scriptsFile.parent.fsName + "/icons/red.png");	x_data.whitefile = new File(x_data.scriptsFile.parent.fsName + "/icons/white.png");	x_data.greenfile = new File(x_data.scriptsFile.parent.fsName + "/icons/green.png");	x_data.alertIcofile = new File(x_data.scriptsFile.parent.fsName + "/icons/alertico.png");	// the active states	x_data.ufile_a = new File(x_data.scriptsFile.parent.fsName + "/icons/u_active.png");	x_data.dfile_a = new File(x_data.scriptsFile.parent.fsName + "/icons/d_active.png");	x_data.rlfile_a = new File(x_data.scriptsFile.parent.fsName + "/icons/rl_active.png");	x_data.hfile_a = new File(x_data.scriptsFile.parent.fsName + "/icons/h_active.png");	x_data.lfile_a = new File(x_data.scriptsFile.parent.fsName + "/icons/l_active.png");	x_data.sfile_a = new File(x_data.scriptsFile.parent.fsName + "/icons/s_active.png");	x_data.prfile_a = new File(x_data.scriptsFile.parent.fsName + "/icons/pr_active.png");	x_data.cfile_a = new File(x_data.scriptsFile.parent.fsName + "/icons/c_active.png");	x_data.rmfile_a = new File(x_data.scriptsFile.parent.fsName + "/icons/rm_active.png");	x_data.nuffile_a = new File(x_data.scriptsFile.parent.fsName + "/icons/nuf_active.png");	x_data.csfile_a = new File(x_data.scriptsFile.parent.fsName + "/icons/cs_active.png");	x_data.kfile_a = new File(x_data.scriptsFile.parent.fsName + "/icons/k_active.png");		// the pressed state		x_data.ufile_p = new File(x_data.scriptsFile.parent.fsName + "/icons/u_pressed.png");	x_data.dfile_p = new File(x_data.scriptsFile.parent.fsName + "/icons/d_pressed.png");	x_data.rlfile_p = new File(x_data.scriptsFile.parent.fsName + "/icons/rl_pressed.png");	x_data.hfile_p = new File(x_data.scriptsFile.parent.fsName + "/icons/h_pressed.png");	x_data.lfile_p = new File(x_data.scriptsFile.parent.fsName + "/icons/l_pressed.png");	x_data.sfile_p = new File(x_data.scriptsFile.parent.fsName + "/icons/s_pressed.png");	x_data.prfile_p = new File(x_data.scriptsFile.parent.fsName + "/icons/pr_pressed.png");	x_data.cfile_p = new File(x_data.scriptsFile.parent.fsName + "/icons/c_pressed.png");	x_data.rmfile_p = new File(x_data.scriptsFile.parent.fsName + "/icons/rm_pressed.png");	x_data.nuffile_p = new File(x_data.scriptsFile.parent.fsName + "/icons/nuf_pressed.png");	x_data.csfile_p = new File(x_data.scriptsFile.parent.fsName + "/icons/cs_pressed.png");	x_data.kfile_p = new File(x_data.scriptsFile.parent.fsName + "/icons/k_pressed.png");				x_data.font = "Lucida Grande:12";	x_data.buttonSize = "preferredSize:[125,25]";		x_data.checkedStates = null;			x_data.metaFolder  = "../meta";	var fileHelp = "help.txt";	x_data.readInHelpText = readFile(fileHelp);		x_data.strHelpText = x_data.readInHelpText;	// // // // // // // // // // // // // // // // // // // // // // // // // // // // // 	// x_buildUI()	// 	// Description:	// This function builds the user interface.	// 	// Parameters:	// thisObj - Panel object (if script is launched from Window menu); null otherwise.	// 	// Returns:	// Window or Panel object representing the built user interface.	// This is for use in Adobe After Effects 	// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 		function x_buildUI(thisObj){		var pal = (thisObj instanceof Panel) ? thisObj : new Window("palette", x_data.scriptName, undefined, {resizeable:true});			if (pal != null){							pal.main = pal.add("Group");			pal.main.orientation = "row";			pal.main.alignment = ["fill","fill"];			pal.main.margins = 10;			pal.main.spacing = 10;			pal.main.minimumSize.height = 400;			pal.main.minimumSize.width = 555;						// // // // // // // // // 			// The List			// // // // // // // // //			pal.main.list = pal.main.add ('ListBox', undefined, 'asd',{multiselect: true,numberOfColumns: 2, showHeaders: true, columnTitles: ['Number', 'Title']});			//pal.main.list.preferredSize = [500,400];			pal.main.list.alignment = ["fill", "fill"];			pal.main.list.minimumSize.width = 400;			pal.main.list.minimumSize.height = 200;			var fRes =  "group{orientation:'column', alignment:'top',\			rm: IconButton {text:'Check In Out',properties: { style : 'toolbutton' },preferredSize:[125,25]},\			u: IconButton {text:'Move Item Up',properties: { style : 'toolbutton' },preferredSize:[125,25]},\			d: IconButton {text:'Move Item Down',properties: { style : 'toolbutton' },preferredSize:[125,25]},\			rl: IconButton {text:'Refresh List',properties: { style : 'toolbutton' },preferredSize:[125,25]},\			nuf: IconButton {text:'Build New Doc',properties: { style : 'toolbutton' },preferredSize:[125,25]},\			pr: IconButton {text:'Process to: ID',properties: { style : 'toolbutton' },preferredSize:[125,25]},\			cs: IconButton {text:'Clear ID Structure',properties: { style : 'toolbutton' },preferredSize:[125,25]},\			l: IconButton {text:'Load XML File',properties: { style : 'toolbutton' },preferredSize:[125,25]},\			s: IconButton {text:'Save XML File',properties: { style : 'toolbutton' },preferredSize:[125,25]},\			h: IconButton {text:'Help',properties: { style : 'toolbutton' },preferredSize:[125,25]},\			c: IconButton {text:'Close',properties: { style : 'toolbutton' },preferredSize:[125,25]},\			k: IconButton {text:'kill Item',properties: { style : 'toolbutton' },preferredSize:[125,25]},\			}";			//itemText: EditText { preferredSize: [120, 210], properties: { multiline: true } }, \									pal.main.btns = pal.main.add(fRes);			pal.main.btns.alignChildren = ['fill','fill'];									// // // // // // // // // // 			//  This is Styling stuff  // 			// // // // // // // // // //						// // // // // // // // // // 			// IMAGES FOR THE BUTTONS  // 			// // // // // // // // // // // 			// // // // // // // // // // // 			//   This is the edit section // 			// // // // // // // // // // //			pal.main.btns.u.image = ScriptUI.newImage( x_data.ufile, undefined, x_data.ufile_p, x_data.ufile_a );			pal.main.btns.d.image = ScriptUI.newImage( x_data.dfile, undefined, x_data.dfile_p, x_data.dfile_a );			pal.main.btns.rl.image = ScriptUI.newImage( x_data.rlfile, undefined, x_data.rlfile_p, x_data.rlfile_a );			pal.main.btns.rm.image = ScriptUI.newImage( x_data.rmfile, undefined, x_data.rmfile_p, x_data.rmfile_a );						// // // // // // // // // //			// this is help load save  //			// // // // // // // // // //			pal.main.btns.h.image = ScriptUI.newImage( x_data.hfile, undefined, x_data.hfile_p, x_data.hfile_a );			pal.main.btns.l.image = ScriptUI.newImage( x_data.lfile, undefined, x_data.lfile_p, x_data.lfile_a );			pal.main.btns.s.image = ScriptUI.newImage( x_data.sfile, undefined, x_data.sfile_p, x_data.sfile_a );						// comes asap			pal.main.btns.s.enabled = false;						// // // // // // // // // // // // // // // // // // // // // 			// this is the process section /checkbox / process / close  // 			// // // // // // // // // // // // // // // // // // // // //						pal.main.btns.nuf.image = ScriptUI.newImage( x_data.nuffile, undefined, x_data.nuffile_p, x_data.nuffile_a );			pal.main.btns.pr.image = ScriptUI.newImage( x_data.prfile, undefined, x_data.prfile_p, x_data.prfile_a );			pal.main.btns.cs.image = ScriptUI.newImage( x_data.csfile, undefined, x_data.csfile_p, x_data.csfile_a );			pal.main.btns.c.image = ScriptUI.newImage( x_data.cfile, undefined, x_data.cfile_p, x_data.cfile_a );			pal.main.btns.k.image = ScriptUI.newImage( x_data.kfile, undefined, x_data.kfile_p, x_data.kfile_a );						var winGfx = pal.graphics;			//var darkColorBrush = winGfx.newPen(winGfx.BrushType.SOLID_COLOR, [0,0,0], 1);			var darkColorBrush = winGfx.newPen(winGfx.BrushType.SOLID_COLOR, [0,0,0], 1);			var brightBGBrush = winGfx.newBrush(winGfx.BrushType.SOLID_COLOR, [0.9,0.9,0.9], 1);			// winGfx.font = ScriptUI.newFont(x_data.font, 12);						pal.graphics.backgroundColor = brightBGBrush;			pal.graphics.foregroundColor = darkColorBrush;			/*			for(var r = 0; r < pal.main.btns.length; r++){								pal.main.btns[r].graphics.backgroundColor = brightBGBrush;			}			*/			// End Styling Stuff			pal.layout.layout(true);			pal.layout.resize();									pal.onResizing = pal.onResize = function () {				this.layout.resize();				}			pal.onShow = function (){				pal.layout.layout();				 pal.minimumSize = pal.preferredSize;				}													// // // // // // // // // // // 			//  THIS IS NOT REALLY UESED  // 			// // // // // // // // // // // 						// pal.main.list.onChange = function(){			// 				try{			// 				pal.main.btns.itemText.text = pal.main.list.selection.subItems[0].text;			// 				}catch(e){			// 				pal.main.btns.itemText.text = "Sorry, got nothing to push to the box";				// 				}			// 			}												// // // // // // // // // // // 			// move the listitems around  // 			// // // // // // // // // // // 								// // // // // // // // // // // 			// move the listitems around  // 			// // // // // // // // // // // 						// // // // // // // 			// MOVE UP BUTTON // 			// // // // // // // 			pal.main.btns.u.onClick = function () {							if(pal.main.list.selection.length > 1){				alert("Sorry, i only can move one item");				return;				}			var n = pal.main.list.selection[0].index;				if(n > 0){ 				swap (				pal.main.list.items [n-1], pal.main.list.items [n-1].subItems[0],				pal.main.list.items [n], pal.main.list.items [n].subItems[0]);				pal.main.list.items[n].selected = false;								pal.main.list.selection = n-1;				}							}					// // // // // // // // 			// MOVE DOWN BUTTON // 			// // // // // // // // 						pal.main.btns.d.onClick = function () {			if(pal.main.list.selection.length > 1){				alert("Sorry, i only can move one item");				return;				}			var n = pal.main.list.selection[0].index;			var litms = pal.main.list.items;							if (n < litms.length-1){				swap (litms[n],litms[n].subItems[0],litms[n+1],litms[n+1].subItems[0]);								pal.main.list.items[n].selected = false;								pal.main.list.selection = n+1;				}			}			// // // // // // 			//  end moving // 			// // // // // // 						// // // // // // // // // // // // // 			// apply the new order to the list  // 			// // // // // // // // // // // // // 			pal.main.btns.rl.onClick = function (){								if(pal.main.list.items.length != null){															for(var k = 0; k < pal.main.list.items.length ; k++){						pal.main.list.items[k].text =pal.main.list.items[k].index +1;											}					x_data.list = build_list(pal.main.list,false);					}else{					alert("Sorry, there is nothing to refresh");											}								}						pal.main.btns.rm.onClick = function (){						var sel = pal.main.list.selection;						for(var s= 0; s < sel.length;s++){			if(sel[s].checked == true){				sel[s].checked = false;				//sel.enabled = false;				}else{				sel[s].checked = true;				//sel.enabled = true;					}				}			x_data.list = build_list(pal.main.list,false);			}					// // // // // // //			// EDIT GROUP END // 			// // // // // // // 												// // // // // // // // // // 			// // THE META GROUP START // 			// // // // // // // // // // 			// //						pal.main.btns.h.onClick = function () {					if(typeof(helpWindow_unitTest) == "undefined") {							new helpWindow().run();							}						}								// // // // // // // // // // // // // // // // // // // // // 			// taken from SnpXMLTreeView.jsx from the ExtendScript SDK  // 			// THIS BUILDS THE LIST					    // 			// // // // // // // // // // // // // // // // // // // // // 			//			//			pal.main.btns.l.onClick = function (){							if(File.fs == "Windows"){				var f = File.openDialog("Select your WP XML", "XML Files: *.xml");			}else{				var f = File.openDialog("Select your WP XML", undefined);				}												if(f != null){				f.open("r");				c = f.read();				f.close();				x_data.xml = new XML(c);		 		x_data.xmlRef  = f;	   			}			// here comes the import 			pal.main.list.removeAll();			// This builds the list item  subitem text			var xp  = "//title";			var x = x_data.xml.xpath(xp);			var str = x.toString();			var nStr = str.replace(/<title>/g, "");			var nuStr = nStr.replace(/\n/g, "");				var rowsTxt = nuStr.split("</title>");				var rows = new Array();			for (var i = 0; i < rowsTxt.length;i++){			rows[i] = pal.main.list.add("item", i +1 );			rows[i].checked = true;			rows[i].image = x_data.whitefile;			rows[i].itemSize = [10,12];			rows[i].subItems[0].text = rowsTxt[i] ;				}			pal.main.list.selection = 0;					}												// // // // // // // // // // // // // // 			// THIS Exports THE LIST to .tsv files // 			// // // // // // // // // // // // // // 			//			//			pal.main.btns.s.onClick = function (){			alert("Sorry not working");			return;					//This is what writes the .tsv		var name = "";		try{			var name = x_data.xml.name;						}catch(e){			alert("You have no .xml file loaded");			name = "default";			return;			}		this.fw = new FileWriter(name,"tsv",true);		this.fw.append("Hello World");		this.fw.writeFile();		  }						// // // // // // // 		// END META GROUP // 		 // // // // // // // 		 		 		 		 		 // // // // // // // // // // //  		 //  THIS IS THE PROCESS GROUP // 		 // // // // // // // // // // // 		 //		 //		 //		// // // // // // // // // // // // // 	 		//  THIS BUILDS A NEW INDESIGN FILE // 		// // // // // // // // // // // // // 		pal.main.btns.nuf.onClick = function (){		x_data.doc = setupDoc();		doc = x_data.doc;		}			// // // // // // // // // // // // // // // // 	//  THIS PROCESSES THE LIST DATA TO INDESIGN // 	// GO ON IN FILE importer.jsx                //  	// // // // // // // // // // // // // // // // 	pal.main.btns.pr.onClick = function (){		var list = build_list(pal.main.list,true);	//alert(x_data.xml);		importer(x_data.doc,x_data.xmlRef,list);	}		pal.main.btns.cs.onClick = clear_structure;	pal.main.btns.c.onClick = function (){		pal.close();	}		pal.main.btns.k.onClick = function(){	//	alert("klicked");			var sel = pal.main.list.selection;			// written by fabiantheblind for indesign cs4			// how to include a quote script into the alert			// the script "homerQuote.js" has to be next to this script			//#include "homerQuote.js";			// 157 is the lenght of a quote array			sel.enabled = false;									if(sel.length >1){				alert("Isn't it enough to kill one item at the time?\nplease think about the children.");			}else{			var num = Math.floor(157*Math.random());			alert(hjsQuote(num));			pal.main.list.remove(pal.main.list.selection[0].index);						}	}			/*			pal.main.btns.k.onClick = function (){		alert(klicked);				var sel = pal.main.list.selection;		// written by fabiantheblind for indesign cs4		// how to include a quote script into the alert		// the script "homerQuote.js" has to be next to this script		//#include "homerQuote.js";		// 157 is the lenght of a quote array		if(sel.length >1){			alert("Isn't it enough to kill one item at the time?\nplease think about the children.");		}else{			var num = Math.floor(157*Math.random());			alert(hjsQuote(num));			pal.main.list.remove(sel.index);			}		//sel.enabled = false;							}		*/		// // // // // // // // 	// END PROCESS GROUP // 	// // // // // // // // 		set_font(pal,x_data.font);	return pal;	} // end panel}// // // // // // // // // // // // // // // // // // // // // //  SET FONT TAKEN FROM Peter Kahrels ScriptUI for Dummies  // // http://www.kahrel.plus.com/indesign/scriptui.html		// // // // // // // // // // // // // // // // // // // // // // function set_font (control, font) {	for (var m = 0; m < control.children.length; m++) {		if ("GroupPanel".indexOf (control.children[m].constructor.name) > -1){		set_font (control.children[m], font);		}else{		control.children[m].graphics.font = font;		}	}}// // // // // // // // // // // // // // // // // // // // // // // // // // this builds the list of titels fort placing the textcontents//params// list is the ListBox Object// process is a booolean it determines if the icons should be changed// // // // // // // // // // // // // // // // // // // // // // // // // function build_list(list,process){	var result = new Array();		var count = 0;	for(var r = 0; r < list.items.length; r++){					if(list.items[r].checked == true){									result[count] = list.items[r].subItems[0].text;					// if the list gets prcessed					if(process == true){												if(list.items[r].image.name.match(x_data.greenfile.name)){							// if the item is already green							// insert the alertIcon							list.items[r].image = x_data.alertIcofile;													}else if( ( list.items[r].image.name.match(x_data.redfile.name) ) || 					( list.items[r].image.name.match(x_data.whitefile.name) ) ){							// if it is white or red							// insert the green icon							list.items[r].image = x_data.greenfile;						}					list.items[r].checked = false;					}										count++;			}else if(list.items[r].checked == false){								if(process == true){										if( list.items[r].image.name.match(x_data.whitefile.name) ){						list.items[r].image = x_data.redfile;					}				}			}		}// close for loop	x_data.list = result;	//alert(result);	return result;	}			// // // // // // // // // // // // // // // // // 		// taken from Zorro the layer tagger		// 	// http://aescripts.com/zorro-the-layer-tagger/ //	// this function draws the help window		// 	// // // // // // // // // // // // // // // // // 	function helpWindow (){			this.windowRef = null;		}		helpWindow.prototype.run = function()		{			var win = new Window("palette", x_data.scriptName ,[100,0,600,600]);  // bounds = [left, top, right, bottom]			this.windowRef = win;			win.btnPanel = win.add("group", [10,10,600,600]);			win.btnPanel.text = win.btnPanel.add("statictext", [10,10,400,25], x_data.strHelpHeader);			win.btnPanel.warnBtn = win.btnPanel.add("edittext", [10,30,470,540], x_data.strHelpText, {multiline:true});			win.btnPanel.tmnBtn = win.btnPanel.add("button", [310, 550,470, 580], x_data.str3xwtmn);			win.btnPanel.tmnBtn.onClick = function() {				openURL(x_data.str_tmn_SUrl);							};			set_font(win,x_data.font);			// Display the window			win.center();			win.show();			return true;				}	// // // // // // // // // // // // // // this functions is taken from// Ease and Wizz 2.0.1// Ian Haigh 2010// http://aescripts.com/ease-and-wizz/// // // // // // // // // // // // // function getPathToMeta(){ 	var folderObj = new Folder((new File($.fileName)).path + "/" + x_data.metaFolder);	return folderObj;} // // // // // // // // // // // // // // // this functions is taken from// Ease and Wizz 2.0.1// Ian Haigh 2010// http://aescripts.com/ease-and-wizz/// // // // // // // // // // // // // // 	// // // // // // // // // // // 	// This reads in the Help.text// 	// // // // // // // // // // // 	//	//function readFile(filename){ 	var meta_folder = getPathToMeta();	var file_handle   = new File(meta_folder.fsName + '/' + filename);	if (!file_handle.exists) {		throw("I can't find this file: " + filename + ". \n\nI looked in here:" + meta_folder.fsName + " ");		return;	}	try 	{		file_handle.open('r');		var the_code = file_handle.read();	}	catch(e) 	{		throw("I couldn't read the easing equation file: " + e);		return;	}	finally	{		file_handle.close();	}	return(the_code);} // Help Text End	// // // // // // // // // // // // // // // // // 	// This swaps the lines.	// taken from Peter Kahrels Script Ui for Dummies	//  http://www.kahrel.plus.com/indesign/scriptui.html	// thnx	//	// This Swaps the listitems	// // // // // // // // // // // // // // // // // function swap (x, x_0, y, y_0) {		var buff1 = x.checked;	var buff2 = y.checked;		var buffIco1 = x.image;	var buffIco2 = y.image;	var temp = x.text;	var temp_0 = x_0.text;		x.text = y.text;	x_0.text = y_0.text;	x.checked = buff2;	x.image = buffIco2;		y.text = temp;	y_0.text = temp_0;	y.checked = buff1;	y.image = buffIco1;}	// // // // // // // // // // // // // // // // 	// This function open a URL in a browser - 	// seemas to work only in AE	// Copyright (c) 2006-2007 redefinery (Jeffrey R. Almasol). All rights reserved.	// http://www.redefinery.com/blog/	// // // // // // // // // // // // // // // // // // // // // // // // // // // function openURL(url){		if ($.os.indexOf("Windows") != -1){			system.callSystem("cmd /c \""+x_data.winBrowserCmd + "\" " + url);		} else {			system.callSystem(x_data.macBrowserCmdStart + url + x_data.macBrowserCmdEnd);		}	}						// this is unused		// could do a on press eventfunction do_Something(palObj){		app.documents.add();	}	// // // // // // // // // // // // // // // // // // // // // // 	// Utility function so only files with a XML extension can	// be loaded when this script runs on a mac	// taken from SnpXMLTreeView.jsx from the ExtendScript SDK 	// // // // // // // // // // // // // // // // // // // // // // function checkMacFileType(file){		if(!file instanceof Folder){			return true;		}				index = file.name.lastIndexOf(".");		ext = file.name.substring(index + 1);				if(ext == "xml" || ext == "XML"){		return true;		}		return false;	}		  // again taken from the others// this you  can find in lots of scripts at http://aescripts.com		// main code:		// the Prerequisites check is for After Effects		// so this panel can be adepted to AE		// Prerequisites check// if (parseFloat(app.version) < 8.0){// 	alert(x_localize(x_data.strMinAE80), x_data.scriptName);// } else {	var tmn_Pal = x_buildUI(thisObj);		if (tmn_Pal != null){		// here would be a good place for a startup action			if (tmn_Pal instanceof Window){				// Show the palette				tmn_Pal.center();				tmn_Pal.show();			} else{				tmn_Pal.layout.layout(true);			}				} // close}// this calls the panel// dont need this here. This panel is called in RUN.jsx//basic_panel(this);// close all}