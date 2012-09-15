// Created by iWeb 2.0.4 local-build-20120131

function createMediaStream_id2()
{return IWCreatePhotocast("http://www.rso.cornell.edu/foodforthought/Site/Pictures/Pages/Love_the_World_2009_files/rss.xml",true,true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://www.rso.cornell.edu/foodforthought/Site/Pictures/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://www.rso.cornell.edu/foodforthought/Site/Pictures/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(4,new IWSize(145,145),new IWSize(145,0),new IWSize(172,160),27,27,0,new IWSize(3,3)),new IWPhotoFrame([IWCreateImage('Love_the_World_2009_files/comic-1_01.png'),IWCreateImage('Love_the_World_2009_files/comic-1_02.png'),IWCreateImage('Love_the_World_2009_files/comic-1_03.png'),IWCreateImage('Love_the_World_2009_files/comic-1_06.png'),IWCreateImage('Love_the_World_2009_files/comic-1_09.png'),IWCreateImage('Love_the_World_2009_files/comic-1_08.png'),IWCreateImage('Love_the_World_2009_files/comic-1_07.png'),IWCreateImage('Love_the_World_2009_files/comic-1_04.png')],null,0,0.535714,4.000000,4.000000,1.000000,1.000000,5.000000,5.000000,6.000000,6.000000,71.000000,115.000000,71.000000,115.000000,null,null,null,0.500000),imageStream,range,null,null,1.000000,{backgroundColor:'#000000',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,35),url:'Love_the_World_2009_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Love_the_World_2009_files/stroke_1.png'},{rect:new IWRect(1,-1,49,2),url:'Love_the_World_2009_files/stroke_2.png'},{rect:new IWRect(50,-1,2,2),url:'Love_the_World_2009_files/stroke_3.png'},{rect:new IWRect(50,1,2,35),url:'Love_the_World_2009_files/stroke_4.png'},{rect:new IWRect(50,36,2,3),url:'Love_the_World_2009_files/stroke_5.png'},{rect:new IWRect(1,36,49,3),url:'Love_the_World_2009_files/stroke_6.png'},{rect:new IWRect(-1,36,2,3),url:'Love_the_World_2009_files/stroke_7.png'}],new IWSize(51,38))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','../../Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('Love_the_World_2009_files/Love_the_World_2009Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
