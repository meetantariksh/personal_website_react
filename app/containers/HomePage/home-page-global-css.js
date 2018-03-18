import React from 'react';
import styled from 'styled-components';

const HomePageStyleWrapper = styled.section`
  body{
	margin:0;
	padding:0;
}
#Choco_overlay{
    background: #0a0a0a !important;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	width: 100%;
	height: 100%;
	display:none;
	padding:0;
	margin:0;
}
#Choco_content{
	display:none;
	width:800px;
	height:600px;
	z-index:1001;
	position:fixed;
	left:50%;
	top:50%;
	margin-left:-400px;
	margin-top:-300px;
	border-top:1px solid transparent;/*Yes, adjust image perfectly at the center of a box, don't know why.*/
}
#Choco_left_arrow{
	float:left;
	background-image:url(../../images/homePage/left.png)!important;
	background-position:12%;
	left:-20%;
}
#Choco_right_arrow{
	float:right;
	background-image:url(../../images/homePage/right.png)!important;
	background-position:88%;
	left:20%;
}
.Choco_arrows{
	background-repeat:no-repeat;
	display:none;
	position:relative;
	cursor:pointer;
	width:49%;
	top:-100%;
	height:100%;
	margin-top:-30px;
}
#Choco_container_photo{
	text-align:center;
	width:800px;
	height:600px;
	/*background:url(../../images/homePage/ajax-loader.gif) center center no-repeat;*/
}
#Choco_container_description{
	padding:0;
	height:26px;
	width:100%;
	color:#FFFFFF;
	font-family:Tahoma;
	clear:both;
	position:relative;
	font-size:12px;
	margin-top:-5px;
	overflow:hidden;
	visibility:hidden;
}
#Choco_container_title{
	float:left;
	padding:5px;
}
#Choco_container_via{
	padding:5px;
	float:right;
}
#Choco_container_via a{
	color:gray;
}
#Choco_container_via a:hover{
	color:white;
	background:gray;
}
#Choco_close{
	width:32px;
	height:32px;
	background-image:url(../../images/homePage/close.png)!important;
	background-repeat:no-repeat;
	z-index:1002;
	cursor:pointer;
	margin: 0px 0px 15px 0px;
	display:none;
}
#Choco_loading{
	width:9px;
	height:11px;
	background-image:url(../../images/homePage/loading.gif);
	background-repeat:no-repeat;
	z-index:1002;
	cursor:pointer;
	float:right;
	margin-top:-20px;
	display:none;
}
#Choco_bigImage{
	display:none;
	position:relative;
	width:100%;
	height:100%;
	margin-top:-5px;
}



body {
    margin: 0;
    background: #fff;
    font-family: 'Barlow Condensed', sans-serif;
}

body a,
.agile_form input[type="submit"] {
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
    -ms-transition: 0.5s all;
    transition: 0.5s all;
    text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    font-family: 'Barlow Condensed', sans-serif;
}

p {
    margin: 0;
    line-height: 1.8;
    font-size: 1.2em;
    color: #000;
    letter-spacing: 1px;
}

ul,
label {
    margin: 0;
    padding: 0;
}

li {
    list-style-type: none;
}

body a:hover,
body a:focus {
    text-decoration: none;
    outline: none;
}

.header-agileinfo {
    z-index: 10;
}

.header-agileinfo {
    background: url(../../images/homePage/bg.jpg) no-repeat center;
    background-size: cover;
    min-height: 730px;
}

.header-banner {
    background-color: rgba(4, 68, 134, 0.3);
}

.header-left {
    float: left;
    padding-top: 2em;
}

.header-right {
    float: right;
    padding-top: 2em;
}

.fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}

nav {
    width: 100%;
    height: 60px;
    background: #292f36;
    z-index: 10;
}

nav ul {
    list-style-type: none;
    text-align: center;
}

nav ul li {
    display: inline-block;
    line-height: 60px;
    width: 13%;
    text-align: center;
}

nav ul li a {
    text-decoration: none;
    color: #fff;
    font-size: 1.4em;
    text-transform: capitalize;
    letter-spacing: 1px;
    padding: 10px 50px;
}

nav ul li a:hover {
    color: #000;
}

nav ul li:nth-child(1) {
    background: #eb5273;
}

nav ul li:nth-child(2) {
    background: #00b9ef;
}

nav ul li:nth-child(3) {
    background: #fc7e46;
}

nav ul li:nth-child(4) {
    background: #4ddba6;
}

nav ul li:nth-child(5) {
    background: #00b9ef;
}

nav ul li:nth-child(6) {
    background: #eb5273;
}

.navbar-default {
    background-color: #fff;
    border: none;
}

.header-right p {
    display: inline;
    letter-spacing: 2px;
    color: #fff;
}

.header-bottom {
    padding: 3em 0 0;
}

h1.main-title a {
    font-size: 2em;
    color: #140c8e;
    padding: 0px 12px 6px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgba(216, 216, 216, 0.79);
    font-weight: 800;
}

span.icon {
    color: #fff;
    margin-right: 0.5em;
    font-size: 1.2em;
}

.header-left a {
    font-size: 1em;
    color: #fff;
    letter-spacing: 2px;
}


/*-- banner --*/

.banner-text {
    text-align: center;
    width: 63%;
    margin: 11.9em auto;
    padding: 2em 0;
    background: rgba(0, 0, 0, 0.16);
    outline: 6px solid rgba(255, 255, 255, 0.03);
}

.banner-text h3 {
    color: #fff;
    font-size: 6em;
    margin: 0.1em 0 0.3em;
    text-transform: capitalize;
}

.banner-slide {
    width: 48%;
    margin: 0 auto;
}

.banner-text h4 {
    text-transform: capitalize;
    font-size: 3em;
    color: #fff;
    letter-spacing: 6px;
    font-weight: 300;
}

h2.bnrtext {
    color: #fff;
    font-size: 3em;
    float: left;
    height: 50px;
    font: 300 40px/50px 'Barlow Condensed';
    width: 100px;
}

b {
    float: left;
    overflow: hidden;
    position: relative;
    height: 50px;
}

span.span1 {
    display: inline-block;
    width: 240px;
    color: #fff;
    position: relative;
    white-space: nowrap;
    text-transform: uppercase;
    font: normal 40px/50px Barlow Condensed, sans-serif;
    font-weight: 600;
    top: 0;
    left: 0;
    -webkit-animation: move 5s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-delay: 1s;
}

@keyframes move {
    0% {
        top: 0px;
    }
    20% {
        top: -50px;
    }
    40% {
        top: -100px;
    }
    60% {
        top: -150px;
    }
    80% {
        top: -200px;
    }
}


/*-- banner-text --*/

.banner-text h1 {
    font-size: 3.5em;
    line-height: 1.5em;
    display: inline-block;
    border: solid #7ecaf6;
    border-width: 4px;
    color: rgb(255, 255, 255);
    background: #567182;
    padding: 0 1em;
    letter-spacing: 1px;
    font-weight: 800;
    text-transform: uppercase;
}

.banner-text h1 a {
    color: #fff;
}


/*-- //banner --*/

.section-w3layouts {
    padding: 4em 0;
}

.main-pos {
    position: relative;
}


/* about */

h3.pos-title {
    position: absolute;
    top: 44%;
    left: -2%;
    font-size: 6.5em;
    display: inline-block;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 1.5em;
    color: rgba(216, 216, 216, 0.47);
    -ms-transform: rotate(270deg);
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
}

h3.pos-title1 {
    position: absolute;
    top: 9%;
    left: 39.5%;
    font-size: 6.5em;
    display: inline-block;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 1.5em;
    color: rgba(216, 216, 216, 0.47);
}

.sec-title {
    font-size: 4em;
    text-transform: uppercase;
    margin-bottom: 0.5em;
    color: #eb5273;
    text-align: center;
    font-weight: 300;
}

ul.about-list li {
    display: inline-block;
    margin: 0 9px;
    width: 18%;
}

a.wthree-.about-link {
    color: #fff;
    border: 1px solid #eb5273;
    background: #eb5273;
    border-radius: 0;
    width: 100%;
    padding: 10px 20px;
    outline: none;
    font-size: 1em;
    margin: 4% auto 0;
    font-weight: 600;
    letter-spacing: 4px;
    display: inline-block;
    text-transform: uppercase;
}

.main-about-grid p {
    width: 70%;
    margin: 2em auto;
}

.ab1 {
    padding: 2em;
    -webkit-box-shadow: 5px 10px 10px 0px rgba(216, 216, 216, 0.78);
    -moz-box-shadow: 5px 10px 10px 0px rgba(216, 216, 216, 0.78);
    box-shadow: 5px 10px 10px 0px rgba(216, 216, 216, 0.78);
    border-top: 5px solid;
}

.ab1 span {
    color: #4ddba6;
    font-size: 2em;
}

.main-about-grid1 {
    border-top: 8px solid #4ddba6;
}

.main-about-grid2 {
    border-top: 8px solid #fc7e46;
}

.main-about-grid2 span.fa,
.main-about-grid2.ab1 h5 {
    color: #fc7e46;
}

.main-about-grid3 {
    border-top: 8px solid #00b9ef;
}

.main-about-grid3 span.fa,
.main-about-grid3.ab1 h5 {
    color: #00b9ef;
}


/* //about */


/* about-bottom */

.about-btm-w3_agileits {
    padding-top: 4em;
}

h4.aboutbtm-head {
    color: #000;
    text-transform: capitalize;
    font-weight: 300;
    margin: 0.2em 0 0.5em;
    font-size: 2.8em;
}

.ab1 h5 {
    color: #4ddba6;
    font-size: 1.4em;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 600;
    margin: 1em 0 0.2em;
}


/* //about-bottom */


/*-- portfolio --*/

.port-head {
    text-align: center;
}

figure.port-gird {
    margin: 0;
    padding: 0;
    position: relative;
    display: block;
    cursor: pointer;
    overflow: hidden;
}

figure.port-gird:hover figcaption.port-gird-caption-agileits_w3layouts {
    -ms-filter: alpha(Opacity=100);
    filter: alpha(opacity=100);
    opacity: 1;
    top: 130px;
}

figcaption.port-gird-caption-agileits_w3layouts {
    -ms-filter: alpha(Opacity=0);
    filter: alpha(opacity=0);
    opacity: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 100%;
    color: #fff;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -o-transition: all .5s ease;
    -ms-transition: all .5s ease;
    transition: all .5s ease;
    text-align: center;
}

figcaption.port-gird-caption-agileits_w3layouts h3 {
    font-weight: 400;
    font-size: 1.8em;
    color: #fff;
    text-transform: uppercase;
    padding: 30px 0px;
    margin-bottom: 0;
    background: #111;
    position: relative;
    margin-top: 70px;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    -ms-transition: all .5s;
    transition: all .5s;
    -webkit-transition-delay: 1s;
    -moz-transition-delay: 1s;
    -o-transition-delay: 1s;
    -ms-transition-delay: 1s;
    transition-delay: 1s;
}

figcaption.port-gird-caption-agileits_w3layouts p {
    padding: 10px 0px;
    margin-bottom: 0;
    position: relative;
    left: 100%;
    font-size: 0.85em;
    line-height: 2em;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    -ms-transition: all .5s;
    transition: all .5s;
    -webkit-transition-delay: 1.3s;
    -moz-transition-delay: 1.3s;
    -o-transition-delay: 1.3s;
    -ms-transition-delay: 1.3s;
    transition-delay: 1.3s;
}

figure.port-gird:hover h3,
figure.port-gird:hover p {
    bottom: 0;
}

figcaption.port-gird-caption-agileits_w3layouts a {
    color: #fff;
    border: 2px solid #fff;
    padding: 4px 0px;
    text-decoration: none;
}

figcaption.port-gird-caption-agileits_w3layouts:hover {
    color: #4f5856;
}

.gallery {
    padding: 6em 0;
}

.ga-top {
    margin-bottom: 3em;
}

.filtr-item {
    width: 24.8%;
}

.filtr-item {
    border: solid #9bbdd8;
    border-width: 10px 0px 0px 10px;
}

.filtr-item:nth-child(5),
.filtr-item:nth-child(6),
.filtr-item:nth-child(7),
.filtr-item:nth-child(8) {
    border-bottom: 12px solid #9bbdd8;
}

.filtr-item:nth-child(4),
.filtr-item:nth-child(8) {
    border-right: 11px solid #9bbdd8;
    width: 25.55%;
}

.filtr-container {
    width: 100%;
}

.item-desc {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    position: absolute;
    text-transform: uppercase;
    text-align: center;
    z-index: 1;
}


/* Filter controls */

.simplefilter li,
.multifilter li,
.sortandshuffle li {
    color: #000;
    cursor: pointer;
    display: inline-block;
    padding: 10px 20px;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 1px;
    margin: 0 12px;
    text-transform: uppercase;
    border: none;
    background: none;
    border-bottom: 5px solid #fff;
}

.simplefilter li {
    border: none;
    background: none;
    position: relative;
    border: 1px solid #d4d4d4;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -ms-transition: 0.5s all;
    -o-transition: 0.5s all;
    letter-spacing: 2px;
}

.simplefilter li:before {
    content: '';
    position: absolute;
    top: 19px;
    background: #fff;
    height: 1px;
    width: 10px;
    right: -12px;
    -webkit-transition: .5s all;
    -moz-transition: .5s all;
    transition: .5s all;
}

.simplefilter li:last-child:before {
    content: '';
    position: absolute;
    top: 19px;
    background: #fff;
    height: 1px;
    width: 10px;
    right: -12px;
    -webkit-transition: .5s all;
    -moz-transition: .5s all;
    transition: .5s all;
}

.simplefilter li.active,
.simplefilter li:hover {
    background: #eb5273;
    border: 1px solid #eb5273;
    color: #fff;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -ms-transition: 0.5s all;
    -o-transition: 0.5s all;
}


/* Shuffle and sort controls */

select {
    padding: 1rem 1rem;
    text-transform: uppercase;
}

.sortandshuffle .shuffle-btn {
    background-color: #dec800;
}

.sortandshuffle .sort-btn {
    background-color: #de0000;
}

.sortandshuffle .sort-btn.active {
    background-color: #9d0000;
}


/*----*/

.filtr-item {
    transform: scale(1) translate3d(0px, 0px, 0px);
    -o-transform: scale(1) translate3d(0px, 0px, 0px);
    transition: all 0.5s ease-out 0ms;
    -o-transition: all 0.5s ease-out 0ms;
    transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
}


/*----*/

ul.simplefilter {
    text-align: center;
    margin: 4em 0;
}


/* //portfolio */


/*-- blog --*/

h3.pos-title.postitle4 {
    top: 8%;
    left: 35%;
    transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
}

h3.w3l-head.text-center {
    color: #1793d1;
    text-transform: uppercase;
    margin-bottom: 1.5em;
    font-size: 2em;
}

.blog-sec-w3_agile.b1 {
    margin-top: 6em;
}

.b3 {
    margin-top: 2em;
}

.blog-top {
    background: url(../../images/homePage/b1.jpg) no-repeat center;
    background-size: cover;
    min-height: 240px;
}

.blog-top2 {
    background: url(../../images/homePage/b2.jpg) no-repeat center;
    background-size: cover;
    min-height: 240px;
}

li {
    list-style-type: none;
}

.post-info ul {
    padding: 0 0 3em;
}

li.blog-icon-left,
li.blog-icon-left a {
    font-size: 1em;
    color: #fff;
    letter-spacing: 1px;
}

.blog-icon-left {
    float: left;
}

.blog-icon-right {
    float: right;
    color: #ebebeb;
}

.blog-icon-right span.fa-heart {
    margin: 0 1em;
    color: #fff;
}

.blog-bottom {
    background: #eb5273;
    padding: 2em;
}

.post-info h5,
.post-info h4 {
    font-size: 1.5em;
    display: inline;
    text-transform: uppercase;
    padding: 1em 0;
    letter-spacing: 1px;
    font-weight: 300;
    color: #fff;
}

.post-info h5 {
    font-weight: bold;
    color: #fff;
}

.post-info p {
    margin: 1em 0 1.35em;
    color: #fff;
}

.blog-sec-w3_agile.blog-button {
    margin: 0em 0 0em 0;
    display: inline-block;
}

li.blog-icon-right i {
    color: #fff;
    font-size: 1em;
}

span.blog-share {
    color: #fff;
    font-size: 1.2em;
    margin: 0 1em 0 0;
}

.blog-img {
    padding: 0;
}

.bb4 {
    background: #fc7e46;
}

.blog-sec-w3_agile.blog-button a {
    color: #fff;
    font-size: 1.1em;
    letter-spacing: 2px;
}


/*-- //blog --*/


/* Features */

div#services {
    padding-bottom: 7em;
}

.features h3.heading {
    text-align: center;
    font-size: 35px;
    text-transform: uppercase;
    color: #000;
    margin-bottom: 60px;
}

.services-right-w3ls h5 {
    color: #00b9ef;
    font-size: 2.5em;
    font-weight: 300;
    margin-bottom: 0.5em;
}

.services-left {
    margin-top: 4em;
}

.services-right-w3ls {
    padding: 2em 2em;
    margin-top: 3em;
    margin-left: 6em;
    -webkit-box-shadow: 5px 10px 10px 0px rgba(216, 216, 216, 0.78);
    -moz-box-shadow: 5px 10px 10px 0px rgba(216, 216, 216, 0.78);
    box-shadow: 5px 10px 10px 0px rgba(216, 216, 216, 0.78);
}

.serv-left {
    border: 2px dashed #d0d0d0;
    width: 350px;
    height: 350px;
    margin-left: 8em;
    border-radius: 50%;
    position: relative;
    padding-top: 8.5em;
}

.icon-grid1 {
    position: absolute;
    top: -8%;
    left: 0%;
    text-align: center;
    width: 100%;
}

.icon span.fa,
.serv-txt span {
    border-radius: 50%;
    font-size: 29px;
    width: 70px;
    height: 70px;
    line-height: 68px;
    text-align: center;
    background: #fff;
    border: 2px dashed #dbdbdb;
    /*color: #ffffff;*/
    -webkit-transition: .5s all;
    -moz-transition: .5s all;
    transition: .5s all;
}

.serv-txt h5 {
    color: #000;
    font-size: 2em;
    text-transform: capitalize;
    margin: 10px 0;
}

.serv-txt span {
    background: #eb5273;
    border: none;
    color: #fff;
}

.icon2 .fa {
    color: #ffc400;
}

.icon1 .fa {
    color: #eb5273;
}

.icon3 .fa {
    color: #338ad1;
}

.icon4 .fa {
    color: #58c56f;
}

.icon5 .fa {
    color: #F44336;
}

.icon6 .fa {
    color: #1fa67a;
}

.icon span.fa:hover {
    border-color: #fff;
    color: #fff;
}

.icon2 .fa:hover {
    background: #ffc400;
}

.icon1 .fa:hover {
    background: #eb5273;
}

.icon3 .fa:hover,
.bb1 {
    background: #338ad1;
}

.icon4 .fa:hover {
    background: #58c56f;
}

.icon5 .fa:hover {
    background: #F44336;
}

.icon6 .fa:hover,
.bb3 {
    background: #1fa67a;
}

.icon span.fa:hover.icon3 .fa {
    color: #fff;
}

.text h4 {
    text-transform: uppercase;
    font-size: 18px;
    color: #4CAF50;
    margin: .7em 0;
}

.text p {
    color: #6d6d6d;
    font-size: 14px;
    line-height: 26px;
    letter-spacing: 1px;
    margin: 1em 0;
}

.icon-grid2 {
    position: absolute;
    top: 19%;
    left: -75%;
    text-align: right;
    width: 90%;
}

.icon-grid3 {
    position: absolute;
    top: 19%;
    left: 83%;
    text-align: left;
    width: 90%;
}

.icon-grid4 {
    position: absolute;
    bottom: -9%;
    left: 0%;
    text-align: center;
    width: 100%;
}

.icon-grid5 {
    position: absolute;
    top: 63%;
    left: -74%;
    text-align: right;
    width: 90%;
}

.icon-grid6 {
    position: absolute;
    top: 63%;
    left: 83%;
    text-align: left;
    width: 90%;
}

.bulb img {
    width: 230px;
    height: 350px;
}

.bulb {
    position: absolute;
    left: 130px;
    top: 70px;
}


/* features */


/*-- contact--*/

.contact-bottom {
    background: url(../../images/homePage/contact1.jpg) no-repeat center;
    background-size: cover;
}

div#contact h4 {
    color: #fff;
    text-transform: capitalize;
}

h3.title-contact {
    font-size: 2.5em;
    font-weight: 300;
    color: #dedede;
    margin-bottom: 20px;
}

.contact-right-w3l input[type="text"],
.contact-right-w3l input[type="email"] {
    border: none;
    background: rgba(0, 0, 0, 0.39);
    outline: none;
    padding: 15px;
    width: 48%;
    margin: 1%;
    margin-bottom: 1em;
    color: #fff;
    float: left;
    font-size: 1.1em;
    letter-spacing: 1px;
}

.contact-right-w3l input[type="text"]:nth-child(1),
.contact-right-w3l input[type="email"] {
    margin: 1%;
}

.contact-right-w3l textarea {
    width: 98%;
    padding: 10px 15px;
    outline: none;
    resize: none;
    height: 100px;
    margin: 1%;
    border: none;
    font-size: 1.1em;
    letter-spacing: 1px;
    background: rgba(0, 0, 0, 0.39);
    color: #fff;
}

.contact-right-w3l input[type="submit"] {
    background: #000;
    color: #FFF;
    padding: .9em 1.8em;
    margin-top: 1.3em;
    border: none;
    outline: none;
    font-size: 1.1em;
    letter-spacing: 2px;
    display: block;
    margin: 1em auto 0;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
}

.contact-right-w3l input[type="submit"]:hover {
    background: #fff;
    color: #000;
}

.contact-right-w3l {
    width: 60%;
    margin: 0 auto;
}


/*-- //contact --*/


/*-- subscribe --*/

.subscribe-head h4.sec-title {
    margin-bottom: 4px;
    letter-spacing: 3.8px;
    font-weight: 600;
}

.subscribe-head h6 {
    font-size: 2em;
    text-transform: uppercase;
    font-weight: 600;
    color: #1853a1;
    letter-spacing: 4px;
}

.subscribe-form {
    width: 40%;
    margin: 3em auto 0;
    padding: 10px;
}

.subscribe-main h5 {
    font-size: 1.5em;
    margin: 1.5em 0 0;
    letter-spacing: 2px;
    color: #000;
    font-weight: 300;
    line-height: 1.3;
}

.subscribe-main p {
    color: #777;
    letter-spacing: 1px;
}

.subscribe-main input[type="email"] {
    width: 80%;
    padding: 12px 10px 9px;
    font-size: 15px;
    float: left;
    color: #000;
    outline: none;
    border: 1px solid #fff;
    border-bottom: 2px solid #eb5273;
    background: #fff;
    -webkit-appearance: none;
}

.subscribe-main input[type="submit"]:hover {
    background: #eb5273;
    color: #fff;
}

.subscribe-main input[type="submit"] {
    width: 20%;
    float: left;
    color: #eb5273;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    outline: none;
    letter-spacing: 2px;
    padding: 12px 10px 11px;
    border: 1px solid #fff;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -webkit-appearance: none;
    background: #ededed;
}


/*-- //subscribe --*/


/*-- modal --*/

.model-info img {
    width: 100%;
}

.modal-header h4 {
    color: #212121;
    font-size: 2em;
    margin: 0;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
}

.modal-header h4 span {
    font-size: .6em;
    font-weight: 400;
    text-transform: initial;
}

.modal-body p {
    margin: 1em 0 0 0;
    font-size: .875em;
    color: #999999;
    line-height: 1.8em;
}


/*-- //modal --*/


/*-- Contact --*/

.contact-main-w3ls {
    background: url(../../images/homePage/contact.jpg) no-repeat center;
    background-size: cover;
}

.contact-left-w3ls {
    padding: 0;
    background: rgba(0, 0, 0, 0.51);
    border-right: 1px solid rgba(255, 255, 255, 0.29);
}

.contact-right-w3l-w3l h3:before {
    width: 35%;
}

.contact-text-agileinfo a {
    line-height: 2;
    color: #fff;
    font-size: 1.1em;
}

.contact-left-w3ls p {
    color: #fff;
    font-size: 1em;
    letter-spacing: 1px;
}

.contact-left-w3ls h4 {
    color: #49c7ed;
    font-weight: 600;
    margin-top: 0.4em;
    font-size: 1.2em;
    text-transform: uppercase;
}

.agileits-main-right label {
    margin: 0.5em 0 1em;
    font-size: 1.1em;
    text-align: center;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    display: inline-block;
    font-weight: 600;
    color: #000;
}

.w3ls-text {
    width: 48%;
    float: left;
}

.agileits-main-right {
    padding: 3em;
}

.agile_form input[type=text] {
    padding: 0.9em 1em;
    color: #000;
    width: 100%;
    font-size: 1em;
    outline: none;
    border: 1px solid #c5c0c0;
    background: #f5f5f5;
    margin: 0 0 1em 0;
}

.agile_form input[type="email"] {
    width: 100%;
    padding: 0.9em 1em;
    color: #000;
    font-size: 1em;
    outline: none;
    border: 1px solid #c5c0c0;
    background: #f5f5f5;
    margin: 0 0 1em 0;
}

.agile_form textarea {
    font-size: 1em;
    color: #000;
    padding: 0.8em 1em;
    margin-bottom: 1em;
    width: 100%;
    outline: none;
    resize: none;
    height: 11em;
    border: 1px solid #c5c0c0;
    background: #f5f5f5;
    margin: 0 0 1em 0;
}

.agile_form input[type="submit"] {
    width: 30%;
    text-transform: uppercase;
    outline: none;
    border: none;
    cursor: pointer;
    color: #ffffff;
    font-size: 1.2em;
    font-weight: 600;
    padding: 0.5em 0;
    letter-spacing: 1px;
    border: 1px solid #696867;
    background: #1853a1;
}

.agile_form input[type="submit"]:hover {
    color: #1853a1;
    background: rgb(255, 255, 255);
}

.contact-right-w3l-w3l {
    padding: 5em 12em;
    border-right: 1px solid rgba(255, 255, 255, 0.29);
}

.contact-grid-agileinfo {
    padding: 3em;
    border-bottom: 1px solid rgba(255, 255, 255, 0.29);
}

.visit {
    border: none;
}

.contact-main ::-webkit-input-placeholder {
    color: #fff;
}

.contact-main :-moz-placeholder {
    /* Firefox 18- */
    color: #fff;
}

.contact-main ::-moz-placeholder {
    /* Firefox 19+ */
    color: #fff;
}

.contact-main :-ms-input-placeholder {
    color: #fff;
}


/*-- social-icons --*/

ul.w3-links li {
    margin: 0 0.5em;
    display: inline-block;
}

ul.w3-links {
    margin-top: 0;
}

ul.w3-links li a i.fa {
    color: #f5f5f5;
    background: #1853a1;
    font-size: 1em;
    line-height: 2.2em;
    text-align: center;
    transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    width: 36px;
    height: 36px;
    border: 2px solid #fff;
}

ul.w3-links li a i.fa:hover {
    color: #fff;
    background: transparent;
}


/*-- //contact --*/

.footer-main {
    text-align: center;
    padding: 2em 0;
    background: rgba(0, 0, 0, 0.92);
}

.footer-main p {
    color: #777;
    letter-spacing: 1px;
}

.footer-main p a {
    color: #ea4c89;
    text-decoration: none;
    -webkit-transition: .5s all;
    -moz-transition: .5s all;
    transition: .5s all;
}

.footer-main p a:hover {
    color: #000;
}

.footer-social ul li {
    display: inline-block;
}

span.icon_twitter {
    background: #1da1f2;
}

span.icon_facebook {
    background: #3b5998;
}

span.icon_dribbble {
    background: #ea4c89;
}

span.icon_g_plus {
    background: #dd4b39;
}

.footer-social ul li a {
    color: #212121;
}

.footer-social ul li span {
    margin-right: 10px;
    color: #fff;
    padding: 10px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    font-size: 15px;
    text-align: center;
}

.footer-social ul {
    margin: 1.5em 0;
}

.footer-social ul li a {
    color: #212121;
}

.footer-social ul li:hover a {
    color: #fff;
    text-decoration: none;
}

.footer-main h4 {
    font-size: 3em;
    color: #ea4c89;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 300;
}


/*-- bottom-to-top --*/

#toTop {
    display: none;
    text-decoration: none;
    position: fixed;
    bottom: 24px;
    right: 3%;
    overflow: hidden;
    z-index: 999;
    width: 32px;
    height: 32px;
    border: none;
    text-indent: 100%;
    background: url(../../images/homePage/move-top.png) no-repeat 0px 0px;
}

#toTopHover {
    width: 32px;
    height: 32px;
    display: block;
    overflow: hidden;
    float: right;
    opacity: 0;
    -moz-opacity: 0;
    filter: alpha(opacity=0);
}


/*-- //bottom-to-top --*/


/* skills */

.skills {
    background: url(../../images/homePage/s1.jpg) no-repeat center;
    background-size: cover;
}

.skills-bar {
    width: 50%;
    margin: 3em auto;
}

.skills h4.sec-title {
    color: #fff;
}

.progress-title {
    font-size: 1.1em;
    letter-spacing: 2px;
    color: #ffffff;
    margin: 0 0 2em;
}

.progress {
    height: 10px;
    background: #cbcbcb;
    border-radius: 0;
    box-shadow: none;
    margin-bottom: 30px;
    overflow: visible;
}

.progress .progress-bar {
    box-shadow: none;
    position: relative;
    -webkit-animation: animate-positive 2s;
    animation: animate-positive 2s;
}

.progress .progress-bar:after {
    content: "";
    display: block;
    border: 15px solid transparent;
    border-bottom: 21px solid transparent;
    position: absolute;
    top: -26px;
    right: -12px;
}

.progress .progress-value {
    font-size: 1.2em;
    letter-spacing: 2px;
    color: #fff;
    position: absolute;
    top: -40px;
    right: 0;
}

.progress.pink .progress-bar:after {
    border-bottom-color: #ff4b7d;
}

.progress.green .progress-bar:after {
    border-bottom-color: #5fad56;
}

.progress.yellow .progress-bar:after {
    border-bottom-color: #e8d324;
}

.progress.blue .progress-bar:after {
    border-bottom-color: #3485ef;
}

@-webkit-keyframes animate-positive {
    0% {
        width: 0;
    }
}

@keyframes animate-positive {
    0% {
        width: 0;
    }
}


/* //skills */


/* -- Responsive code -- */

@media screen and (max-width: 1600px) {}

@media screen and (max-width: 1440px) {
    nav ul li {
        width: 14%;
    }
    h3.pos-title1 {
        left: 38.5%;
    }
    figure.port-gird:hover figcaption.port-gird-caption-agileits_w3layouts {
        top: 100px;
    }
}

@media screen and (max-width: 1366px) {
    nav ul li {
        width: 15%;
    }
    .filtr-container {
        width: 99.9%;
    }
    h3.pos-title {
        left: -5%;
    }
    h3.pos-title1 {
        left: 38%;
    }
}

@media screen and (max-width: 1280px) {
    nav ul li a {
        padding: 10px 46px;
    }
    h3.pos-title {
        left: -8%;
    }
    nav ul li a {
        padding: 10px 31px;
    }
    h3.pos-title1 {
        left: 37%;
    }
    figure.port-gird:hover figcaption.port-gird-caption-agileits_w3layouts {
        top: 72px;
    }
}

@media screen and (max-width: 1080px) {
    .banner-slide {
        width: 58%;
    }
    p {
        font-size: 1.1em;
    }
    .serv-left {
        margin-left: 20em;
    }
    .services-right-w3ls {
        width: 100%;
        margin-left: 0em;
    }
    h3.pos-title1 {
        left: 34.5%;
    }
    .subscribe-form {
        width: 46%;
    }
    div#services {
        padding-bottom: 1em;
    }
    h3.pos-title {
        left: 2%;
        top: 3%;
        -ms-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    figcaption.port-gird-caption-agileits_w3layouts h3 {
        margin-top: 40px;
    }
}

@media screen and (max-width: 1050px) {
    nav ul li a {
        padding: 10px 30px;
    }
    .banner-text {
        margin: 9.9em auto;
    }
}

@media screen and (max-width: 1024px) {
    nav ul li a {
        padding: 10px 27px;
    }
    h3.pos-title1 {
        left: 33.5%;
        top: 11%;
    }
    figcaption.port-gird-caption-agileits_w3layouts h3 {
        margin-top: 22px;
    }
}

@media screen and (max-width: 991px) {
    nav ul li a {
        padding: 10px 24px;
    }
    ul.about-list li {
        width: 22%;
    }
    .banner-slide {
        width: 68%;
    }
    .header-agileinfo {
        min-height: 710px;
    }
    .main-about-grid p {
        width: 77%;
    }
    h4.aboutbtm-head {
        font-size: 2.5em;
    }
    .ab1 h5 {
        font-size: 1.3em;
    }
    .serv-left {
        margin-left: 14em;
    }
    .blog-img {
        margin: 0 auto;
        width: 93%;
    }
    .blog-sec-w3_agile.b1 {
        margin: 3em 0;
    }
    h3.pos-title1 {
        left: 32.5%;
        top: 12%;
    }
    .subscribe-form {
        width: 50%;
    }
    h1.main-title a {
        font-size: 1.7em;
        padding: 0px 5px 6px;
    }
    .banner-text {
        width: 70%;
    }
    h3.pos-title.postitle4 {
        top: 2%;
        left: 15%;
    }
    .contact-right-w3l {
        width: 66%;
    }
}

@media screen and (max-width: 900px) {
    .banner-text h3 {
        font-size: 5.5em;
    }
    nav ul li a {
        padding: 10px 18px;
    }
    .sec-title {
        font-size: 3.8em;
    }
    .main-about-grid p {
        width: 82%;
    }
    .progress-title {
        margin: 0 0 1.5em;
    }
    h3.pos-title.postitle4 {
        left: 12%;
    }
    .header-agileinfo {
        min-height: 600px;
    }
    .banner-text {
        margin: 6.9em auto;
    }
    .main-about-grid p {
        width: 90%;
    }
    h3.pos-title,
    h3.pos-title1 {
        font-size: 5.5em;
    }
    h3.pos-title1 {
        left: 30.5%;
        top: 13%;
    }
    h3.title-contact {
        font-size: 2.3em;
    }
    .subscribe-form {
        width: 55%;
    }
    h3.pos-title1 {
        left: 34%;
        top: 14%;
    }
    ul.simplefilter {
        margin: 2.5em 0;
    }
    figcaption.port-gird-caption-agileits_w3layouts h3 {
        padding: 19px 0px;
    }
}

@media screen and (max-width: 800px) {
    nav ul li {
        line-height: 50px;
    }
    .banner-text h4 {
        font-size: 2.8em;
    }
    .banner-text h3 {
        font-size: 5.3em;
    }
    nav ul li a {
        padding: 10px;
    }
    .main-about-grid p {
        margin: 1em auto;
    }
    .banner-text {
        margin: 4.9em auto;
    }
    .header-agileinfo {
        min-height: 550px;
    }
    .banner-text h4 {
        font-size: 2.5em;
    }
    .banner-text h3 {
        font-size: 5.1em;
    }
    .services-right-w3ls h5 {
        font-size: 2.2em;
    }
    h3.pos-title1 {
        left: 28.5%;
    }
    h3.pos-title,
    h3.pos-title1 {
        font-size: 5em;
    }
    .subscribe-main input[type="email"] {
        width: 75%;
    }
    .subscribe-main input[type="submit"] {
        width: 25%;
    }
    h3.pos-title1 {
        left: 33.5%;
    }
    h3.pos-title.postitle4 {
        left: 6%;
    }
    .serv-left {
        margin-left: 10em;
    }
    h4.aboutbtm-head {
        font-size: 2.3em;
    }
    figcaption.port-gird-caption-agileits_w3layouts h3 {
        margin-top: 6px;
        font-size: 1.6em;
    }
}

@media screen and (min-width: 800px) {
    .grid-flex {
        display: flex;
        display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
        display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
        display: -ms-flexbox;      /* TWEENER - IE 10 */
        display: -webkit-flex;     /* NEW - Chrome */
    }
    .ab1 {
        -webkit-box-flex: 1;      /* OLD - iOS 6-, Safari 3.1-6 */
		-moz-box-flex: 1;         /* OLD - Firefox 19- */
		width: 20%;               /* For old syntax, otherwise collapses. */
		-webkit-flex: 1;          /* Chrome */
		-ms-flex: 1;              /* IE 10 */
		flex: 1;                  /* NEW, Spec - Opera 12.1, Firefox 20+ */
	
    }
}

@media screen and (max-width: 768px) {
    nav ul li a {
        padding: 10px 8px;
    }
    .sec-title {
        font-size: 3.5em;
    }
    .section-w3layouts {
        padding: 3.5em 0;
    }
    .contact-right-w3l input[type="text"],
    .contact-right-w3l input[type="email"],
    .contact-right-w3l textarea {
        width: 100%;
    }
    .serv-left {
        margin-left: 9em;
    }
    .skills-bar {
        width: 55%;
    }
}

@media screen and (max-width: 767px) {
    .navbar-default .navbar-toggle:hover,
    .navbar-default .navbar-toggle:hover,
    .navbar-default .navbar-toggle:focus,
    .navbar-default .navbar-toggle {
        background-color: #eb5273;
        color: #fff;
        margin: 0;
    }
    .navbar-default .navbar-toggle .icon-bar {
        background-color: transparent;
    }
    .navbar-nav {
        margin: 1em 0 0;
        background: #DFDFDF;
        text-align: center;
        padding-bottom: 1em;
    }
    .navbar {
        margin-bottom: 0;
    }
    .navbar-nav {
        margin: 1em 0 0;
        background: #DFDFDF;
        text-align: center;
        padding-bottom: 1em;
        width: 100%;
    }
    .navbar-toggle {
        color: #fff;
        font-size: 1.1em;
        text-transform: uppercase;
        background: #031f9a;
        letter-spacing: 3px;
        height: 48px;
        padding: 0.95em 1em 0;
    }
    .logo-nav {
        padding: 0.5em 0;
    }
    .navbar-toggle {
        position: relative;
        float: none;
        width: 100%;
    }
    .logo-nav-left1 ul li a {
        font-size: 1em;
    }
    navbar-default .navbar-nav .open .dropdown-menu>li>a,
    .navbar-default .navbar-nav .open .dropdown-menu>li>a:hover,
    .navbar-default .navbar-nav .open .dropdown-menu>li>a:focus {
        color: #fff;
    }
    .navbar-default .navbar-nav .open .dropdown-menu>ul {
        background-color: #1da1f2;
    }
    .banner-text h3 {
        font-size: 4.8em;
    }
    .banner-text {
        margin: 2.9em auto;
    }
    .header-left,
    .header-right,
    .logo {
        float: none;
        width: 100%;
    }
    .header-left,
    .header-right {
        padding-top: 0em;
    }
    h1.main-title {
        margin: 0.3em 0;
    }
    .banner-text h3 {
        font-size: 4.5em;
    }
}

@media screen and (max-width: 736px) {
    .banner-slide {
        width: 71%;
    }
    .banner-text h3 {
        font-size: 4em;
    }
    .header-agileinfo {
        min-height: 540px;
    }
    .banner-text {
        margin: 4em auto;
    }
    ul.about-list li {
        width: 23%;
    }
    .sec-title {
        font-size: 3.3em;
    }
    .serv-left {
        margin-left: 7em;
    }
    nav ul li {
        width: 16%;
    }
    figcaption.port-gird-caption-agileits_w3layouts h3 {
        margin-top: 0px;
    }
}

@media screen and (max-width: 667px) {
    span.span1 {
        font-size: 34px;
    }
    .banner-slide {
        width: 79%;
    }
    nav ul li {
        width: 100%;
    }
    span.span1 {
        width: 180px
    }
    ul.about-list li {
        width: 26%;
    }
    .serv-left {
        margin-left: 2em;
    }
    h3.title-contact {
        font-size: 2em;
    }
    h3.pos-title,
    h3.pos-title1 {
        font-size: 4em;
    }
    .subscribe-form {
        width: 61%;
    }
    span.span1 {
        width: 200px;
    }
    figcaption.port-gird-caption-agileits_w3layouts h3 {
        padding: 10px 0px;
    }
}

@media screen and (max-width: 640px) {
    .serv-left {
        margin-left: 0em;
    }
    l.about-list li {
        width: 27%;
    }
    ul.about-list li {
        width: 27%;
    }
    .serv-left {
        margin-left: 10em;
        width: 273px;
        height: 273px;
        padding-top: 5.5em;
    }
    .icon span.fa,
    .serv-txt span {
        font-size: 25px;
        width: 60px;
        height: 60px;
        line-height: 60px;
    }
    h3.title-contact {
        font-size: 1.8em;
    }
    .filtr-item,
    .filtr-item:nth-child(4),
    .filtr-item:nth-child(8) {
        float: left;
        width: 50%;
    }
    h3.pos-title1 {
        top: 7%;
    }
    figure.port-gird:hover figcaption.port-gird-caption-agileits_w3layouts {
        top: 81%;
    }
}

@media screen and (max-width: 600px) {
    h3.pos-title,
    h3.pos-title1 {
        font-size: 3.5em;
    }
    h3.title-contact {
        font-size: 1.8em;
    }
    .skills-bar {
        width: 61%;
    }
    .serv-left {
        margin-left: 7.5em;
        width: 270px;
        height: 270px;
    }
    h1.main-title a {
        font-size: 1.5em;
    }
    .banner-text h4 {
        font-size: 2.3em;
    }
    .services-right-w3ls h5 {
        font-size: 2.1em;
    }
    .subscribe-form {
        width: 65%;
    }
    .serv-txt h5 {
        font-size: 1.8em;
    }
    ul.about-list li {
        width: 29%;
    }
    .subscribe-head h6 {
        font-size: 1.5em;
    }
    .about-btm-w3_agileits {
        padding-top: 3em;
    }
}

@media screen and (max-width: 568px) {
    nav ul li {
        line-height: 45px;
    }
    .banner-text {
        width: 74%;
        margin: 3em auto;
    }
    .banner-text h3 {
        font-size: 3.5em;
    }
    .header-agileinfo {
        min-height: 520px;
    }
    .section-w3layouts {
        padding: 3.2em 0;
    }
    a.wthree-.about-link {
        padding: 10px 16px;
    }
    .skills-bar {
        width: 66%;
    }
    .contact-right-w3l {
        width: 75%;
    }
    .subscribe-form {
        width: 70%;
    }
    .subscribe-main h5 {
        font-size: 1.3em;
    }
    .skills-bar {
        width: 71%;
    }
    .serv-left {
        margin-left: 5.3em;
    }
    .simplefilter li,
    .multifilter li,
    .sortandshuffle li {
        padding: 8px 16px;
    }
    .contact-right-w3l input[type="submit"] {
        padding: .5em 1.8em;
    }
    figcaption.port-gird-caption-agileits_w3layouts h3 {
        padding: 20px 0px;
    }
    figure.port-gird:hover figcaption.port-gird-caption-agileits_w3layouts {
        top: 68%;
    }
}

@media screen and (max-width: 480px) {
    .banner-text h4 {
        font-size: 2em;
        letter-spacing: 4px;
    }
    .banner-text {
        width: 89%;
    }
    h1.main-title a {
        font-size: 1.3em;
    }
    .header-agileinfo {
        min-height: 514px;
    }
    h3.pos-title,
    h3.pos-title1 {
        font-size: 2.5em;
    }
    h3.pos-title {
        left: 30%;
        top: 1%;
    }
    h3.pos-title {
        left: 30%;
        top: 1%;
    }
    ul.about-list li {
        width: 47%;
        margin: 0 auto;
        display: block;
    }
    a.wthree-.about-link {
        padding: 8px 16px;
        letter-spacing: 2px;
    }
    .sec-title {
        font-size: 3em;
    }
    .main-about-grid p {
        width: 95%;
    }
    .banner-text h3 {
        font-size: 3.2em;
    }
    .header-agileinfo {
        min-height: 509px;
    }
    .serv-left {
        width: 219px;
        height: 219px;
        padding-top: 4em;
    }
    .icon span.fa,
    .serv-txt span {
        font-size: 22px;
        width: 48px;
        height: 48px;
        line-height: 47px;
    }
    .services-right-w3ls h5 {
        font-size: 1.9em;
    }
    .skills-bar {
        width: 78%;
        margin: 3em auto 0;
    }
    .progress {
        margin-bottom: 20px;
    }
    .simplefilter li,
    .multifilter li,
    .sortandshuffle li {
        padding: 6px 7px;
        font-size: 13.5px;
    }
    h3.title-contact {
        font-size: 1.6em;
    }
    .subscribe-form {
        width: 81%;
    }
    .filtr-item,
    .filtr-item,
    .filtr-item:nth-child(4),
    .filtr-item:nth-child(8) {
        float: none;
        width: 100%;
    }
    .footer-main h4 {
        font-size: 2.5em;
    }
    h3.pos-title1 {
        top: 2.8%;
    }
    figure.port-gird:hover figcaption.port-gird-caption-agileits_w3layouts {
        top: 81%;
    }
}

@media screen and (max-width: 414px) {
    .banner-slide {
        width: 93%;
    }
    .banner-text h3 {
        font-size: 3.1em;
    }
    span.span1 {
        font-size: 32px;
    }
    .header-agileinfo {
        min-height: 506px;
    }
    .icon span.fa,
    .serv-txt span {
        font-size: 19px;
        width: 44px;
        height: 44px;
        line-height: 44px;
    }
    .serv-left {
        width: 180px;
        height: 180px;
        padding-top: 3.5em;
    }
    .serv-txt h5 {
        font-size: 1.5em;
    }
    .services-right-w3ls {
        margin-top: 2em;
    }
    .simplefilter li,
    .multifilter li,
    .sortandshuffle li {
        margin: 0 8px;
    }
    .sec-title {
        font-size: 2.5em;
    }
    .contact-right-w3l {
        width: 86%;
    }
    .subscribe-form {
        width: 92%;
    }
    .subscribe-main h5 {
        padding: 0 1em;
    }
    figure.port-gird:hover figcaption.port-gird-caption-agileits_w3layouts {
        top: 78%;
    }
}

@media screen and (max-width: 384px) {
    .banner-text h3 {
        font-size: 2.8em;
    }
    h2.bnrtext {
        font-size: 2.5em;
    }
    span.span1 {
        font-size: 28px;
        width: 162px;
    }
    .header-agileinfo {
        min-height: 495px;
    }
    .main-about-grid p {
        width: 100%;
    }
    .serv-left {
        margin-left: 3em;
    }
    h4.aboutbtm-head {
        font-size: 2.1em;
    }
    .services-right-w3ls {
        padding: 2em 1em;
    }
    .simplefilter li,
    .multifilter li,
    .sortandshuffle li {
        margin: 8px auto;
        display: block;
        width: 94%;
    }
    .subscribe-form {
        width: 100%;
    }
    .footer-main p {
        padding: 0 1em;
    }
    h3.title-contact {
        font-size: 1.5em;
    }
    .subscribe-head h6 {
        font-size: 1.4em;
    }
    .section-w3layouts {
        padding: 1em 0 3em;
    }
    h3.pos-title1 {
        top: 1.8%;
    }
    h3.pos-title {
        left: -9%;
        top: 15%;
        -ms-transform: rotate(270deg);
        -webkit-transform: rotate(270deg);
        transform: rotate(270deg);
    }
    h3.pos-title,
    h3.pos-title1 {
        font-size: 2.1em;
    }
    .sec-title {
        font-size: 2.2em;
    }
}

@media screen and (max-width: 375px) {
    .navbar-toggle {
        height: 40px;
        padding: 0.5em 1em 0;
    }
    .serv-left {
        margin-left: 2em;
    }
    h3.title-contact {
        font-size: 1.46em;
    }
    .subscribe-main input[type="email"] {
        width: 70%;
    }
    .subscribe-main input[type="submit"] {
        width: 30%;
    }
    .services-right-w3ls h5 {
        font-size: 1.7em;
    }
    figure.port-gird:hover figcaption.port-gird-caption-agileits_w3layouts {
        top: 76%;
    }
    .subscribe-head h6 {
        font-size: 1.2em;
    }
    .footer-main h4 {
        font-size: 2.3em;
    }
    .header-bottom {
        padding: 2em 0 0;
    }
    .header-agileinfo {
        min-height: 470px;
    }
}

@media screen and (max-width: 320px) {
    h1.main-title a {
        font-size: 1.2em;
    }
    .banner-text h4 {
        font-size: 1.8em;
        letter-spacing: 2px;
    }
    h2.bnrtext {
        font-size: 2.3em;
    }
    .banner-text {
        width: 100%;
        margin: 2em 0;
    }
    span.span1 {
        font-size: 24px;
        width: 140px;
    }
    .header-agileinfo {
        min-height: 400px;
    }
    .banner-text h3 {
        font-size: 2.5em;
    }
    .section-w3layouts {
        padding: 2.5em 0;
    }
    .icon span.fa,
    .serv-txt span {
        font-size: 17px;
        width: 39px;
        height: 39px;
        line-height: 35px;
    }
    .simplefilter li,
    .multifilter li,
    .sortandshuffle li {
        width: 93%;
    }
    .serv-left {
        width: 153px;
        height: 153px;
        margin-left: 28px;
        padding-top: 2.5em;
    }
    .blog-sec-w3_agile.b1,
    .b3,
    .blog-sec-w3_agile {
        padding: 0;
    }
    ul.simplefilter {
        margin: 1em 0 2em;
    }
    .contact-right-w3l {
        width: 92%;
    }
    .footer-main h4 {
        font-size: 2.2em;
    }
    .subscribe-head h6 {
        font-size: 1.2em;
    }
    div#about {
        padding-top: 0;
    }
    h3.title-contact {
        font-size: 1.35em;
        line-height: 1.5;
    }
    .icon-grid3 {
        left: 74%;
    }
    .banner-text {
        margin: 1em auto;
    }
}
`;

export default class HomePageStyledComponent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
      return (
        <div>
          {this.props.children}
        </div>
      );
    }
  }