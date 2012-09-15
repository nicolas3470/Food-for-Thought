// Created by iWeb 2.0.4 local-build-20120131

function createMediaStream_id2()
{return IWCreateMediaCollection("http://www.rso.cornell.edu/foodforthought/Site/Pictures/Pictures_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://www.rso.cornell.edu/foodforthought/Site/Pictures',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget7'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://www.rso.cornell.edu/foodforthought/Site/Pictures',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(2,new IWSize(287,215),new IWSize(287,40),new IWSize(344,270),27,27,0,new IWSize(108,95)),new IWPhotoFrame([IWCreateImage('Pictures_files/spiralbook-creme_ul.png'),IWCreateImage('Pictures_files/spiralbook-creme_top.png'),IWCreateImage('Pictures_files/spiralbook-creme_ur.png'),IWCreateImage('Pictures_files/spiralbook-creme_right.png'),IWCreateImage('Pictures_files/spiralbook-creme_lr.png'),IWCreateImage('Pictures_files/spiralbook-creme_bottom.png'),IWCreateImage('Pictures_files/spiralbook-creme_ll.png'),IWCreateImage('Pictures_files/spiralbook-creme_left.png')],null,1,1.000000,15.000000,0.000000,0.000000,0.000000,83.000000,40.000000,40.000000,55.000000,106.000000,40.000000,40.000000,32.000000,null,null,null,0.300000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget7',null,'widget8',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,35),url:'Pictures_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Pictures_files/stroke_1.png'},{rect:new IWRect(1,-1,49,2),url:'Pictures_files/stroke_2.png'},{rect:new IWRect(50,-1,2,2),url:'Pictures_files/stroke_3.png'},{rect:new IWRect(50,1,2,35),url:'Pictures_files/stroke_4.png'},{rect:new IWRect(50,36,2,3),url:'Pictures_files/stroke_5.png'},{rect:new IWRect(1,36,49,3),url:'Pictures_files/stroke_6.png'},{rect:new IWRect(-1,36,2,3),url:'Pictures_files/stroke_7.png'}],new IWSize(51,38)),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','../Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('Pictures_files/PicturesMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
Widget.onload();fixAllIEPNGs('../Media/transparent.gif');fixupAllIEPNGBGs();applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
