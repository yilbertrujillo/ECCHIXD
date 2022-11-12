gdjs.introCode = {};
gdjs.introCode.GDfondointObjects1= [];
gdjs.introCode.GDfondointObjects2= [];
gdjs.introCode.GDlogoObjects1= [];
gdjs.introCode.GDlogoObjects2= [];

gdjs.introCode.conditionTrue_0 = {val:false};
gdjs.introCode.condition0IsTrue_0 = {val:false};
gdjs.introCode.condition1IsTrue_0 = {val:false};


gdjs.introCode.asyncCallback7682668 = function (runtimeScene, asyncObjectsList) {
}
gdjs.introCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.introCode.asyncCallback7682668(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.introCode.asyncCallback7459860 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "home", false);
}}
gdjs.introCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.introCode.asyncCallback7459860(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.introCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.introCode.GDlogoObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "musica\\t624_s-song.wav", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), true, 10, 1);
}{for(var i = 0, len = gdjs.introCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.introCode.GDlogoObjects1[i].setOpacity(0);
}
}
{ //Subevents
gdjs.introCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.introCode.condition0IsTrue_0.val = false;
{
gdjs.introCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.introCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1))));
}}

}


{


gdjs.introCode.condition0IsTrue_0.val = false;
{
gdjs.introCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)))) >= 1;
}if (gdjs.introCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1))));
}}

}


{


gdjs.introCode.condition0IsTrue_0.val = false;
{
gdjs.introCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) >= 5;
}if (gdjs.introCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.introCode.GDlogoObjects1);
{for(var i = 0, len = gdjs.introCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.introCode.GDlogoObjects1[i].setOpacity(10);
}
}}

}


{


gdjs.introCode.condition0IsTrue_0.val = false;
{
gdjs.introCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) >= 7;
}if (gdjs.introCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.introCode.GDlogoObjects1);
{for(var i = 0, len = gdjs.introCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.introCode.GDlogoObjects1[i].setOpacity(15);
}
}}

}


{


gdjs.introCode.condition0IsTrue_0.val = false;
{
gdjs.introCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) >= 8;
}if (gdjs.introCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.introCode.GDlogoObjects1);
{for(var i = 0, len = gdjs.introCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.introCode.GDlogoObjects1[i].setOpacity(gdjs.introCode.GDlogoObjects1[i].getOpacity() + (15));
}
}}

}


{


gdjs.introCode.condition0IsTrue_0.val = false;
{
gdjs.introCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) >= 9;
}if (gdjs.introCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.introCode.GDlogoObjects1);
{for(var i = 0, len = gdjs.introCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.introCode.GDlogoObjects1[i].setOpacity(gdjs.introCode.GDlogoObjects1[i].getOpacity() + (20));
}
}}

}


{


gdjs.introCode.condition0IsTrue_0.val = false;
{
gdjs.introCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) >= 10;
}if (gdjs.introCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.introCode.GDlogoObjects1);
{for(var i = 0, len = gdjs.introCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.introCode.GDlogoObjects1[i].setOpacity(gdjs.introCode.GDlogoObjects1[i].getOpacity() + (50));
}
}}

}


{


gdjs.introCode.condition0IsTrue_0.val = false;
{
gdjs.introCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) >= 11;
}if (gdjs.introCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.introCode.GDlogoObjects1);
{for(var i = 0, len = gdjs.introCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.introCode.GDlogoObjects1[i].setOpacity(gdjs.introCode.GDlogoObjects1[i].getOpacity() - (50));
}
}}

}


{


gdjs.introCode.condition0IsTrue_0.val = false;
{
gdjs.introCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) >= 12;
}if (gdjs.introCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.introCode.GDlogoObjects1);
{for(var i = 0, len = gdjs.introCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.introCode.GDlogoObjects1[i].setOpacity(gdjs.introCode.GDlogoObjects1[i].getOpacity() - (25));
}
}}

}


{


gdjs.introCode.condition0IsTrue_0.val = false;
{
gdjs.introCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) >= 13;
}if (gdjs.introCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.introCode.GDlogoObjects1);
{for(var i = 0, len = gdjs.introCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.introCode.GDlogoObjects1[i].setOpacity(gdjs.introCode.GDlogoObjects1[i].getOpacity() - (25));
}
}}

}


{


gdjs.introCode.condition0IsTrue_0.val = false;
{
gdjs.introCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) >= 15;
}if (gdjs.introCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1))));
}
{ //Subevents
gdjs.introCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.introCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.introCode.GDfondointObjects1.length = 0;
gdjs.introCode.GDfondointObjects2.length = 0;
gdjs.introCode.GDlogoObjects1.length = 0;
gdjs.introCode.GDlogoObjects2.length = 0;

gdjs.introCode.eventsList2(runtimeScene);

return;

}

gdjs['introCode'] = gdjs.introCode;
