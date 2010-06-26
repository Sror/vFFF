/**
 * @author fabianmoronzirfas
 */
#include "vFFF_makeParStyles_v0_02.js";
#include "vFFF_makeCharStyles_v0_02.js";
#include "vFFF_makeColors_v0_01.js";
function setupDoc() {
	//create a new Document
	var myDocument = app.documents.add()
	with (myDocument.documentPreferences) {
		pageWidth = "120mm";
		pageHeight = "180mm";
		//BleedBox settings
		documentBleedBottomOffset = "3mm";
		documentBleedTopOffset = "3mm";
		documentBleedInsideOrLeftOffset = "3mm";
		documentBleedOutsideOrRightOffset = "3mm";
	}
		with (myDocument.viewPreferences) {
		pageWidth = "120mm";
		pageHeight = "180mm";
		horizontalMeasurementUnits = MeasurementUnits.MILLIMETERS;
		verticalMeasurementUnits = MeasurementUnits.MILLIMETERS;
		rulerOrigin = RulerOrigin.pageOrigin;
		
	}
		with (myDocument.gridPreferences) {
			//setup the masterGrid
			baselineDivision = "11.936Pt";
			baselineStart = "23.3mm";
			baselineGridShown = true;
		}
//	var myPage = myDocument.pages.add();
	var myFontReg = app.fonts.item("Skolar	Regular");
	var myFontBold = app.fonts.item("Skolar	Bold");

	var myFontItal = app.fonts.item("Skolar	Italic");
	var myFontSemiBold = app.fonts.item("Skolar	SemiBold");
	var myFontSemiBoldItal = app.fonts.item("Skolar	SemiBold Italic");
	makeColors(myDocument);
	makeParStyles_v02(myDocument,myFontReg,myFontItal,myFontSemiBold);
	makeCharStyles_v02(myDocument,myFontReg,myFontBold, myFontItal, myFontSemiBold, myFontSemiBoldItal);
	
		//setup margins and columns for the first masterpage
		var myFirstMasterSpread = myDocument.masterSpreads.item(0)
		with(myFirstMasterSpread.pages.item(0).marginPreferences){
				left = "15mm";
				top = "20.817mm";
				right = "22mm";
				bottom = "34.688mm";
				columnCount = 1;
				columnGutter = "4mm";
		}
		
		var myWidth = myDocument.documentPreferences.pageWidth;
		var myHeight = myDocument.documentPreferences.pageHeight;
		var y1 = myHeight - myFirstMasterSpread.pages.item(0).marginPreferences.bottom;//myFirstMasterSpread.pages.item(0).marginPreferences.top;
		var x1 = myFirstMasterSpread.pages.item(0).marginPreferences.right;
		var y2 = myHeight - myFirstMasterSpread.pages.item(0).marginPreferences.bottom + 10;
		var x2 = myWidth - myFirstMasterSpread.pages.item(0).marginPreferences.left;

		var myLeftFooter = myFirstMasterSpread.pages.item(0).textFrames.add({geometricBounds:[y1,x1,y2,x2]})
    	with (myLeftFooter.parentStory.insertionPoints.item(0)) {
                contents = SpecialCharacters.sectionMarker;
                contents = SpecialCharacters.emSpace;
                contents = SpecialCharacters.autoPageNumber;
        }	
		myLeftFooter.paragraphs.everyItem().appliedParagraphStyle = myDocument.paragraphStyles.item("Pagina");

		var myFirstRightMS = myFirstMasterSpread.pages.item(1)
		with(myFirstRightMS.marginPreferences){
				left = "15mm";
				top = "20.817mm";
				right = "22mm";
				bottom = "34.688mm";
				columnCount = 1;
				columnGutter = "4mm";
		}
		 y1 = myHeight - myFirstMasterSpread.pages.item(0).marginPreferences.bottom;//myFirstMasterSpread.pages.item(0).marginPreferences.top;
		 x1 = myFirstMasterSpread.pages.item(0).marginPreferences.left;
		 y2 = myHeight - myFirstMasterSpread.pages.item(0).marginPreferences.bottom + 10;
		 x2 = myWidth - myFirstMasterSpread.pages.item(0).marginPreferences.right;
		
		var myRightFooter = myFirstMasterSpread.pages.item(1).textFrames.add({geometricBounds:[y1,x1,y2,x2]})
    	with (myRightFooter.parentStory.insertionPoints.item(0)) {
                contents = SpecialCharacters.sectionMarker;
                contents = SpecialCharacters.emSpace;
                contents = SpecialCharacters.autoPageNumber;
        }
		myRightFooter.paragraphs.everyItem().appliedParagraphStyle = myDocument.paragraphStyles.item("Pagina");

		var mySecondMasterSpread = myDocument.masterSpreads.add()//myDocument.masterSpreads.item(1);
				with(mySecondMasterSpread.pages.item(0).marginPreferences){
				left = "15mm";
				top = "20.817mm";
				right = "22mm";
				bottom = "34.688mm";
				columnCount = 1;
				columnGutter = "4mm";
				}
				with(mySecondMasterSpread.pages.item(1).marginPreferences){
				left = "15mm";
				top = "20.817mm";
				right = "22mm";
				bottom = "34.688mm";
				columnCount = 1;
				columnGutter = "4mm";
		
				}
			return myDocument;

		}
		