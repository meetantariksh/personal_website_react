import { injectGlobal } from 'styled-components';

import aboutMeImage from './images/homePage/about.jpg';

/* eslint no-unused-expressions: 0 */
injectGlobal`
html, body{
	margin:0;
	font-size: 100%;
	font-family: 'Lato', sans-serif;
	background: #fff;
}
body a {
	text-decoration:none;
	transition:0.5s all;
	-webkit-transition:0.5s all;
	-moz-transition:0.5s all;
	-o-transition:0.5s all;
	-ms-transition:0.5s all;
}
a:hover{
 text-decoration:none;
}
input[type="button"],input[type="submit"]{
	transition:0.5s all;
	-webkit-transition:0.5s all;
	-moz-transition:0.5s all;
	-o-transition:0.5s all;
	-ms-transition:0.5s all;
}
h2,h3,h4,h5,h6{
	margin:0;
	font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
}	
p{
	margin:0;
}
ul{
	margin:0;
	padding:0;
}
label{
	margin:0;
}
/*-- banner --*/
.header h1 {
    margin: 0;
}
.header {
    padding: 2em 2.5em;
}
.banner {
    background: url(../../images/homePage/banner.jpg) no-repeat 0px 0px;
    background: #0086fe;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    -ms-background-size: cover;
    min-height: 770px;
    position: relative;
}
.banner-image-w3layouts img {
    position: absolute;
    bottom: 0;
    right: 6%;
    width: 425px;
}
.w3_agile_logo{
	float:left;
}
.w3_agile_logo h1 a {
    font-size: 1.3em;
    color: #fff;
    text-decoration: none;
    text-transform: capitalize;
    letter-spacing: 3px;
    font-family: 'Josefin Sans', sans-serif;
}
.w3_agile_logo h1 a span {
    display: block;
    font-size: .3em;
    letter-spacing: 13px;
    text-transform: capitalize;
    background: rgba(255, 255, 255, 0.22);
    /* width: 89%; */
    padding: 5px 0px 5px 10px;
    color: rgb(33, 99, 158);
    font-weight: 600;
}
.agile_banner_info {
    margin: 11em 0 0em 14em;
    text-align: left;
}
p.banner-p-w3ls {
    color: #fff;
    font-size: 18px;
    letter-spacing: 3px;
    font-weight: 300;
    width: 38%;
    float: none;
    text-align: left;
    line-height: 30px;
}
.w3_agileits_social_media ul li {
    margin: 0 .8em;
    list-style: none;
    margin-bottom: 2em;
}
.w3_agileits_social_media ul li a {
    display: block;
    color: #fff;
    text-decoration: none;
    width: 35px;
    height: 35px;
    border-radius: 50px;
    padding: 6px 0 0 0px;
    background: transparent;
	box-shadow:1px 1px 2px #3b5998;
}
.w3_agileits_social_media ul li a:hover  i{
    color:#ecb731;
}
.w3_agileits_social_media {
    text-align: center;
    position: absolute;
    left: 2em;
    top: 18em;
}
.agileinfo_share {
    position: relative;
    color: #000000;
    font-size: 15px;
    letter-spacing: 2px;
    text-transform: uppercase;
}
/*-- menu --*/
.mobile-nav-button {
    position: fixed;
    margin: 4.3em 0em 0;
    right: 2.5%;
    top: -2.5%;
    z-index: 999;
    cursor: pointer;
    width: 40px;
    height: 40px;
    background: rgba(0, 0, 0, 0.04);
}

.mobile-nav-button .mobile-nav-button__line {
	width: 30px;
    height: 2px;
    background: #fff;
    position: relative;
    transition: 1s ease;
    margin: .3em auto;
}

.mobile-nav-button .mobile-nav-button__line:nth-of-type(2) { margin: 0.7em auto; }

.mobile-nav-button .mobile-nav-button__line--1 {
	transform: rotate(45deg);
	-webkit-transform: rotate(45deg);
	-moz-transform: rotate(45deg);
	-o-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	top: 13px;
	position: absolute;
}

.mobile-nav-button .mobile-nav-button__line--2 { 
	display: none;	
}

.mobile-nav-button .mobile-nav-button__line--3 {
	transform: rotate(135deg);
	-webkit-transform: rotate(135deg);
	-moz-transform: rotate(135deg);
	-o-transform: rotate(135deg);
	-ms-transform: rotate(135deg);
	top: 13px;
	position: absolute;
}

.mobile-nav-button .mobile-nav-button__line--1,.mobile-nav-button .mobile-nav-button__line--3 {
	left:10%;
}

.mobile-menu {
    display: block;
    width: 20%;
    right: -20%;
    height: 100%;
     background: rgba(6, 17, 27, 0.54);
    position: fixed;
    z-index: 9998;
    transition: 0.6s ease;
    top: 0;
    opacity: 0;
}

.mobile-menu ul {
    position: relative;
    /* top: 20%; */
    padding: 0;
    padding-top: 7.5em;
}

.mobile-menu ul li {
    list-style: none;
    margin-bottom: 1.5em;
    display: block;
}
.mobile-menu ul li a {
    width: 100%;
    margin: 0 auto;
    display: block;
    text-align: left;
    text-decoration: none;
    color: #fff;
    font-size: .91em;
    font-weight: bold;
    overflow: hidden;
    position: relative;
    padding: 1em 0 1em 2em;
    text-transform: uppercase;
    letter-spacing: 3px;
}
.open > ul.dropdown-menu.agile_short_dropdown{
    display: block;
    transform: none !important;
    min-width: 65%;
    border: none;
    box-shadow: none;
    border-radius: 0;
    left: 18%;
}
.open > ul.dropdown-menu.agile_short_dropdown li{
	margin:0 !important;
}
ul.dropdown-menu.agile_short_dropdown > li > a:hover{
    background: none;
}
.mobile-menu ul li a:after {
	content: '';
	background: #ecb731;
	width: 100%;
	height: 100%;
	position: absolute;
	right: -100%;
	top: 0;
	z-index: -1;
	transition: 0.4s ease;
}

.mobile-menu ul li a:hover,.mobile-menu ul li.active a { 
	color: #fff; 
}

.mobile-menu ul li a:hover:after,.mobile-menu ul li.active a:after { 
	right: 0; 
}
li.dropdown.act a.w3_icons_act {
    background: #0e0e0e;
	color: #fff;
}
.mobile-menu img {
	position: absolute;
	width: 150px;
	display: block;
	left: 50%;
	top: 3rem;
	transform: translatex(-50%);
	-webkit-transform: translatex(-50%);
	-moz-transform: translatex(-50%);
	-o-transform: translatex(-50%);
	-ms-transform: translatex(-50%);
	padding: 0;
	text-align: center;
}

.mobile-menu--open {
	opacity: 1;
	right:0%!important;
}
.dropdown.active.open a  ul.dropdown-menu.agile_short_dropdown li a.w3_icon_1:after{
	background:none !important;
}
.mobile-menu {
    overflow-y: auto;
	    z-index: 9!important;
}
/*-- //banner --*/

#typed {
    font-size: 2em;
    color: #ecb731;
    text-transform: capitalize;
    line-height: 1.5em;
    letter-spacing: 7px;
    font-weight: 300;
    text-shadow: 1px 1px 2px #000;
    margin: 0.5em 0 0.5em;
    display: inline-block;
}
#typed i {
    font-style: normal;
    color: #ffffff;
}
.typed-cursor {
    opacity: 1;
    font-weight: 300;
    -webkit-animation: blink 0.7s infinite;
    -moz-animation: blink 0.7s infinite;
    -ms-animation: blink 0.7s infinite;
    -o-animation: blink 0.7s infinite;
    animation: blink 0.7s infinite;
    color: #fff;
    font-size: 2.5em;
}
/*--search bar--*/
.search-agileits {
    margin: 3em 2em 7em;
    position: relative;
}
.search-agileits input[type="search"] {
    font-size: 16px;
    font-weight: 400;
    padding: 6px 82px 6px 15px;
    width: 100%;
    outline: none;
    background: transparent;
    color: #fff;
    border: none;
    border-bottom: 1px solid #fff;
    letter-spacing: 1px;
}
.search-agileits input[type="submit"] {
    background: transparent;
    color: #fff;
    border: none;
    font-size: 15px;
    text-transform: capitalize;
    letter-spacing: 1px;
    padding: 7px 16px;
    margin-left: -3px;
    outline: none;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
    position: absolute;
    bottom: 0;
    right: 0;
}
.search-agileits input[type="submit"]:hover {
    color:#ecb731;
}
.agile_banner_info h2 {
    font-size: 2.5em;
    letter-spacing: 2px;
    color: #ecb731;
	text-shadow: 1px 1px 2px #000;
}
.agile_banner_info h2 span{
    color: #171717;
}
/*--//search bar--*/
/*-- //Banner-Slider --*/
/*--modal--*/
.modal-content  img{
	width:100%;
}
.modal-content h4 {
    color: #000;
    text-align: center;
    font-size: 26px;
    margin-bottom: .5em;
    text-transform: uppercase;
}
.modal-content h5 {
    color: #ecb731;
    padding-top: 15px;
    font-size: 21px;
}
.modal-content p{
	color:#636363;
	font-size:14px;
	line-height:25px;
	    padding-top: 10px;
}
.modal-header {
    padding: 30px;
}
/*--//modal--*/
/*-- /about --*/
.gallery_wthree, .work, .services, .skills-agileinfo, .mid-w3layouts {
	padding: 5em 0em;
}
.white-agile{
	color:#fff!important;
}
.about-left-w3ls {
    background: url(${aboutMeImage})no-repeat 0px 0px;
    background-size: cover;
    padding: 0;
    min-height: 794px;
    position: relative;
    text-align: center;
    z-index: 999;
    margin: 0;
}
.jarallax {
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
}
.about-left-w3ls h5 {
    color: #fff;
    font-size: 2.5em;
    font-weight: bold;
    letter-spacing: 4px;
    position: relative;
    margin: 6em 2em 0 0;
    line-height: 35px;
    float: right;
}
.about-left-w3ls h5 span {
    color: #00acee;
    font-size: 1em!important;
    font-weight: 300;
    letter-spacing: 1px;
    text-shadow: 1px 1px 2px #000;
}
.about-left-w3ls h5 i {
    display: block;
    position: absolute;
    top: 3.5em;
    right: -0.5em;
    color: #0086fe;
    font-size: 0.5em!important;
	text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.69);
}
.person-info-agileits-w3layouts {
    padding: 5em;
}
.person-info-agileits-w3layouts ul {
    margin-top: 3.75em;
}
.person-info-agileits-w3layouts ul li {
    list-style: none;
    display: block;
    margin-bottom: 25px;
    color: #8a8a8a;
    font-size: 16px;
    letter-spacing: 0.5px;
}
.person-info-agileits-w3layouts ul li:nth-child(8) {
    margin-bottom: 0!important;
}
.person-info-agileits-w3layouts ul li span {
    width: 141px;
    display: inline-block;
    color: #4a4a4a;
    font-weight: 600;
}
.person-info-agileits-w3layouts ul li a{
    color: #8a8a8a;
}
.person-info-agileits-w3layouts ul li a:hover{
    color: #ecb731;
}
.person-info-agileits-w3layouts ul li a.botton-w3ls {
    display: inline-block;
    color: #fff;
    padding: 10px 20px;
    font-size: 15px;
    background: #0086fe;
    margin: 10px 10px 0 0px;
    text-decoration: none;
    text-transform: capitalize;
	letter-spacing: .5px;
}
.person-info-agileits-w3layouts ul li a.botton-w3ls:hover {
    background: #ecb731;
    color: #fff;
    text-decoration: none;
	outline:none;
}
.person-info-agileits-w3layouts p span{
    color: #ecb731;
    font-size: 19px;
}
.person-info-agileits-w3layouts p{
    color: #303030;
    font-size: 16px;
    line-height: 30px;
    width: 100%;
}
/*-- //about --*/
/*-- works --*/
.work h5,.contact-grids h5 {
    color: #0086fe;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1em;
    position: relative;
    display: inline-block;
}
.work h5:before,.contact-grids h5:before {
    position: absolute;
    content: "";
    width: 100px;
    height: 3px;
    background: #000;
    top: 33px;
    left: -15px;
}
.work-info-agileits {
    margin-top: 2em;
}
.work2{
	margin-top:2em!important;
}
.work-left-agileits-w3layouts h6 {
    font-size: 17px;
    letter-spacing: 1px;
    color: #303030;
}
.work-left-agileits-w3layouts h6 i{
    color: #ecb731;
	padding-right:8px;
}
.work-right-w3-agileits h3 {
    color: #ecb731;
    font-size: 25px;
    text-transform: capitalize;
    letter-spacing: 1.5px;
    margin-bottom: 12px;
}
.work-right-w3-agileits h3 span {
    color: rgb(3, 169, 245);
    font-weight: 400;
    font-size: 25px!important;
}
.work-right-w3-agileits p {
    color: #777;
    font-size: 16px;
    letter-spacing: 0.5px;
    line-height: 30px;
}
/*-- //works --*/
/*-- services --*/
.services{
	background:#171717;
}
.services h3{
	color:#fff!important;
}
.w3_sub_head{
	text-align:center;
	color:#FF008F;
	font-size:1em;
}
.w3_head {
    text-align: center;
    color: #303030;
    margin: 0 0 1em;
    font-size: 2.5em;
    letter-spacing: 2px;
    text-transform: capitalize;
}
h3.w3_head.w3_head1 span {
    font-size: 13px;
    display: block;
    letter-spacing: 4px;
    margin-top: 5px;
    text-transform: uppercase;
    color: #ecb731;
}
.nunc{
	position:relative;
	text-align:center;
	color:#999;
	line-height:1.8em;
	padding-bottom:1.5em;
}
.nunc:after{
	content: '';
    background: #FF008F;
    height: 2px;
    position: absolute;
    bottom: 0%;
    left: 45%;
    width: 10%;
}
.agileits_services_grids {
    margin: 0em 0 3em;
}
.agileits_services_grid {
    padding: 2em;
    border: 1px solid #999;
	border-left:3px solid #999;
    text-align: left;
    border-right: none;
    background: #fff;
	transition: .5s ease-in;
    -webkit-transition: .5s ease-in;
    -moz-transition: .5s ease-in;
    -o-transition: .5s ease-in;
    -ms-transition: .5s ease-in;
}
.agileits_services_grid h5{
	font-size:1.5em;
	color:#000;
	margin: 0em 0 .5em;
	transition: .5s ease-in;
    -webkit-transition: .5s ease-in;
    -moz-transition: .5s ease-in;
    -o-transition: .5s ease-in;
    -ms-transition: .5s ease-in;
}
.agileits_services_grid p{
	color:#7e7e7e;
	line-height:2em;
	font-size: 16px;
}
.agileits_services_grid:hover {
    background: #ecfbff;
    border-left: 3px solid #0086fe;
    border-right: none;
	transition: .5s ease-in;
    -webkit-transition: .5s ease-in;
    -moz-transition: .5s ease-in;
    -o-transition: .5s ease-in;
    -ms-transition: .5s ease-in;
}
.agileits_services_grid:hover h5 {
    color: #0086fe;
	transition: .5s ease-in;
    -webkit-transition: .5s ease-in;
    -moz-transition: .5s ease-in;
    -o-transition: .5s ease-in;
    -ms-transition: .5s ease-in;
}
.agileits_service_grid_btm_left1{
	-webkit-transition: all 300ms ease-in-out;
    -moz-transition: all 300ms ease-in-out;
    -ms-transition: all 300ms ease-in-out;
    -o-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
	z-index: 1;
    width: 100%;
    overflow: hidden;
    position: relative;
}
.agileits_service_grid_btm_left1:before {
    bottom: 0;
    right: 0;
    border-bottom: 2px solid #0086fe;
    border-right: 2px solid #0086fe;
}
.agileits_service_grid_btm_left1:after, .agileits_service_grid_btm_left1:before {
    content: '';
    z-index: 2;
    width: 0;
    height: 0;
    visibility: hidden;
    position: absolute;
    -webkit-transition: all 800ms ease-in-out;
    -moz-transition: all 800ms ease-in-out;
    -ms-transition: all 800ms ease-in-out;
    -o-transition: all 800ms ease-in-out;
    transition: all 800ms ease-in-out;
}
.agileits_service_grid_btm_left1:after {
    top: 0;
    left: 0;
    border-top: 2px solid #0086fe;
    border-left: 2px solid #0086fe;
}
.agileits_service_grid_btm_left1:hover:after, .agileits_service_grid_btm_left1:hover:before {
    width: 100%;
    height: 100%;
    visibility: visible;
}
.agileits_service_grid_btm_left2 h5 {
    margin: 0em 0 .5em;
    color: #ecb731;
    font-size: 1.5em;
    letter-spacing: 1px;
    text-transform: capitalize;
	transition: .5s all;
    -webkit-transition: .5s all;
    -o-transition: .5s all;
    -moz-transition: .5s all;
    -ms-transition: .5s all;
}
.agileits_service_grid_btm_left2 p {
    color: #999;
    font-size: 15px;
    line-height: 2em;
}
.agileits_service_grid_btm_left2 {
    padding: 2em 1em;
    border: none;
    border-bottom: 2px solid #000000;
    background: #fff;
    text-align: center;
}
.agileits_service_grid_btm_left1:hover {
    cursor: default;
}
.agileits_service_grid_btm_left1:hover .agileits_service_grid_btm_left2 i {
   color: #0086fe;
   border-color:#252525;
	transition: .5s all;
    -webkit-transition: .5s all;
    -o-transition: .5s all;
    -moz-transition: .5s all;
    -ms-transition: .5s all;
}
.agileits_service_grid_btm_left2 i {
    display: inline-block;
    width: 60px;
    height: 60px;
    border: 2px solid #0086fe;
    line-height: 57px;
    border-radius: 3px;
    font-size: 25px;
    margin-bottom: 0.5em;
    color: #252525;
}
/*-- //services --*/
/*--sevices-section--*/
.sevices-w3layouts h3 {
    color: #fff!important;
}
.sevices-w3layouts{
	background:url("../../images/homePage/s2.jpg") no-repeat 0px 0px;
	background-size:cover;
}
.sevices-w3layouts p.w-text {
    margin-top: 1em;
}
.sevices-w3layouts-row {
    margin-top: 4em;
}
.sevices-w3layouts-grids {
    /* border: 1px solid #fff; */
    padding: 3em 2em;
    width: 22.5%;
    position: relative;
    transition: .5s all;
    -webkit-transition: .5s all;
    -o-transition: .5s all;
    -moz-transition: .5s all;
    -ms-transition: .5s all;
    overflow: hidden;
    text-align: center;
    background: rgba(9, 9, 9, 0.53);
}
.sevices-w3layouts-grids.sevices-w3layouts-mdl {
    margin: 0 2.3em;
}
.sevices-w3layouts-grids.sevices-w3layouts-mdl1 {
    margin-right: 2.5em;
}
.sevices-w3layouts-grids h5 {
    font-size: 1.2em;
    text-transform: uppercase;
	color:#F58703;
}
.sevices-w3layouts-grids p {
	margin-top: 1em;
	font-size:1em;
	line-height:1.8em;
	color:#fcfcfc;
}
.sevices-w3layouts-row .social-icons {
    margin: 1em 0 0;
}
.sevices-w3layouts-img{
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
	transition: .7s all;
	-webkit-transition: .7s all;
	-moz-transition: .7s all;
}
.c1{
	background-color: #7371b7 ;
}
.c2{
	background-color: #fd9f3e ;
}
.c3{
	background-color: #3be8b0 ;
}
.c4{
	background-color: #fc636b ;
}
.sevices-w3layouts-img i {
    color: #fff;
    font-size: 4em;
    margin-top: 1.16em;
}
.sevices-w3layouts-grids:hover div.sevices-w3layouts-img {
	top:100%;
}

/*--//services-section--*/
/*-- mid --*/ 
.mid-w3layouts{
	text-align:center;
}
section.mid-w3layouts h6 {
    color: #333;
    font-size: 17px;
    letter-spacing: 2px;
}
section.mid-w3layouts h3 {
    color: #0086fe;
    font-size: 2.5em;
    margin: 0.5em 0 1em;
    letter-spacing: 2px;
    font-weight: 600;
}
section.mid-w3layouts h3 span {
    color: #ecb731;
}
section.mid-w3layouts a {
    color: #fff;
    padding: 10px 30px;
    background: #000;
    display: inline-block;
    text-decoration: none;
    font-size: 15px;
    text-transform: capitalize;
    letter-spacing: .5px;
}
section.mid-w3layouts a:hover {
    background: #ecb731;
}
/*-- mid --*/ 
/*-- skills --*/ 
.skills-agileinfo {
    background: url(../../images/homePage/skills.jpg)no-repeat 0px 0px;
    background-size: cover;
    background-attachment: fixed;
}
.bar-grids {
    padding: 0em;
    width: 48.24%;
}
.bargrids-left {
    margin-right: 40px;
}
.bar-grids h4 {
    font-size: 1.6em;
    color: #ffffff;
	letter-spacing: 1px;
    margin-bottom: 1.4em;
    /* border-bottom: 1px dashed #ffffff; */
    padding-bottom: 0em;
    font-weight: 600;
}
.bar-grids h4 span.glyphicon {
    margin-right: 0.8em;
    color: #ecb731;
}
.progress {
    height: 20px;
    margin-bottom: 2.2em;
    background-color: rgba(255, 218, 227, 0.07);
	-webkit-border-radius: 0;
	-moz-border-radius: 0;
	-o-border-radius: 0;
	-ms-border-radius: 0;
    border-radius: 0;
}
.prgs-w3agile-last {
    margin-bottom: 0!important;
}
.progress-bar { 
    background-color: #0086fe;
}
.bar-grids h6 {
    font-size: 0.9em;
    color: #fff;
    margin-bottom: 0.6em;
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: capitalize;
    font-weight: 300;
    letter-spacing: 2px;
}
.bar-grids h6 span {
    float: right;
    font-size: 0.9em;
}
/*-- //skills --*/
/*-- gallery --*/
.grid-2.grid_w3l {
	margin-top: 1em;
}
.grid_w3 {
    padding: 0 0.5em;
}
.sub_grid.gallery_w3l,.grid-2 {
    margin-top: 1em;
}
.grid-1 a {
    display: block;
    overflow: hidden;
    position: relative;
}
.grid-1:hover .w3agile-text{
    bottom: 0%;
}
.w3agile-text {
	background: rgba(0, 0, 0, 0.58);
	position: absolute;
	width: 100%;
	height: 100%;
	bottom: -100%;
	left: 0;
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
	-o-transition: all 0.5s;
	-ms-transition: all 0.5s;
	transition: all 0.5s;
}
.grid-1 .w3agile-text h5 {
    font-size: 2em;
    color: #fff;
    text-align: center;
    padding: 6em 0 0;
}
.w3agile-text.w3agile-text-small h5, .grid_w3l .w3agile-text h5 {
    font-size: 2em;
    padding: 5em 0 0;
}
.grid_w3l {
    width: 48.5%;
    padding: 0;
}
.grid-c.grid_w3l {
    margin-right: 1em;
    padding: 0;
}
a.agilebtn {
	font-size: 1em;
	color: #fff; 
	background: #00BCD4;
	padding: 0.7em 2em;
	display: inline-block; 
	outline:none;
	margin-top: 1em; 
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
	-o-transition: all 0.5s;
	-ms-transition: all 0.5s;
	transition: all 0.5s;
	position: relative;
} 
.agilebtn::before{
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	border: 1px solid #fff;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	-ms-transition: all 0.5s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
}
.agilebtn:hover::before{
	opacity: 0;
	-webkit-transform: scale(1.2,1.2);
	-moz-transform: scale(1.2,1.2);
	-o-transform: scale(1.2,1.2);
	-ms-transform: scale(1.2,1.2);
	transform: scale(1.2,1.2);
}
.agilebtn::after{
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	opacity: 0;
	background:transparent;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	-o-transition: all 0.3s;
	-ms-transition: all 0.5s;
	transition: all 0.3s;
	-webkit-transform: scale(0.5,0.5);
	-moz-transform: scale(0.5,0.5);
	-o-transform: scale(0.5,0.5);
	-ms-transform: scale(0.5,0.5);
	transform: scale(0.5,0.5);
}
.agilebtn:hover::after{
     opacity: 1 ;
	-webkit-transform: scale(1,1);
	-moz-transform: scale(1,1);
	-o-transform: scale(1,1);
	-ms-transform: scale(1,1);
	transform: scale(1,1);
}
/*lightbox*/
/* overlay - centered modal dialog*/
.overlay-visible{
    overflow:hidden !important;
}
#cm-overlay-mask,#cm-wrap{
    position: fixed;
    left: 0;
    top: 0;
    width:100%;
    height:100%;
    z-index: 9991;
    text-align:center;
/* IE<9 support hack */
}
/* chrome bug fix causing overlay-mask to not appear 
@media screen and (-webkit-min-device-pixel-ratio:0) {
#cm-overlay-mask
{
    overflow:scroll;
}
#cm-overlay-mask::-webkit-scrollbar
{
    width:0px; 
}}*/
#cm-wrap
{
    visibility:hidden;
    white-space:nowrap;
}
#cm-wrap *
{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    
}
#cm-wrap .cm-box,
#cm-wrap .cm-scale
{
    white-space:normal;
    vertical-align:middle;
    position:relative;
    display:inline-block;

}
#cm-wrap .cm-scale
{
    height:100%;
    line-height:100%;
    width:0;
}
#cm-wrap .cm-box img,
#cm-wrap .cm-box iframe
{
    display:block;
}

/* customise mask colour */
#cm-overlay-mask
{
    background-color:#000000;
}
/* customise loader GIF */
#cm-wrap
{
    background:none;
}
#cm-wrap.cm-loaded
{
    background-image:none;
}
/* overlay border and shadow */
#cm-overlay
{
    -webkit-box-shadow: 0 0 90px #000;
    -khtml-box-shadow:0 0 90px 5px #000;
    -moz-box-shadow:0 0 90px 5px #000;
    box-shadow:0 0 90px 5px #000;
    /**/
    opacity:0;
    z-index:9992;
}
/* close link style */
#cm-wrap #cm-close
{
    display:block;
	height: 61px;
    width: 59px;
    position:absolute;
    right:0;
    top:0;
    background:transparent url(../../images/homePage/close.png) scroll no-repeat center;
    cursor:pointer;
    z-index:9993;
    text-indent:-999em;
    opacity:0.5;
}
/* prev and next buttons */
#cm-wrap #cm-prev,
#cm-wrap #cm-next
{
    display:block;
    position:absolute;
    height: 97px;
    width: 49px;
    top:50%;
    margin-top:-63px;
    text-indent:-999em;
    opacity:0.5;
    outline:none;
    z-index:9993;
}
#cm-wrap #cm-prev
{
    left:0;
    background:transparent url(../../images/homePage/prev.png) scroll no-repeat 0 center;
}
#cm-wrap #cm-next
{
    right:0;
    background:transparent url(../../images/homePage/next.png) scroll no-repeat 100% center;
}
#cm-wrap #cm-prev:hover,
#cm-wrap #cm-next:hover,
#cm-wrap #cm-close:hover
{
    opacity:1;
}
/*lightbox*/

/*-- //gallery --*/ 
/*--Contact --*/
.contact-agileits-w3layouts p {
    color: #eee;
    font-size: 14px;
    margin-top: 14px;
}
.contact-agileits-w3layouts span {
    color:#045858;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    display: inline-block;
    width: 76px;
}
.contact-agileits-w3layouts p a {
    text-decoration: none;
    color: #eee;
}
.contact-agileits-w3layouts p a:hover {
    text-decoration: none;
    color: #2b2b2b;
}
.contact-agileits-w3layouts {
    padding: 35px 60px;
    background: #ecb731;
}
.contact-map-right {
    padding: 0;
}
.contact-info {
    background: #171717;
    padding: 4em 0 3.5em;
}
.contact-agileits-w3layouts input[type="text"],.contact-agileits-w3layouts input[type="email"],.contact-agileits-w3layouts textarea{
	outline: none;
    border: none;
    border-bottom: 1px solid #fff;
    padding: 7px 10px;
    background: transparent;
    color: #fff;
    font-size: 14px;
    width: 100%;
}
.contact-agileits-w3layouts input[type="email"]{
	margin:1em 0;
}
.contact-agileits-w3layouts textarea {
    min-height: 100px;
    resize: none;
    margin-top: 1em;
}
.contact-agileits-w3layouts input[type="submit"] {
    outline: none;
    border: none;
    padding: 10px 40px;
    background: #171717;
    color: #fff;
    font-size: 15px;
    text-transform: capitalize;
    margin: 1em 0;
    letter-spacing: .5px;
    transition: .5s ease-in-out;
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    -ms-transition: .5s ease-in-out;
}
.contact-agileits-w3layouts input[type="submit"]:hover {
    background: #ffffff;
    color: #000;
    transition: .5s ease-in-out;
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    -ms-transition: .5s ease-in-out;
}
/*--placeholder-color--*/

::-webkit-input-placeholder{
	color:rgba(255, 255, 255, 0.65);
}

:-moz-placeholder { /* Firefox 18- */
   color: rgba(255, 255, 255, 0.65); 
}

::-moz-placeholder {  /* Firefox 19+ */
   color: rgba(255, 255, 255, 0.65);  
}

:-ms-input-placeholder {  
   color: rgba(255, 255, 255, 0.65);  
}
/*--//placeholder-color--*/

#map {
    width: 100%;
    height: 393px;
}
.contact-grids h5 {
    padding-bottom: 1em!important;
}
.w3_agileits_social_media-footer {
	text-align:center;
}
.w3_agileits_social_media-footer ul li {
    margin-bottom: 0!important;
    float: left!important;
    margin: 0 1em 0 0!important;
	list-style: none;
}
.w3_agileits_social_media-footer ul li a {
    display: block;
    color: #fff;
    text-decoration: none;
    width: 35px;
    height: 35px;
    border-radius: 50px;
    padding: 6px 0 0 0px;
    background: transparent;
    box-shadow:1px 1px 2px rgba(0, 0, 0, 0.9)!important;
}
.w3_agileits_social_media-footer ul li a:hover {
    box-shadow: 1px 1px 2px rgb(58, 58, 58)!important;
    color: #ecb731!important;
}
.contact-mid ul li {
    list-style: none;
    color: #fff;
    font-size: 15px;
    letter-spacing: 1px;
    margin-bottom: 0.9em;
    font-weight: 300;
}
.contact-mid ul li i {
    color: #fff;
    display: inline-block;
    padding-right: 9px;
    width: 35px;
}
.contact-mid ul li a{
    color: #fff;
	text-decoration:none;
}
.contact-mid ul li a:hover{
    color: #0086fe;
	text-decoration:none;
}
.callbacks_container ul li {
    color: #fff;
    font-size: 15px;
    letter-spacing:1px;
    line-height: 30px;
    font-weight: 300;
}
.callbacks_container ul li  a{
    color: #ecb731;
	text-decoration:none;
}
.callbacks_container ul li  a:hover{
    color: #0086fe;
	text-decoration:none;
}
.callbacks_container ul li span {
    color: #fff;
    display: block;
    font-size: 13px;
}
.callbacks_container ul li  i{
    color: #0086fe;
	padding-right:5px;
	display:inline-block;
}
/*-- Slider Part starts Here --*/
#slider3,#slider4,#slider5  {
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  margin: 0 auto;
}
.rslides_tabs {
  list-style: none;
  padding: 0;
  background: rgba(0,0,0,.25);
  box-shadow: 0 0 1px rgba(255,255,255,.3), inset 0 0 5px rgba(0,0,0,1.0);
  -moz-box-shadow: 0 0 1px rgba(255,255,255,.3), inset 0 0 5px rgba(0,0,0,1.0);
  /*-- w3layouts --*/
  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.3), inset 0 0 5px rgba(0,0,0,1.0);
  font-size: 18px;
  list-style: none;
  margin: 0 auto 50px;
  max-width: 540px;
  padding: 10px 0;
  text-align: center;
  width: 100%;
}
.rslides_tabs li {
  display: inline;
  margin-right: 1px;
}
.rslides_tabs a {
  width: auto;
  line-height: 20px;
  padding: 9px 20px;
  height: auto;
  background: transparent;
  display: inline;
}
.rslides_tabs li:first-child {
  margin-left: 0;
}
.rslides_tabs .rslides_here a {
  background: rgba(255,255,255,.1);
  color: #fff;
  font-weight: bold;
}
.events {
  list-style: none;
}
.callbacks_container {
  position: relative;
  width: 100%;
}
.callbacks {
  position: relative;
  list-style: none;
  overflow: hidden;
  width: 100%;
  padding: 0;
  margin: 0;
}
.callbacks li {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}
/*-- agileits --*/

.callbacks img {
  position: relative;
  z-index: 1;
  height: auto;
  border: 0;
}
.callbacks .caption {
	display: block;
	position: absolute;
	z-index: 2;
	font-size: 20px;
	text-shadow: none;
	color: #fff;
	left: 0;
	right: 0;
	padding: 10px 20px;
	margin: 0;
	max-width: none;
	top: 10%;
	text-align: center;
}
.callbacks_nav {
  	position: absolute;
	-webkit-tap-highlight-color: rgba(0,0,0,0);
	top: 145%;
	left: 0;
	opacity: 0.7;
	z-index: 3;
	text-indent: -9999px;
	overflow: hidden;
	text-decoration: none;
	height: 62px;
	width: 45px;
	margin-top: -65px;
}
.callbacks_nav:active {
  opacity: 1.0;
}

#slider3-pager a,#slider4-pager a ,#slider5-pager a  {
  display: inline-block;
}
#slider3-pager span,#slider4-pager span,#slider5-pager span{
}
#slider3-pager span,#slider4-pager span,#slider5-pager span{
	width:100px;
	height:15px;
	background:#fff;
	display:inline-block;
	/*-- w3layouts --*/
	border-radius:30em;
	opacity:0.6;
}
#slider3-pager .rslides_here a ,#slider4-pager .rslides_here a,#slider5-pager .rslides_here a {
  background: #FFF;
  border-radius:30em;
  opacity:1;
}
#slider3-pager a ,#slider4-pager a,#slider5-pager a  {
  padding: 0;
}
#slider3-pager li, #slider4-pager li, #slider5-pager li{
	display:inline-block;
}
.rslides {
  position: relative;
  list-style: none;
  overflow: hidden;
  width: 100%;
  padding: 0;
  margin: 0;
}
.rslides li {
  -webkit-backface-visibility: hidden;
  position: absolute;
  display: none;
  width: 100%;
  left: 0;
  top: 0;
}
.rslides li{
  position: relative;
  display: block;
}

.callbacks_tabs{
	list-style: none;
	position: absolute;
    top: 140%;
    z-index: 999;
    left: 45.2%;
	padding: 0;
	margin: 0;
}
ul.callbacks_tabs.callbacks2_tabs {
    top: 120%;
    left: 30%;
}
/*-- agileits --*/
.slider-top{
	text-align: center;
	padding:10em 0;
}
.slider-top h1{
	font-weight:700;
	font-size:48px;
	color:#010101;
}
.slider-top p{
	font-weight:400;
	font-size:20px;
	padding:1em 7em;
	color:#010101;
}
.slider-top ul.social-slide{
	display:inline-flex;
	margin: 0px;
	padding: 0px;
}
ul.social-slide li i{
	width:70px;
	height:74px;
	background:url(../../images/homePage/img-resources.png)no-repeat;
	display: inline-block;
	margin:0px 15px;
}
ul.social-slide li i.win{
	background-position:-6px 0px;
}
ul.social-slide li i.android{
	background-position:-110px 0px;
}
ul.social-slide li i.mac{
	background-position:-215px 0px;
}
.callbacks_tabs li{
 margin-left: 7px;
    display: inline-block;
}
@media screen and (max-width: 600px) {
  .callbacks_nav {
    top: 47%;
    }
}
.callbacks_tabs a{
 visibility: hidden;
}
.callbacks_tabs a:after {
	content: "\f111";
    font-size: 0;
    font-family: FontAwesome;
    visibility: visible;
    display: block;
    width: 16px;
    height: 16px;
    display: inline-block;
    background: #fff;
    border-radius: 50%;
    border: 4px solid #002663;
}
.callbacks_here a:after{
    background: #ff9900;
    border: 1px solid #ff9900;
    height: 3px;
    width: 40px;
    border-radius: 0;
    /* margin: 0 0px; */
}
a.callbacks_nav.callbacks1_nav.prev {
    background: transparent url(../../images/homePage/arrr1.png) no-repeat 0px 2px;
    left: 70%;
    height: 20px;
    width: 32px;
    /* top: 53%; */
}
.callbacks_nav.next {
    background: transparent url(../../images/homePage/arrr2.png) no-repeat 0px 2px;
    left: 80%;
    height: 20px;
    width: 32px;
    /* top: 53%; */
}

/*-- Slider part Ends Here --*/
/*--//Contact --*/
.copy-w3-agile {
    background: #000;
    padding: 1em 2em;
    text-align: center;
}
.copy-w3-agile p {
    color: #fff;
    font-size: 14px;
    letter-spacing: 1.5px;
}
.copy-w3-agile p a {
	text-decoration:none;
    color: #ecb731;
}
.copy-w3-agile p a:hover {
	text-decoration:none;
    color: #fff;
}
/*--//footer--*/
/*-- to-top --*/
#toTop {
    display: none;
    text-decoration: none;
    position: fixed;
    bottom: 30px;
    right: 25px;
    overflow: hidden;
    z-index: 999;
    width: 32px;
    height: 32px;
    border: none;
    text-indent: 100%;
    background: url(../../images/homePage/arr.png) no-repeat 0px 0px;
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
/*-- //to-top --*/
#toTop {
    z-index: 1;
}
/*--responsive--*/
@media(max-width:1600px){
	
}
@media(max-width:1440px){
	.banner {
		min-height: 600px;
	}
	.banner-image-w3layouts img {
		width: 315px;
	}
	.agile_banner_info h2 {
		font-size: 2.2em;
	}
	#typed {
		font-size: 1.6em;
		margin: 0em 0 0.5em;
	}
	p.banner-p-w3ls {
		font-size: 16px;
		line-height: 31px;
	}
	.agile_banner_info {
		margin: 6em 0 0em 14em;
	}
	.w3_agileits_social_media {
		left: 1.8em;
		top: 13.5em;
	}
	.person-info-agileits-w3layouts {
		padding: 4em;
	}
	.about-left-w3ls {
		min-height: 753px;
	}
	.person-info-agileits-w3layouts ul {
		margin-top: 2em;
	}
	.mobile-menu ul li a {
		font-size: .9em;
		padding: 0.8em 0 0.8em 1.5em;
		letter-spacing: 2px;
	}
	.mobile-menu ul {
		padding-top: 7em;
	}
	.search-agileits {
		margin: 1em 1.5em 4em;
	}
	.gallery_wthree, .work, .services, .skills-agileinfo, .mid-w3layouts {
		padding: 4em 0em;
	}
	.w3_head {
		margin: 0 0 0.9em;
		font-size: 2.3em;
	}
	.contact-info {
		padding: 3em 0 2.5em;
	}
	.mobile-menu {
		width: 24%;
		right:-24%;
	}
	section.mid-w3layouts h3 {
		font-size: 2.3em;
	}
}
@media(max-width:1366px){
	.w3_agile_logo h1 a {
		font-size: 1.06em;
		letter-spacing: 4px;
	}
	.w3_agile_logo h1 a span {
		letter-spacing: 11px;
		padding: 5px 0px 5px 13px;
	}
	.mobile-nav-button {
		margin: 3.7em 0em 0;
		right: 3%;
	}
	.agile_banner_info {
		margin: 6.3em 0 0em 12em;
	}
}
@media(max-width:1280px){
	.person-info-agileits-w3layouts {
		padding: 4em 3em;
	}
	.about-left-w3ls h5 {
		font-size: 2em;
		letter-spacing: 3px;
		line-height: 29px;
	}
}
@media(max-width:1080px){
	.banner {
		min-height: 535px;
	}
	.banner-image-w3layouts img {
		width: 275px;
	}
	.agile_banner_info h2 {
		font-size: 2em;
	}
	#typed {
		font-size: 1.3em;
		letter-spacing: 5px;
	}
	p.banner-p-w3ls {
		letter-spacing: 2px;
		width: 56%;
	}
	.agile_banner_info {
		margin: 5em 0 0em 12em;
	}
	.w3_agileits_social_media ul li {
		margin-bottom: 1.3em;
	}
	.w3_agileits_social_media {
		top: 12.5em;
	}
	.person-info-agileits-w3layouts {
		padding: 3em 3em;
	}
	.person-info-agileits-w3layouts ul li {
		margin-bottom: 20px;
	}
	.about-left-w3ls {
		min-height: 715px;
	}
	.about-left-w3ls h5 {
		margin: 5em 1.5em 0 0;
	}
	.bar-grids {
		width: 48.1%;
	}
	.bargrids-left {
		margin-right: 35px;
	}
	.agileits_service_grid_btm_left2 h5 {
		font-size: 1.3em;
	}
	.grid-c.grid_w3l {
		margin-right: 0.8em;
	}
	.sub_grid.gallery_w3l, .grid-2 {
		margin-top: 0.8em;
	}
	.grid-1 .w3agile-text h5 {
		padding: 4.5em 0 0;
	}
	.w3agile-text.w3agile-text-small h5, .grid_w3l .w3agile-text h5 {
		padding: 3.7em 0 0;
	}
	.contact-agileits-w3layouts {
		padding: 35px 35px;
	}
	.mobile-menu ul {
		padding-top: 5.2em;
	}
}
@media(max-width:1050px){
	.w3_head {
		margin: 0 0 0.7em;
		font-size: 2em;
	}
	section.mid-w3layouts h3 {
		font-size: 2em;
	}
	.gallery_wthree, .work, .services, .skills-agileinfo, .mid-w3layouts {
		padding: 3em 0em;
	}
	.bar-grids h4 {
		font-size: 1.4em;
	}
	.work h5, .contact-grids h5 {
		font-size: 17px;
		margin-bottom: 0.6em;
	}
	.work-right-w3-agileits h3 {
		font-size: 20px;
	}
	.work-right-w3-agileits h3 span {
		font-size: 20px!important;
	}
	.work h5:before, .contact-grids h5:before {
		width: 81px;
		top: 28px;
	}
	.work-right-w3-agileits h3 {
		font-size: 22px;
		margin-bottom: 8px;
	}
	.work-right-w3-agileits h3 span {
		font-size: 22px!important;
	}
	h3.w3_head.w3_head1 span {
		font-size: 12px;
	}
}
@media(max-width:1024px){
	.about-left-w3ls h5 {
		font-size: 1.8em;
		letter-spacing: 1px;
		line-height: 26px;
	}
	.about-left-w3ls {
		min-height: 699px;
	}
	.mobile-menu {
		width: 30%;
		right: -30%;
	}
}
@media(max-width:991px){
	.banner {
		min-height: 500px;
	}
	.banner-image-w3layouts img {
		width: 254px;
	}
	.agile_banner_info h2 {
		font-size: 1.8em;
	}
	#typed {
		font-size: 1.1em;
		letter-spacing: 4px;
		line-height: 1em;
	}
	p.banner-p-w3ls {
		letter-spacing: 2px;
		font-size: 14px;
	}
	.typed-cursor {
		font-size: 2em;
	}
	.w3_agileits_social_media {
		top: 11.5em;
	}
	.about-left-w3ls {
		min-height: 415px;
		background: url(../../images/homePage/about.jpg)no-repeat 0px -212px;
		background-size: cover;
		z-index: 1;
	}
	.about-left-w3ls h5 {
		margin: 6em 7.5em 0 0;
	}
	.person-info-agileits-w3layouts {
		padding: 3em 8em 0;
	}
	.bar-grids {
		width: 100%;
	}
	.bargrids-left {
		margin-right: 0;
		margin-bottom: 2em;
	}
	.work-left-agileits-w3layouts {
		margin-bottom: 1em;
	}
	.agileits_service_grid_btm_left1 img {
		width: 100%;
	}
	.agileits_service_grid_btm_left {
		margin-bottom: 2em;
	}
	.agileits_service_grid_btm_left:nth-child(3) {
		margin-bottom: 0!important;
	}
	.grid-1 img {
		width: 100%;
	}
	.grid_w3 {
		width: 100%;
	}
	.sub_grid.gallery_w3l {
		margin-bottom: .8em;
	}
	.grid-1 .w3agile-text h5 {
		padding: 7.5em 0 0;
	}
	.w3agile-text.w3agile-text-small h5, .grid_w3l .w3agile-text h5 {
		padding: 6em 0 0;
	}
	.contact-agileits-w3layouts {
		padding: 3em 8em;
	}
	.contact-grids {
		width: 100%;
		float: left;
		margin-bottom: 2em;
	}
	.contact-grids h5 {
		font-size: 14px!important;
		padding-bottom: 8px!important;
		margin-bottom: 01em!important;
	}
	.contact-grids h5:before {
		top: 22px!important;
		width: 58px!important;
	}
	.contact-grids:nth-child(3) {
		margin-bottom: 0!important;
	}
	.contact-grids:nth-child(3) {
		margin-bottom: 1em!important;
	}
	.callbacks_nav {
		top: 206%;
	}
	a.callbacks_nav.callbacks1_nav.prev {
		left: -1%;
	}
	.callbacks_nav.next {
		left: 5%;
	}
	.grid_w3l {
		width: 49%;
	}
	.contact-mid ul li ,.callbacks_container ul li{
		font-size: 14px;
	}
	.contact-mid ul li:nth-child(3) {
		margin-bottom: 0!important;
	}
}
@media(max-width:900px){
	.banner-image-w3layouts img {
		right: 4%;
	}
	.about-left-w3ls {
		background: url(../../images/homePage/about.jpg)no-repeat 0px -183px;
		background-size: cover;
	}
	.about-left-w3ls h5 {
		margin: 6em 6.5em 0 0;
	}
	.person-info-agileits-w3layouts {
		padding: 3em 4.5em 0;
	}
	.contact-agileits-w3layouts {
		padding: 3em 5.5em;
	}
	#map {
		height: 300px;
	}
}
@media(max-width:800px){
	.w3_agile_logo h1 a {
		font-size: 0.9em;
	}
	.w3_agile_logo h1 a span {
		letter-spacing: 10px;
		padding: 4px 0px 4px 11px;
	}
	.agile_banner_info {
		margin: 5em 0 0em 10em;
	}
	.mobile-menu ul li a {
		font-size: .8em;
	}
	.header {
		padding: 1.5em 2em;
	}
	.mobile-nav-button {
		margin: 3em 0em 0;
		right: 4%;
	}
	.mobile-menu ul {
		padding-top: 6em;
	}
	.mobile-menu {
		width: 35%;
		right: -35%;
	}
	.banner {
		min-height: 450px;
	}
	.banner-image-w3layouts img {
		width: 225px;
	}
	.agile_banner_info h2 {
		font-size: 1.6em;
	}
	#typed {
		font-size: 1em;
	}
	.typed-cursor {
		font-size: 1.6em;
	}
	p.banner-p-w3ls {
		letter-spacing: 1px;
		font-size: 14px;
		width: 55%;
		line-height: 24px;
	}
	#typed {
		margin: 0em 0 0.8em;
	}
	.w3_agileits_social_media ul li {
		margin-bottom: 1.1em;
	}
	.w3_agileits_social_media {
		top: 10em;
	}
	.about-left-w3ls h5 {
		margin: 6em 5.5em 0 0;
	}
	.person-info-agileits-w3layouts {
		padding: 2em 1.8em 0;
	}
	.w3_head {
		margin: 0 0 0.6em;
		font-size: 1.8em;
		letter-spacing: 1.5px;
	}
	h3.w3_head.w3_head1 span {
		font-size: 11px;
		letter-spacing: 3px;
		margin-top: 4px;
	}
	section.mid-w3layouts h3 {
		font-size: 1.8em;
		margin: 0.4em 0 0.8em;
		letter-spacing: 1px;
	}
	.progress {
		height: 15px;
		margin-bottom: 1.3em;
	}
	.bar-grids h6 {
		font-size: 0.8em;
	}
	.bar-grids h4 {
		font-size: 1.34em;
		margin-bottom: 1.2em;
	}
	.contact-agileits-w3layouts {
		padding: 2em 1.8em;
	}
	.contact-info {
		padding: 1.8em 0 2em;
	}
	.contact-grids {
		margin-bottom: 1.3em;
	}
	.w3_agileits_social_media {
		left: 1em;
	}
}
@media(max-width:768px){
	.banner {
		min-height: 415px;
	}
	.banner-image-w3layouts img {
		width: 210px;
	}
	.w3_agileits_social_media {
		top: 9em;
	}
	.about-left-w3ls {
		min-height: 340px;
		background: url(../../images/homePage/about.jpg)no-repeat 0px -159px;
		background-size: cover;
	}
	.gallery_wthree, .work, .services, .skills-agileinfo, .mid-w3layouts {
		padding: 2em 0em;
	}
	.person-info-agileits-w3layouts {
		padding: 2em 1em 0;
	}
	.person-info-agileits-w3layouts ul li {
		margin-bottom: 15px;
	}
	.person-info-agileits-w3layouts ul {
		margin-top: 1.2em;
	}
	.work h5{
		margin-left: 16px;
	}
	.contact-agileits-w3layouts {
		padding: 2em 1em;
	}
	.agile_banner_info {
		margin: 4.5em 0 0em 10em;
	}
	.about-left-w3ls h5 {
		margin: 5em 4.5em 0 0;
	}
}
@media(max-width:767px){
	
}
@media(max-width:736px){
	.banner {
		min-height: 380px;
	}
	.banner-image-w3layouts img {
		width: 185px;
	}
	.agile_banner_info {
		margin: 3.5em 0 0em 10em;
	}
	.w3_agileits_social_media ul li a {
		width: 30px;
		height: 30px;
		padding:3px 0 0 0;
	}
	.w3_agileits_social_media ul li a i {
		font-size: 13px;
	}
	.w3_agileits_social_media-footer ul li a {
		width: 30px;
		height: 30px;
	}
	.w3_agileits_social_media-footer ul li a i{
		font-size:13px;
	}
}
@media(max-width:667px){
	.grid-1 .w3agile-text h5 {
		padding: 9em 0 0;
		font-size: 1.5em;
	}
	.grid-c.grid_w3l {
		margin-right: 0.7em;
	}
	.w3agile-text.w3agile-text-small h5, .grid_w3l .w3agile-text h5 {
		padding: 7em 0 0;
	}
	.mobile-menu ul li a {
		font-size: .72em;
		padding: 1em 0 1em 1.5em;
	}
	.mobile-menu {
		width: 42%;
		right: -42%;
	}
	.agile_banner_info {
		margin: 3.5em 0 0em 7em;
	}
}
@media(max-width:640px){
	.about-left-w3ls h5 {
		font-size: 1.6em;
		line-height: 24px;
	}
}
@media(max-width:600px){
	.agile_banner_info h2 {
		font-size: 1.4em;
		letter-spacing: 1px;
	}
	#typed {
		font-size: 0.9em;
		letter-spacing: 3px;
	}
	p.banner-p-w3ls {
		width: 61%;
	}
	.agile_banner_info {
		margin: 3.5em 0 0em 5.5em;
	}
	.person-info-agileits-w3layouts p ,.work-right-w3-agileits p,.agileits_service_grid_btm_left2 p{
		font-size: 14px;
		letter-spacing: 0.5px;
		line-height:30px;
	}
	.person-info-agileits-w3layouts ul li span {
		font-size: 14.5px;
	}
	.person-info-agileits-w3layouts ul li {
		font-size: 14px;
		letter-spacing: 0.8px;
	}
	.person-info-agileits-w3layouts ul li a.botton-w3ls {
		padding: 7px 16px;
		font-size: 14px;
		margin: 5px 5px 0 0px;
	}
	.w3_head {
		font-size: 1.6em;
	}
	.work h5 {
		font-size: 16px;
		margin-bottom: 0.6em;
	}
	.work-right-w3-agileits h3 {
		font-size: 18px;
	}
	.work-right-w3-agileits h3 span {
		font-size: 18px!important;
	}
	.work-info-agileits {
		margin-top: 1.5em;
	}
	.work-left-agileits-w3layouts h6 {
		font-size: 16px;
	}
	.work-left-agileits-w3layouts h6 i {
		padding-right: 5px;
	}
	.bar-grids h4 span.glyphicon {
		margin-right: 0.4em;
	}
	section.mid-w3layouts h3 {
		font-size: 1.6em;
		letter-spacing: 1.5px;
	}
	section.mid-w3layouts a {
		padding: 7px 21px;
		font-size: 14px;
	}
	.agileits_service_grid_btm_left2 {
		padding: 1.5em 1.5em;
	}
	.grid-1 .w3agile-text h5 {
		padding: 8em 0 0;
	}
	.grid-c.grid_w3l {
		margin-right: 0.6em;
	}
	.sub_grid.gallery_w3l, .grid-2 {
		margin-top: 0.6em;
	}
	.sub_grid.gallery_w3l {
		margin-bottom: .6em;
	}
	.person-info-agileits-w3layouts p span {
		font-size: 16px;
	}
	.grid-1 .w3agile-text h5 {
		padding: 6.5em 0 0;
	}
	.contact-agileits-w3layouts input[type="submit"] {
		padding: 7px 30px;
		font-size: 14px;
	}
}
@media(max-width:568px){
	.mobile-nav-button {
		margin: 2.6em 0em 0;
	}
	.banner {
		min-height: 330px;
	}
	.banner-image-w3layouts img {
		width: 160px;
	}
	.header {
		padding: 1.5em 2em 0;
	}
	.agile_banner_info {
		margin: 4em 0 0em 5.5em;
	}
	.w3_agileits_social_media {
		top: 7.5em;
	}
	.about-left-w3ls {
		min-height: 270px;
		background: url(../../images/homePage/about.jpg)no-repeat 0px -112px;
		background-size: cover;
	}
	.about-left-w3ls h5 {
		margin: 4em 3.5em 0 0;
	}
	.grid-1 .w3agile-text h5 {
		padding: 7.5em 0 0;
	}
	.grid-1 .w3agile-text h5 {
		padding: 6em 0 0;
	}
	.grid-1 .w3agile-text h5 {
		padding: 7em 0 0;
	}
	.copy-w3-agile p {
		font-size: 13px;
	}
	.w3agile-text.w3agile-text-small h5, .grid_w3l .w3agile-text h5 {
		padding: 6em 0 0;
	}
}
@media(max-width:480px){
	.banner-image-w3layouts img {
		width: 131px;
	}
	.agile_banner_info {
		margin: 2.5em 0 0em 5.5em;
	}
	.w3_agileits_social_media ul li {
		margin-bottom: 1em;
	}
	.w3_agileits_social_media {
		top: 19em;
	}
	.banner {
		min-height: 305px;
	}
	.grid_w3l {
		width: 48.8%;
	}
	.grid-1 .w3agile-text h5 {
		padding: 5em 0 0;
	}
	.callbacks_nav {
		top: 167%;
	}
	.callbacks_nav.next {
		left: 7%;
	}
	.search-agileits {
		margin: 1em 1.1em 4em;
	}
	.mobile-menu {
		width: 50%;
		right: -50%;
	}
	.about-left-w3ls h5 {
		margin: 3.5em 2.5em 0 0;
	}
	.banner-image-w3layouts img {
		width: 180px;
		right: 6%;
	}
	.agile_banner_info {
		margin: 3em 0 0em 2.3em;
	}
	.banner {
		min-height: 32em;
	}
	p.banner-p-w3ls {
		width: 90%;
	}
	.copy-w3-agile p {
		font-size: 12.5px;
		line-height: 28px;
	}
}
@media(max-width:440px){
	.search-agileits input[type="search"] {
		padding: 6px 74px 6px 15px;
	}
	.mobile-menu {
		width: 64%;
		right: -64%;
	}
	.about-left-w3ls {
		min-height: 239px;
		background: url(../../images/homePage/about.jpg)no-repeat 0px -88px;
		background-size: cover;
	}
	.grid-c.grid_w3l {
		margin-right: 0;
		width: 100%;
		margin-bottom: 0.6em;
	}
	.grid_w3l {
		width: 100%;
	}
	.grid-1 .w3agile-text h5 {
		padding: 5.5em 0 0;
	}
	.full-height-w3 h5 {
		padding: 9.5em 0 0!important;
	}
	.copy-w3-agile {
		padding: 1em 1.5em;
	}
}
@media(max-width:414px){
	.banner {
		min-height: 29em;
	}
	.w3_agileits_social_media {
		top: 16.2em;
		left: 0.8em;
	}
	.banner-image-w3layouts img {
		width: 157px;
		right: 6%;
	}
	.agile_banner_info {
		margin: 2em 0 0em 1.5em;
	}
	.header {
		padding: 1.2em 1.5em 0;
	}
	.about-left-w3ls h5 {
		margin: 3em 2em 0 0;
	}
	.grid-1 .w3agile-text h5 {
		padding: 5em 0 0;
	}
	.full-height-w3 h5 {
		padding: 8.5em 0 0!important;
	}
	#map {
		height: 235px;
	}
	#toTop {
		bottom: 21px;
		right: 13px;
	}
	.callbacks_nav.next {
		left: 12%;
	}
}
@media(max-width:384px){
	.w3_agile_logo h1 a {
		font-size: 0.8em;
	}
	.w3_agile_logo h1 a span {
		letter-spacing: 9px;
	}
	.about-left-w3ls {
		background: url(../../images/homePage/about.jpg)no-repeat 0px -77px;
		background-size: cover;
	}
	.mobile-menu {
		width: 80%;
		right: -80%;
	}
	.grid-1 .w3agile-text h5 {
		padding: 4.5em 0 0;
	}
	.full-height-w3 h5 {
		padding: 8em 0 0!important;
	}
}
@media(max-width:375px){
	.banner-image-w3layouts img {
		width: 145px;
		right: 6%;
	}
	.about-left-w3ls h5 {
		font-size: 1.4em;
		line-height: 21px;
	}
}
@media(max-width:320px){
	.mobile-menu ul {
		padding-top: 5em;
	}
	.mobile-menu ul li {
		margin-bottom: 1em;
	}
	.search-agileits {
		margin: 1em 1.1em 2em;
	}
	.about-left-w3ls h5 {
		margin: 2em 1em 0 0;
	}
	.person-info-agileits-w3layouts ul li span {
		width: 115px;
	}
	.person-info-agileits-w3layouts ul li a.botton-w3ls {
		margin: 5px 2px 0 0px;
	}
	section.mid-w3layouts h3 {
		font-size: 1.41em;
		letter-spacing: 1px;
	}
	.w3_head {
		font-size: 1.5em;
	}
	.grid-1 .w3agile-text h5 {
		padding: 3.5em 0 0;
	}
	.work-right-w3-agileits h3 {
		line-height: 30px;
	}
	.full-height-w3 h5 {
		padding: 6em 0 0!important;
	}
}
`;
