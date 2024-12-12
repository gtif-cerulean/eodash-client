var Ho=Object.defineProperty;var is=e=>{throw TypeError(e)};var Io=(e,t,r)=>t in e?Ho(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var qr=(e,t,r)=>Io(e,typeof t!="symbol"?t+"":t,r),bi=(e,t,r)=>t.has(e)||is("Cannot "+r);var Xe=(e,t,r)=>(bi(e,t,"read from private field"),r?r.call(e):t.get(e)),Fe=(e,t,r)=>t.has(e)?is("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),xn=(e,t,r,n)=>(bi(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),he=(e,t,r)=>(bi(e,t,"access private method"),r);import{e as zo}from"./eo-dash.BIm2sYY-.js";import{r as gt,x as Q,E as st,Z as qo,T as Ls}from"./lit-element.Cu4xVypU.js";import{n as Ke,_ as Bn}from"./index.CvOlQyc6.js";import{c as $t,g as Ki}from"./commonjsHelpers.Cpj98o6Y.js";import{e as Es,i as Ps,t as Rs}from"./directive.CF8sV3Lr.js";import{p as Vo,v as Uo,c as Wo,j as ss,t as os,K as Ko,o as Go}from"./framework.CxY9FQpQ.js";import"./theme.YAEQg5us.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Hn(e,t){if(e!==void 0){let r=0;for(const n of e)yield t(n,r++)}}const Yo=`
:host {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  line-height: 1;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
form#itemfilter {
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}
form#itemfilter:not(.inline) {
  overflow-y: auto;
}
details {
  width: 100%;
}
`,Fr=`
:host, :root {
  --item-color: color-mix(
    in srgb,
    var(--primary-color) 10%,
    transparent
  );
  --item-hover-color: color-mix(
    in srgb,
    var(--secondary-color) 30%,
    transparent
  );
  --item-select-color: var(--primary-color);
  --inline-bg-color: color-mix(
    in srgb,
    var(--secondary-color) 10%,
    transparent
  );
  --border-color: color-mix(
    in srgb,
    #000000 20%,
    transparent
  );
  --background-color: #fff;
  --padding: 0.5rem;
  --text-transform: capitalize;
  --form-flex-direction: column;
  --filter-display: block;
}
* {
  font-family: Roboto, sans-serif;
}
form#itemfilter {
  flex-direction: var(--form-flex-direction);
}
eox-itemfilter-container {
  min-width: 200px;
  display: var(--filter-display);
}
eox-itemfilter-results {
  flex-grow: 1;
}
ul {
  padding-left: 0;
  margin-top: 0;
}
li {
  list-style: none;
}
li span {
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
}
.cards li span {
  display: block;
}
li label {
  display: flex;
  align-items: center;
}
details summary > * {
  display: inline;
}
details summary {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #0002;
  padding: .5rem var(--padding);
}

details > summary::-webkit-details-marker {
  display: none;
}

.title {
  font-size: 13px;
  align-items: center;
  text-transform: var(--text-transform);
}
.cards .title {
  font-size: 16px;
  font-weight: 600;
  text-wrap: auto;
  line-height: 19px;
}
.subtitle {
  font-size: 11px;
  opacity: .7;
  margin-top: 6px;
}
.cards .subtitle {
  font-size: 14px;
  color: #757575;
  text-wrap: auto;
  line-height: 19px;
}
.image {
  width: 24px;
  height: 24px;
  object-fit: cover;
  overflow: hidden;
  margin-right: 8px;
}
.cards .image {
  width: 100%;
  height: 190px;
  margin-bottom: 8px;
}
.title-container {
  display: flex;
  flex-direction: column;
}
h6.main-heading {
  font-size: 1rem;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-top: var(--padding);
  padding: 0 var(--padding);
}
details summary .title {
  display: flex;
  font-weight: 500;
}
details.details-filter summary::after,
details.details-results summary::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230009' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
  height: 24px;
  width: 24px;
}
details.details-filter summary::after {
  margin-left: auto;
  transform: rotate(90deg);
}
details[open] summary::before {
  transform: rotate(90deg);
}
details[open] summary::after {
  transform: rotate(270deg);
}
eox-itemfilter-expandcontainer {
  max-height: 200px;
}
eox-itemfilter-expandcontainer > [data-type=filter] {
  display: block;
  height: calc(100% - 32px);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 var(--padding);
}
[data-type=filter] .title,
details summary {
  text-transform: var(--text-transform);
}
li,
label,
details,
input[type="checkbox"],
input[type="radio"] {
  cursor: pointer;
}
input[type="checkbox"],
input[type="radio"] {
  margin: 0;
}
input[type="text"] {
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 5px 7px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
}
section:not(section:last-of-type) {
  margin-bottom: 1rem;
}
#section-results {
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
}
ul:not(#filters) > li {
  padding: 5px 0;
}
ul#results li {
  padding: 5px var(--padding);
}
ul#results ul.cards {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 40px;
  margin: 20px 0;
  cursor: initial;
}
ul#results ul.cards li {
  flex-basis: calc(33.3% - 77px);
  min-width: 0;
  align-self: flex-start;
}
@media screen and (max-width: 768px) {
  ul#results ul.cards li {
    flex-basis: calc(50% - 70px);
  }
}
@media screen and (max-width: 480px) {
  ul#results ul.cards li {
    flex-basis: 100%;
  }
}
section {
  position: relative;
  background-color: var(--background-color);
}
button#filter-reset {
  position: absolute;
  top: 0;
  right: var(--padding);
  padding: 2px 10px;
}
.count {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondary-color);
  padding: 0 12px;
  height: 20px;
  border-radius: 10px;
  color: var(--primary-color);
  font-weight: 500;
  margin-left: 9px;
}
eox-itemfilter-range,
tc-range-slider {
  align-items: center;
  display: block;
}
tc-range-slider {
  width: calc(100% - 16px);
  margin-left: 8px;
  margin-right: 8px;
  --width: 100%;
}
.range-before,
.range-after {
  font-size: small;
}
.range-before,
.range-after {
  margin: 1rem 0px;
}

button.reset-icon:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eclose%3C/title%3E%3Cpath d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /%3E%3C/svg%3E");
}
eox-itemfilter-expandcontainer button.reset-icon {
  margin-left: 4px;
  margin-top: -5px;
  height: 14px;
  width: 14px;
}
eox-itemfilter-expandcontainer button.reset-icon:before {
  height: 14px;
  width: 14px;
}
.inline-content {
  border: 1.5px solid var(--secondary-color);
  border-radius: 4px;
  max-height: 300px;
  overflow-y: auto;
  background: var(--inline-bg-color);
  margin-top: 4px;
  padding: 8px;
}
.inline-container {
  position: relative;
  align-items: center;
}
.inline-container-wrapper {
  width: 100%;
  position: relative;
}
.inline-container {
  position: relative;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  height: 24px;
  padding: 8px;
  flex: 1;
  justify-content: space-between;
  cursor: text;
  transition: all 0.2s ease-in-out;
  display: flex;
}
.inline-container:hover {
  border: 1px solid var(--primary-color);
}
[popover] {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background-color: var(--background-color);
  border: none;
}
.input-container {
  display: flex;
  flex: 1;
  align-items: center;
}
.input-container input,
.input-container input:focus {
  height: 100%;
  border: none;
  outline: none;
  border: 0;
  min-width: 25%;
}
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 1px;
  top: 5px;
  height: calc(100% - 10px);
  width: 34px;
  background: white;
}
button.icon {
  color: #004170;
  height: 24px;
  font-size: large;
  width: unset;
}
.inline-container::-webkit-scrollbar {
  height: 2px;
}
.inline-container::-webkit-scrollbar-thumb {
  background: lightgrey;
  border-radius: 2px;
}
.hidden {
  height: 0;
  padding: 0;
  border: none;
}
.hidden:hover {
  border: none;
}
.chip-title {
  pointer-events: none;
  text-transform: var(--text-transform);
}
.chip {
  display: flex;
  align-items: center;
  background: var(--item-color);
  border-radius: 30px;
  margin-right: 4px;
  padding: 5px 10px;
  font-size: small;
  cursor: default;
  white-space: nowrap;
}
.chip.highlighted {
  background: var(--primary-color);
  color: white;
}
.chip-close {
  cursor: pointer;
  font-weight: 600;
  position: absolute;
  right: -25px;
  background: white;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  height: 24px;
  width: 24px;
}
.chip-close:before {
  position: absolute;
  text-indent: 0;
  line-height: initial;
  height: 24px;
  width: 24px;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eclose%3C/title%3E%3Cpath d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /%3E%3C/svg%3E");
}
.chip-container {
  position: relative;
  max-width: 75%;
}
.autocomplete-container,
.text-container {
  position: relative;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: text;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background: white;
}
.autocomplete-container-wrapper,
.text-container-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.autocomplete-container-wrapper::-webkit-scrollbar {
  display: none;
}
.chip-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.chip-wrapper::-webkit-scrollbar {
  display: none;
  width: 0;
  background: transparent;
}
.autocomplete-input,
.text-input {
  flex: 1;
  border: 1px solid var(--border-color);
  outline: none;
  box-sizing: border-box;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  min-width: 150px;
}
input[type="text"].text-input,
input[type="text"].autocomplete-input {
  padding: 9px 6px !important;
  border-radius: 4px;
}
.text-input:hover,
.autocomplete-input:hover {
  border: 1px solid var(--primary-color);
}
.text-input:invalid {
  border: 1px solid red;
}
.selected-items {
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
}
.select li:hover,
.multiselect li:hover,
eox-itemfilter-results li:hover {
  background: var(--item-hover-color);
}
eox-itemfilter-results li.highlighted {
  color: var(--background-color);
  background: var(--item-select-color);
}
.selected-item span {
  margin-right: 8px;
}
.selected-item button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
}
.multiselect-container,
.select-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.multiselect-container label,
.select-container label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.multiselect-container input,
.select-container input {
  margin-right: 8px;
}
.select-overflow {
  max-height: 185px;
  overflow-y: auto;
}
.chip-title strong {
  font-weight: 500;
}
.chip-wrapper {
  max-width: 100%;
  overflow-x: scroll;
}
.chip-container {
  display: flex;
  flex: 0;
}
.input-container.dirty-filter-input {
  margin-left: 25px;
}
.error-validation {
  position: relative;
  color: red;
  font-size: x-small;
  top: -8px;
}
`,Fo=`:root,:host { --spacing: 1rem; --block-spacing-vertical: calc(var(--spacing) * 2); --block-spacing-horizontal: var(--spacing); --background-color: var(--eox-background-color, white); --color: var(--eox-color, #2c3d49); --h-color: var(--eox-h-color, var(--color)); --hover-transparency: var(--eox-hover-transparency, 20%); --bg-hover-transparency: var(--eox-bg-hover-transparency, 40%); --btn-hover-transparency: var(--eox-btn-hover-transparency, 80%); --primary-color: var(--eox-primary-color, #004170); --primary-color-hover: color-mix( in srgb, var(--primary-color) var(--hover-transparency), transparent ); --primary-bg-color-hover: color-mix( in srgb, var(--primary-color) var(--bg-hover-transparency), transparent ); --primary-btn-color-hover: color-mix( in srgb, var(--primary-color) var(--btn-hover-transparency), transparent ); --secondary-color: var(--eox-secondary-color, #c6d4df); --secondary-color-hover: color-mix( in srgb, var(--secondary-color) var(--hover-transparency), transparent ); --secondary-bg-color-hover: color-mix( in srgb, var(--secondary-color) var(--bg-hover-transparency), transparent ); --secondary-btn-color-hover: color-mix( in srgb, var(--secondary-color) var(--btn-hover-transparency), transparent ); --success: var(--eox-success, #26cc0f); --warning: var(--eox-warning, #f18e32); --error: var(--eox-error, #ff5252); --header-font-family: var(--eox-header-font-family, "Roboto", sans-serif); --body-font-family: var(--eox-body-font-family, "Roboto", sans-serif);}* { font-size: normal; font-family: var(--body-font-family); color: var(--eox-color);}h1,h2,h3,h4,h5,h6 { font-family: var(--header-font-family);}span,p,div,main,label { font-family: var(--body-font-family);}@media (min-width: 576px) { .container { max-width: 510px; padding-right: 0; padding-left: 0; --block-spacing-vertical: calc(var(--spacing) * 2.5); }}@media (min-width: 768px) { .container { max-width: 700px; --block-spacing-vertical: calc(var(--spacing) * 3); }}@media (min-width: 992px) { .container { max-width: 920px; --block-spacing-vertical: calc(var(--spacing) * 3.5); }}@media (min-width: 1200px) { .container { max-width: 1130px; --block-spacing-vertical: calc(var(--spacing) * 4); }}.container { width: 100%; margin-right: auto; margin-left: auto; display: block; padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);}h1,h2,h3 { line-height: 120%; margin-top: 0.8rem; margin-bottom: 0.8rem;}p { --font-size: 1rem; font-weight: 400; line-height: 170%; margin-top: 0.8rem; margin-bottom: 1.6rem; font-size: var(--font-size);}body { padding: 0; margin: 0;}.sb-show-main.sb-main-padded { padding: 0;}h1,h2,h3,h4,h5,h6 { --font-weight: 700;}h1 { --font-size: 3rem; --typography-spacing-vertical: 0.5rem;}h2 { --font-size: 2rem; --typography-spacing-vertical: 0.5rem;}h3 { --font-size: 1.75rem; --typography-spacing-vertical: 0.5rem;}h4 { --font-size: 1.5rem; --typography-spacing-vertical: 0.5rem;}h5 { --font-size: 1.25rem; --typography-spacing-vertical: 0.5rem;}h1,h2,h3,h4,h5,h6 { margin-top: 0; margin-bottom: var(--typography-spacing-vertical); color: var(--h-color); font-weight: var(--font-weight); font-size: var(--font-size); font-family: var(--header-font-family);}pre { position: relative; border-radius: 4px; z-index: 1; margin: 0; padding: 20px 0; background: transparent; background: var(--code-bg-color, #8e96aa24); overflow: auto;}code { display: block; padding: 0 24px; width: fit-content; min-width: 100%; line-height: var(--code-line-height, 1.7); font-family: var(--code-font-family, monospace); font-size: var(--code-font-size, var(--font-size)); color: var(--code-color, #004170);}:not(pre) > code { display: inline; border-radius: 4px; background: var(--code-bg-color, #8e96aa24); padding: var(--code-padding, 3px 6px);}button,.button { display: inline-flex; position: relative; align-items: center; color: #fff; border-width: 0; outline: none; border-radius: 4px; padding: 16px; height: 36px; cursor: pointer; font-family: inherit; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 1.25px; font-weight: 500; box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); transition-property: box-shadow, transform, opacity, background; transition-duration: 0.28s; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);}button:hover:not([disabled]):not(.icon):not(.json-editor-btntype-*),.button:hover:not([disabled]):not(.icon) { box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); background: var(--primary-btn-color-hover);}button,button:active,.button,.button:active { background: var(--primary-color);}button[disabled],.button[disabled] { opacity: 0.5; cursor: not-allowed;}button.block,.button.block { display: block;}button.outline,.button.outline { background: transparent; box-shadow: none; color: var(--primary-color); outline: 1px solid var(--primary-color);}button.outline:hover,.button.outline:hover { background: transparent;}button.icon,.button.icon,button[class*="json-editor-btntype-"] { background: transparent; border: none; box-shadow: none; padding: 0; border-radius: 50%; width: 24px; height: 24px; text-indent: -9999px;}button.icon-text,.button.icon-text { text-indent: 26px;}button.icon-text.block,.button.icon-text.block { text-indent: 20px;}button.icon:before,button.icon-text:before,.button.icon:before,.button.icon-text:before { position: absolute; text-indent: 0; line-height: initial;}button.icon-text.block:before,.button.icon-text.block:before { text-indent: -54px;}button.icon:before,.button.icon:before,button[class*="json-editor-btntype-"]::before { width: 24px; height: 24px; margin-right: 0;}button.icon-text:before,.button.icon-text:before { width: 18px; height: 18px;}button.small,.button.small { height: 28px; padding: 12.4px; font-size: 0.75rem;}button.smallest.icon,button.smallest.icon::before { height: 16px; width: 16px; padding: 0;}input[type="checkbox"] { appearance: none; -webkit-appearance: none; margin: 0; cursor: pointer; display: flex; flex-direction: row; align-items: center; width: 24px; height: 24px;}input[type="checkbox"]:after { display: block; content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-blank-outline%3C/title%3E%3Cpath d='M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z' /%3E%3C/svg%3E"); width: 20px; height: 20px; margin-right: 4px;}input[type="checkbox"]:checked:after { content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-marked%3C/title%3E%3Cpath d='M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z' /%3E%3C/svg%3E");}textarea { height: 90px; resize: none; border-radius: 4px; box-sizing: border-box !important; width: 100%; padding: 5px 7px; border: 1px solid var(--secondary-color); font-size: smaller; background: var(--background-color);}input[type="text"],input[type="url"],input[type="email"],input[type="password"],input[type="text"],input[type="number"],input[type="search"],input[type="tel"],select { box-sizing: border-box; width: 100%; margin-top: 0.5rem; margin-bottom: 0.5rem; padding: 5px 7px; border-radius: 4px; border: 1px solid #0004;}ul.list-wrap { padding: 0;}ul.list-wrap li:hover,ul.list-wrap li.selected { background: var(--secondary-bg-color-hover);}ul.list-wrap li { list-style: none; padding: 4px;}ul.list-wrap li { border-bottom: 1.2px solid var(--secondary-color);}ul.list-wrap li:first-child { border-top: 1.2px solid var(--secondary-color);}ul.list-wrap li .list { width: 100%; align-items: center; justify-content: space-between; display: flex; align-items: center; cursor: pointer; font-size: small; gap: 10px;}ul.list-wrap li .list span { display: flex; align-items: center; cursor: pointer; font-size: small; flex-grow: 1;}input[type="radio"] { appearance: none; -webkit-appearance: none; margin: 0; cursor: pointer; display: flex; flex-direction: row; align-items: center; width: 24px; height: 24px;}label span { font-size: small;}input[type="radio"]:after { display: block; content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-blank%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' /%3E%3C/svg%3E"); width: 20px; height: 20px; margin-right: 4px;}input[type="radio"]:checked:after { content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-marked%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z' /%3E%3C/svg%3E");}input[type="range"] { -webkit-appearance: none; width: 90%; margin-left: 5%; height: 6px; border-radius: 5px; background: #d7dcdf; outline: none; padding: 0;}input[type="range"]::-webkit-slider-thumb { appearance: none; width: 15px; height: 15px; border-radius: 50%; background: #2c3e50; cursor: pointer; transition: background 0.15s ease-in-out;}.range-slider { margin: 60px 0 0 0;}.range-slider { width: 100%;}input[type="range"]::-webkit-slider-thumb:hover { background: #00416f;}input[type="range"]:active::-webkit-slider-thumb { background: #00416f;}input[type="range"]::-moz-range-thumb { width: 15px; height: 15px; border: 0; border-radius: 50%; background: #2c3e50; cursor: pointer; transition: background 0.15s ease-in-out;}input[type="range"]::-moz-range-thumb:hover { background: #00416f;}input[type="range"]:active::-moz-range-thumb { background: #00416f;}input[type="range"]:focus::-webkit-slider-thumb { box-shadow: 0 0 0 3px #fff0, 0 0 0 6px #00416f00;}.range-slider__value { display: inline-block; position: relative; width: 60px; color: #fff; line-height: 20px; text-align: center; border-radius: 3px; background: #2c3e50; padding: 5px 10px; margin-left: 8px;}.range-slider__value:after { position: absolute; top: 8px; left: -7px; width: 0; height: 0; border-top: 7px solid transparent; border-right: 7px solid #2c3e50; border-bottom: 7px solid transparent; content: "";}input::-moz-focus-inner,input::-moz-focus-outer { border: 0;}`;var Dn,Ts;class Zo extends gt{constructor(){super();Fe(this,Dn);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return Q`
      <style>
        ${!this.unstyled&&Fr}
      </style>

      ${Ke(this.filterObject.featured,()=>Q`<slot name="filter"></slot>`,()=>Q`<details
            @toggle="${he(this,Dn,Ts)}"
            class="details-filter"
            ?open=${this.filterObject.expanded||st}
          >
            <summary>
              <span
                class="title"
                style="${!this.filterObject.title&&"text-transform: var(--text-transform)"}"
              >
                ${this.filterObject.title||this.filterObject.key||"Filter"}
                <slot name="reset-button"></slot>
              </span>
            </summary>
            <div>
              <slot name="filter"></slot>
            </div>
          </details>`)}
    `}}Dn=new WeakSet,Ts=function(r){this.dispatchEvent(new CustomEvent("details-toggled",{detail:r,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",Zo);function At(e){return Array.isArray?Array.isArray(e):js(e)==="[object Array]"}const Xo=1/0;function Jo(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-Xo?"-0":t}function Qo(e){return e==null?"":Jo(e)}function ht(e){return typeof e=="string"}function Ds(e){return typeof e=="number"}function ea(e){return e===!0||e===!1||ta(e)&&js(e)=="[object Boolean]"}function Os(e){return typeof e=="object"}function ta(e){return Os(e)&&e!==null}function Je(e){return e!=null}function mi(e){return!e.trim().length}function js(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const ra="Incorrect 'index' type",na=e=>`Invalid value for key ${e}`,ia=e=>`Pattern length exceeds max of ${e}.`,sa=e=>`Missing ${e} property in key`,oa=e=>`Property 'weight' in key '${e}' must be a positive integer`,as=Object.prototype.hasOwnProperty;class aa{constructor(t){this._keys=[],this._keyMap={};let r=0;t.forEach(n=>{let i=Ns(n);this._keys.push(i),this._keyMap[i.id]=i,r+=i.weight}),this._keys.forEach(n=>{n.weight/=r})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Ns(e){let t=null,r=null,n=null,i=1,s=null;if(ht(e)||At(e))n=e,t=ls(e),r=Si(e);else{if(!as.call(e,"name"))throw new Error(sa("name"));const a=e.name;if(n=a,as.call(e,"weight")&&(i=e.weight,i<=0))throw new Error(oa(a));t=ls(a),r=Si(a),s=e.getFn}return{path:t,id:r,weight:i,src:n,getFn:s}}function ls(e){return At(e)?e:e.split(".")}function Si(e){return At(e)?e.join("."):e}function la(e,t){let r=[],n=!1;const i=(s,a,l)=>{if(Je(s))if(!a[l])r.push(s);else{let c=a[l];const u=s[c];if(!Je(u))return;if(l===a.length-1&&(ht(u)||Ds(u)||ea(u)))r.push(Qo(u));else if(At(u)){n=!0;for(let p=0,f=u.length;p<f;p+=1)i(u[p],a,l+1)}else a.length&&i(u,a,l+1)}};return i(e,ht(t)?t.split("."):t,0),n?r:r[0]}const ca={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},ua={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},da={location:0,threshold:.6,distance:100},ha={useExtendedSearch:!1,getFn:la,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var J={...ua,...ca,...da,...ha};const fa=/[^ ]+/g;function pa(e=1,t=3){const r=new Map,n=Math.pow(10,t);return{get(i){const s=i.match(fa).length;if(r.has(s))return r.get(s);const a=1/Math.pow(s,.5*e),l=parseFloat(Math.round(a*n)/n);return r.set(s,l),l},clear(){r.clear()}}}class Gi{constructor({getFn:t=J.getFn,fieldNormWeight:r=J.fieldNormWeight}={}){this.norm=pa(r,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((r,n)=>{this._keysMap[r.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,ht(this.docs[0])?this.docs.forEach((t,r)=>{this._addString(t,r)}):this.docs.forEach((t,r)=>{this._addObject(t,r)}),this.norm.clear())}add(t){const r=this.size();ht(t)?this._addString(t,r):this._addObject(t,r)}removeAt(t){this.records.splice(t,1);for(let r=t,n=this.size();r<n;r+=1)this.records[r].i-=1}getValueForItemAtKeyId(t,r){return t[this._keysMap[r]]}size(){return this.records.length}_addString(t,r){if(!Je(t)||mi(t))return;let n={v:t,i:r,n:this.norm.get(t)};this.records.push(n)}_addObject(t,r){let n={i:r,$:{}};this.keys.forEach((i,s)=>{let a=i.getFn?i.getFn(t):this.getFn(t,i.path);if(Je(a)){if(At(a)){let l=[];const c=[{nestedArrIndex:-1,value:a}];for(;c.length;){const{nestedArrIndex:u,value:p}=c.pop();if(Je(p))if(ht(p)&&!mi(p)){let f={v:p,i:u,n:this.norm.get(p)};l.push(f)}else At(p)&&p.forEach((f,b)=>{c.push({nestedArrIndex:b,value:f})})}n.$[s]=l}else if(ht(a)&&!mi(a)){let l={v:a,n:this.norm.get(a)};n.$[s]=l}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function Bs(e,t,{getFn:r=J.getFn,fieldNormWeight:n=J.fieldNormWeight}={}){const i=new Gi({getFn:r,fieldNormWeight:n});return i.setKeys(e.map(Ns)),i.setSources(t),i.create(),i}function ga(e,{getFn:t=J.getFn,fieldNormWeight:r=J.fieldNormWeight}={}){const{keys:n,records:i}=e,s=new Gi({getFn:t,fieldNormWeight:r});return s.setKeys(n),s.setIndexRecords(i),s}function Mn(e,{errors:t=0,currentLocation:r=0,expectedLocation:n=0,distance:i=J.distance,ignoreLocation:s=J.ignoreLocation}={}){const a=t/e.length;if(s)return a;const l=Math.abs(n-r);return i?a+l/i:l?1:a}function ya(e=[],t=J.minMatchCharLength){let r=[],n=-1,i=-1,s=0;for(let a=e.length;s<a;s+=1){let l=e[s];l&&n===-1?n=s:!l&&n!==-1&&(i=s-1,i-n+1>=t&&r.push([n,i]),n=-1)}return e[s-1]&&s-n>=t&&r.push([n,s-1]),r}const Kt=32;function ba(e,t,r,{location:n=J.location,distance:i=J.distance,threshold:s=J.threshold,findAllMatches:a=J.findAllMatches,minMatchCharLength:l=J.minMatchCharLength,includeMatches:c=J.includeMatches,ignoreLocation:u=J.ignoreLocation}={}){if(t.length>Kt)throw new Error(ia(Kt));const p=t.length,f=e.length,b=Math.max(0,Math.min(n,f));let m=s,x=b;const _=l>1||c,L=_?Array(f):[];let S;for(;(S=e.indexOf(t,x))>-1;){let de=Mn(t,{currentLocation:S,expectedLocation:b,distance:i,ignoreLocation:u});if(m=Math.min(de,m),x=S+p,_){let ae=0;for(;ae<p;)L[S+ae]=1,ae+=1}}x=-1;let N=[],H=1,K=p+f;const V=1<<p-1;for(let de=0;de<p;de+=1){let ae=0,fe=K;for(;ae<fe;)Mn(t,{errors:de,currentLocation:b+fe,expectedLocation:b,distance:i,ignoreLocation:u})<=m?ae=fe:K=fe,fe=Math.floor((K-ae)/2+ae);K=fe;let ee=Math.max(1,b-fe+1),G=a?f:Math.min(b+fe,f)+p,be=Array(G+2);be[G+1]=(1<<de)-1;for(let O=G;O>=ee;O-=1){let k=O-1,C=r[e.charAt(k)];if(_&&(L[k]=+!!C),be[O]=(be[O+1]<<1|1)&C,de&&(be[O]|=(N[O+1]|N[O])<<1|1|N[O+1]),be[O]&V&&(H=Mn(t,{errors:de,currentLocation:k,expectedLocation:b,distance:i,ignoreLocation:u}),H<=m)){if(m=H,x=k,x<=b)break;ee=Math.max(1,2*b-x)}}if(Mn(t,{errors:de+1,currentLocation:b,expectedLocation:b,distance:i,ignoreLocation:u})>m)break;N=be}const ie={isMatch:x>=0,score:Math.max(.001,H)};if(_){const de=ya(L,l);de.length?c&&(ie.indices=de):ie.isMatch=!1}return ie}function ma(e){let t={};for(let r=0,n=e.length;r<n;r+=1){const i=e.charAt(r);t[i]=(t[i]||0)|1<<n-r-1}return t}class Hs{constructor(t,{location:r=J.location,threshold:n=J.threshold,distance:i=J.distance,includeMatches:s=J.includeMatches,findAllMatches:a=J.findAllMatches,minMatchCharLength:l=J.minMatchCharLength,isCaseSensitive:c=J.isCaseSensitive,ignoreLocation:u=J.ignoreLocation}={}){if(this.options={location:r,threshold:n,distance:i,includeMatches:s,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:c,ignoreLocation:u},this.pattern=c?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const p=(b,m)=>{this.chunks.push({pattern:b,alphabet:ma(b),startIndex:m})},f=this.pattern.length;if(f>Kt){let b=0;const m=f%Kt,x=f-m;for(;b<x;)p(this.pattern.substr(b,Kt),b),b+=Kt;if(m){const _=f-Kt;p(this.pattern.substr(_),_)}}else p(this.pattern,0)}searchIn(t){const{isCaseSensitive:r,includeMatches:n}=this.options;if(r||(t=t.toLowerCase()),this.pattern===t){let x={isMatch:!0,score:0};return n&&(x.indices=[[0,t.length-1]]),x}const{location:i,distance:s,threshold:a,findAllMatches:l,minMatchCharLength:c,ignoreLocation:u}=this.options;let p=[],f=0,b=!1;this.chunks.forEach(({pattern:x,alphabet:_,startIndex:L})=>{const{isMatch:S,score:N,indices:H}=ba(t,x,_,{location:i+L,distance:s,threshold:a,findAllMatches:l,minMatchCharLength:c,includeMatches:n,ignoreLocation:u});S&&(b=!0),f+=N,S&&H&&(p=[...p,...H])});let m={isMatch:b,score:b?f/this.chunks.length:1};return b&&n&&(m.indices=p),m}}class Tt{constructor(t){this.pattern=t}static isMultiMatch(t){return cs(t,this.multiRegex)}static isSingleMatch(t){return cs(t,this.singleRegex)}search(){}}function cs(e,t){const r=e.match(t);return r?r[1]:null}class va extends Tt{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const r=t===this.pattern;return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class wa extends Tt{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const n=t.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class xa extends Tt{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const r=t.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class Ma extends Tt{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const r=!t.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,t.length-1]}}}class $a extends Tt{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const r=t.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class _a extends Tt{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const r=!t.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,t.length-1]}}}class Is extends Tt{constructor(t,{location:r=J.location,threshold:n=J.threshold,distance:i=J.distance,includeMatches:s=J.includeMatches,findAllMatches:a=J.findAllMatches,minMatchCharLength:l=J.minMatchCharLength,isCaseSensitive:c=J.isCaseSensitive,ignoreLocation:u=J.ignoreLocation}={}){super(t),this._bitapSearch=new Hs(t,{location:r,threshold:n,distance:i,includeMatches:s,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:c,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class zs extends Tt{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let r=0,n;const i=[],s=this.pattern.length;for(;(n=t.indexOf(this.pattern,r))>-1;)r=n+s,i.push([n,r-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const Ci=[va,zs,xa,Ma,_a,$a,wa,Is],us=Ci.length,Aa=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Sa="|";function Ca(e,t={}){return e.split(Sa).map(r=>{let n=r.trim().split(Aa).filter(s=>s&&!!s.trim()),i=[];for(let s=0,a=n.length;s<a;s+=1){const l=n[s];let c=!1,u=-1;for(;!c&&++u<us;){const p=Ci[u];let f=p.isMultiMatch(l);f&&(i.push(new p(f,t)),c=!0)}if(!c)for(u=-1;++u<us;){const p=Ci[u];let f=p.isSingleMatch(l);if(f){i.push(new p(f,t));break}}}return i})}const ka=new Set([Is.type,zs.type]);class La{constructor(t,{isCaseSensitive:r=J.isCaseSensitive,includeMatches:n=J.includeMatches,minMatchCharLength:i=J.minMatchCharLength,ignoreLocation:s=J.ignoreLocation,findAllMatches:a=J.findAllMatches,location:l=J.location,threshold:c=J.threshold,distance:u=J.distance}={}){this.query=null,this.options={isCaseSensitive:r,includeMatches:n,minMatchCharLength:i,findAllMatches:a,ignoreLocation:s,location:l,threshold:c,distance:u},this.pattern=r?t:t.toLowerCase(),this.query=Ca(this.pattern,this.options)}static condition(t,r){return r.useExtendedSearch}searchIn(t){const r=this.query;if(!r)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:i}=this.options;t=i?t:t.toLowerCase();let s=0,a=[],l=0;for(let c=0,u=r.length;c<u;c+=1){const p=r[c];a.length=0,s=0;for(let f=0,b=p.length;f<b;f+=1){const m=p[f],{isMatch:x,indices:_,score:L}=m.search(t);if(x){if(s+=1,l+=L,n){const S=m.constructor.type;ka.has(S)?a=[...a,..._]:a.push(_)}}else{l=0,s=0,a.length=0;break}}if(s){let f={isMatch:!0,score:l/s};return n&&(f.indices=a),f}}return{isMatch:!1,score:1}}}const ki=[];function Ea(...e){ki.push(...e)}function Li(e,t){for(let r=0,n=ki.length;r<n;r+=1){let i=ki[r];if(i.condition(e,t))return new i(e,t)}return new Hs(e,t)}const Cn={AND:"$and",OR:"$or"},Ei={PATH:"$path",PATTERN:"$val"},Pi=e=>!!(e[Cn.AND]||e[Cn.OR]),Pa=e=>!!e[Ei.PATH],Ra=e=>!At(e)&&Os(e)&&!Pi(e),ds=e=>({[Cn.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function qs(e,t,{auto:r=!0}={}){const n=i=>{let s=Object.keys(i);const a=Pa(i);if(!a&&s.length>1&&!Pi(i))return n(ds(i));if(Ra(i)){const c=a?i[Ei.PATH]:s[0],u=a?i[Ei.PATTERN]:i[c];if(!ht(u))throw new Error(na(c));const p={keyId:Si(c),pattern:u};return r&&(p.searcher=Li(u,t)),p}let l={children:[],operator:s[0]};return s.forEach(c=>{const u=i[c];At(u)&&u.forEach(p=>{l.children.push(n(p))})}),l};return Pi(e)||(e=ds(e)),n(e)}function Ta(e,{ignoreFieldNorm:t=J.ignoreFieldNorm}){e.forEach(r=>{let n=1;r.matches.forEach(({key:i,norm:s,score:a})=>{const l=i?i.weight:null;n*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(t?1:s))}),r.score=n})}function Da(e,t){const r=e.matches;t.matches=[],Je(r)&&r.forEach(n=>{if(!Je(n.indices)||!n.indices.length)return;const{indices:i,value:s}=n;let a={indices:i,value:s};n.key&&(a.key=n.key.src),n.idx>-1&&(a.refIndex=n.idx),t.matches.push(a)})}function Oa(e,t){t.score=e.score}function ja(e,t,{includeMatches:r=J.includeMatches,includeScore:n=J.includeScore}={}){const i=[];return r&&i.push(Da),n&&i.push(Oa),e.map(s=>{const{idx:a}=s,l={item:t[a],refIndex:a};return i.length&&i.forEach(c=>{c(s,l)}),l})}class Dt{constructor(t,r={},n){this.options={...J,...r},this.options.useExtendedSearch,this._keyStore=new aa(this.options.keys),this.setCollection(t,n)}setCollection(t,r){if(this._docs=t,r&&!(r instanceof Gi))throw new Error(ra);this._myIndex=r||Bs(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){Je(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const r=[];for(let n=0,i=this._docs.length;n<i;n+=1){const s=this._docs[n];t(s,n)&&(this.removeAt(n),n-=1,i-=1,r.push(s))}return r}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:r=-1}={}){const{includeMatches:n,includeScore:i,shouldSort:s,sortFn:a,ignoreFieldNorm:l}=this.options;let c=ht(t)?ht(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return Ta(c,{ignoreFieldNorm:l}),s&&c.sort(a),Ds(r)&&r>-1&&(c=c.slice(0,r)),ja(c,this._docs,{includeMatches:n,includeScore:i})}_searchStringList(t){const r=Li(t,this.options),{records:n}=this._myIndex,i=[];return n.forEach(({v:s,i:a,n:l})=>{if(!Je(s))return;const{isMatch:c,score:u,indices:p}=r.searchIn(s);c&&i.push({item:s,idx:a,matches:[{score:u,value:s,norm:l,indices:p}]})}),i}_searchLogical(t){const r=qs(t,this.options),n=(l,c,u)=>{if(!l.children){const{keyId:f,searcher:b}=l,m=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(c,f),searcher:b});return m&&m.length?[{idx:u,item:c,matches:m}]:[]}const p=[];for(let f=0,b=l.children.length;f<b;f+=1){const m=l.children[f],x=n(m,c,u);if(x.length)p.push(...x);else if(l.operator===Cn.AND)return[]}return p},i=this._myIndex.records,s={},a=[];return i.forEach(({$:l,i:c})=>{if(Je(l)){let u=n(r,l,c);u.length&&(s[c]||(s[c]={idx:c,item:l,matches:[]},a.push(s[c])),u.forEach(({matches:p})=>{s[c].matches.push(...p)}))}}),a}_searchObjectList(t){const r=Li(t,this.options),{keys:n,records:i}=this._myIndex,s=[];return i.forEach(({$:a,i:l})=>{if(!Je(a))return;let c=[];n.forEach((u,p)=>{c.push(...this._findMatches({key:u,value:a[p],searcher:r}))}),c.length&&s.push({idx:l,item:a,matches:c})}),s}_findMatches({key:t,value:r,searcher:n}){if(!Je(r))return[];let i=[];if(At(r))r.forEach(({v:s,i:a,n:l})=>{if(!Je(s))return;const{isMatch:c,score:u,indices:p}=n.searchIn(s);c&&i.push({score:u,key:t,value:s,idx:a,norm:l,indices:p})});else{const{v:s,n:a}=r,{isMatch:l,score:c,indices:u}=n.searchIn(s);l&&i.push({score:c,key:t,value:s,norm:a,indices:u})}return i}}Dt.version="7.0.0";Dt.createIndex=Bs;Dt.parseIndex=ga;Dt.config=J;Dt.parseQuery=qs;Ea(La);function Vs(e,t){const r=new Dt(t.filterProperties,{keys:["title"]}),n=e.target.value,s=r.search(n).map(a=>a.item.key||a.item.keys.join("|"));Object.keys(t.filters).forEach(a=>{t.querySelector(`[data-details="${a}"]`).parentElement.style.display=s.includes(a)||!n?"":"none"})}function Na(e,t){const r=e.target.getAttribute("data-close").replace("|","-");t.querySelector(`#filter-${r}`).reset(),t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}const Ri=Math.min,yr=Math.max,kn=Math.round,$n=Math.floor,ft=e=>({x:e,y:e});function Us(e){return e.split("-")[0]}function Ba(e){return e.split("-")[1]}function Ha(e){return e==="x"?"y":"x"}function Ia(e){return e==="y"?"height":"width"}function Ws(e){return["top","bottom"].includes(Us(e))?"y":"x"}function za(e){return Ha(Ws(e))}function Ks(e){const{x:t,y:r,width:n,height:i}=e;return{width:n,height:i,top:r,left:t,right:t+n,bottom:r+i,x:t,y:r}}function hs(e,t,r){let{reference:n,floating:i}=e;const s=Ws(t),a=za(t),l=Ia(a),c=Us(t),u=s==="y",p=n.x+n.width/2-i.width/2,f=n.y+n.height/2-i.height/2,b=n[l]/2-i[l]/2;let m;switch(c){case"top":m={x:p,y:n.y-i.height};break;case"bottom":m={x:p,y:n.y+n.height};break;case"right":m={x:n.x+n.width,y:f};break;case"left":m={x:n.x-i.width,y:f};break;default:m={x:n.x,y:n.y}}switch(Ba(t)){case"start":m[a]-=b*(r&&u?-1:1);break;case"end":m[a]+=b*(r&&u?-1:1);break}return m}const qa=async(e,t,r)=>{const{placement:n="bottom",strategy:i="absolute",middleware:s=[],platform:a}=r,l=s.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(t));let u=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:p,y:f}=hs(u,n,c),b=n,m={},x=0;for(let _=0;_<l.length;_++){const{name:L,fn:S}=l[_],{x:N,y:H,data:K,reset:V}=await S({x:p,y:f,initialPlacement:n,placement:b,strategy:i,middlewareData:m,rects:u,platform:a,elements:{reference:e,floating:t}});p=N??p,f=H??f,m={...m,[L]:{...m[L],...K}},V&&x<=50&&(x++,typeof V=="object"&&(V.placement&&(b=V.placement),V.rects&&(u=V.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:i}):V.rects),{x:p,y:f}=hs(u,b,c)),_=-1)}return{x:p,y:f,placement:b,strategy:i,middlewareData:m}};function In(){return typeof window<"u"}function Mr(e){return Gs(e)?(e.nodeName||"").toLowerCase():"#document"}function Qe(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function yt(e){var t;return(t=(Gs(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Gs(e){return In()?e instanceof Node||e instanceof Qe(e).Node:!1}function ot(e){return In()?e instanceof Element||e instanceof Qe(e).Element:!1}function pt(e){return In()?e instanceof HTMLElement||e instanceof Qe(e).HTMLElement:!1}function fs(e){return!In()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Qe(e).ShadowRoot}function Zr(e){const{overflow:t,overflowX:r,overflowY:n,display:i}=at(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!["inline","contents"].includes(i)}function Va(e){return["table","td","th"].includes(Mr(e))}function zn(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Yi(e){const t=Fi(),r=ot(e)?at(e):e;return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(r.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(r.contain||"").includes(n))}function Ua(e){let t=Pt(e);for(;pt(t)&&!vr(t);){if(Yi(t))return t;if(zn(t))return null;t=Pt(t)}return null}function Fi(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function vr(e){return["html","body","#document"].includes(Mr(e))}function at(e){return Qe(e).getComputedStyle(e)}function qn(e){return ot(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Pt(e){if(Mr(e)==="html")return e;const t=e.assignedSlot||e.parentNode||fs(e)&&e.host||yt(e);return fs(t)?t.host:t}function Ys(e){const t=Pt(e);return vr(t)?e.ownerDocument?e.ownerDocument.body:e.body:pt(t)&&Zr(t)?t:Ys(t)}function Ur(e,t,r){var n;t===void 0&&(t=[]),r===void 0&&(r=!0);const i=Ys(e),s=i===((n=e.ownerDocument)==null?void 0:n.body),a=Qe(i);if(s){const l=Ti(a);return t.concat(a,a.visualViewport||[],Zr(i)?i:[],l&&r?Ur(l):[])}return t.concat(i,Ur(i,[],r))}function Ti(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Fs(e){const t=at(e);let r=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=pt(e),s=i?e.offsetWidth:r,a=i?e.offsetHeight:n,l=kn(r)!==s||kn(n)!==a;return l&&(r=s,n=a),{width:r,height:n,$:l}}function Zi(e){return ot(e)?e:e.contextElement}function br(e){const t=Zi(e);if(!pt(t))return ft(1);const r=t.getBoundingClientRect(),{width:n,height:i,$:s}=Fs(t);let a=(s?kn(r.width):r.width)/n,l=(s?kn(r.height):r.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const Wa=ft(0);function Zs(e){const t=Qe(e);return!Fi()||!t.visualViewport?Wa:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ka(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==Qe(e)?!1:t}function Gt(e,t,r,n){t===void 0&&(t=!1),r===void 0&&(r=!1);const i=e.getBoundingClientRect(),s=Zi(e);let a=ft(1);t&&(n?ot(n)&&(a=br(n)):a=br(e));const l=Ka(s,r,n)?Zs(s):ft(0);let c=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,p=i.width/a.x,f=i.height/a.y;if(s){const b=Qe(s),m=n&&ot(n)?Qe(n):n;let x=b,_=Ti(x);for(;_&&n&&m!==x;){const L=br(_),S=_.getBoundingClientRect(),N=at(_),H=S.left+(_.clientLeft+parseFloat(N.paddingLeft))*L.x,K=S.top+(_.clientTop+parseFloat(N.paddingTop))*L.y;c*=L.x,u*=L.y,p*=L.x,f*=L.y,c+=H,u+=K,x=Qe(_),_=Ti(x)}}return Ks({width:p,height:f,x:c,y:u})}function Xi(e,t){const r=qn(e).scrollLeft;return t?t.left+r:Gt(yt(e)).left+r}function Xs(e,t,r){r===void 0&&(r=!1);const n=e.getBoundingClientRect(),i=n.left+t.scrollLeft-(r?0:Xi(e,n)),s=n.top+t.scrollTop;return{x:i,y:s}}function Ga(e){let{elements:t,rect:r,offsetParent:n,strategy:i}=e;const s=i==="fixed",a=yt(n),l=t?zn(t.floating):!1;if(n===a||l&&s)return r;let c={scrollLeft:0,scrollTop:0},u=ft(1);const p=ft(0),f=pt(n);if((f||!f&&!s)&&((Mr(n)!=="body"||Zr(a))&&(c=qn(n)),pt(n))){const m=Gt(n);u=br(n),p.x=m.x+n.clientLeft,p.y=m.y+n.clientTop}const b=a&&!f&&!s?Xs(a,c,!0):ft(0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-c.scrollLeft*u.x+p.x+b.x,y:r.y*u.y-c.scrollTop*u.y+p.y+b.y}}function Ya(e){return Array.from(e.getClientRects())}function Fa(e){const t=yt(e),r=qn(e),n=e.ownerDocument.body,i=yr(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),s=yr(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let a=-r.scrollLeft+Xi(e);const l=-r.scrollTop;return at(n).direction==="rtl"&&(a+=yr(t.clientWidth,n.clientWidth)-i),{width:i,height:s,x:a,y:l}}function Za(e,t){const r=Qe(e),n=yt(e),i=r.visualViewport;let s=n.clientWidth,a=n.clientHeight,l=0,c=0;if(i){s=i.width,a=i.height;const u=Fi();(!u||u&&t==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:s,height:a,x:l,y:c}}function Xa(e,t){const r=Gt(e,!0,t==="fixed"),n=r.top+e.clientTop,i=r.left+e.clientLeft,s=pt(e)?br(e):ft(1),a=e.clientWidth*s.x,l=e.clientHeight*s.y,c=i*s.x,u=n*s.y;return{width:a,height:l,x:c,y:u}}function ps(e,t,r){let n;if(t==="viewport")n=Za(e,r);else if(t==="document")n=Fa(yt(e));else if(ot(t))n=Xa(t,r);else{const i=Zs(e);n={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Ks(n)}function Js(e,t){const r=Pt(e);return r===t||!ot(r)||vr(r)?!1:at(r).position==="fixed"||Js(r,t)}function Ja(e,t){const r=t.get(e);if(r)return r;let n=Ur(e,[],!1).filter(l=>ot(l)&&Mr(l)!=="body"),i=null;const s=at(e).position==="fixed";let a=s?Pt(e):e;for(;ot(a)&&!vr(a);){const l=at(a),c=Yi(a);!c&&l.position==="fixed"&&(i=null),(s?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Zr(a)&&!c&&Js(e,a))?n=n.filter(p=>p!==a):i=l,a=Pt(a)}return t.set(e,n),n}function Qa(e){let{element:t,boundary:r,rootBoundary:n,strategy:i}=e;const a=[...r==="clippingAncestors"?zn(t)?[]:Ja(t,this._c):[].concat(r),n],l=a[0],c=a.reduce((u,p)=>{const f=ps(t,p,i);return u.top=yr(f.top,u.top),u.right=Ri(f.right,u.right),u.bottom=Ri(f.bottom,u.bottom),u.left=yr(f.left,u.left),u},ps(t,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function el(e){const{width:t,height:r}=Fs(e);return{width:t,height:r}}function tl(e,t,r){const n=pt(t),i=yt(t),s=r==="fixed",a=Gt(e,!0,s,t);let l={scrollLeft:0,scrollTop:0};const c=ft(0);if(n||!n&&!s)if((Mr(t)!=="body"||Zr(i))&&(l=qn(t)),n){const b=Gt(t,!0,s,t);c.x=b.x+t.clientLeft,c.y=b.y+t.clientTop}else i&&(c.x=Xi(i));const u=i&&!n&&!s?Xs(i,l):ft(0),p=a.left+l.scrollLeft-c.x-u.x,f=a.top+l.scrollTop-c.y-u.y;return{x:p,y:f,width:a.width,height:a.height}}function vi(e){return at(e).position==="static"}function gs(e,t){if(!pt(e)||at(e).position==="fixed")return null;if(t)return t(e);let r=e.offsetParent;return yt(e)===r&&(r=r.ownerDocument.body),r}function Qs(e,t){const r=Qe(e);if(zn(e))return r;if(!pt(e)){let i=Pt(e);for(;i&&!vr(i);){if(ot(i)&&!vi(i))return i;i=Pt(i)}return r}let n=gs(e,t);for(;n&&Va(n)&&vi(n);)n=gs(n,t);return n&&vr(n)&&vi(n)&&!Yi(n)?r:n||Ua(e)||r}const rl=async function(e){const t=this.getOffsetParent||Qs,r=this.getDimensions,n=await r(e.floating);return{reference:tl(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function nl(e){return at(e).direction==="rtl"}const il={convertOffsetParentRelativeRectToViewportRelativeRect:Ga,getDocumentElement:yt,getClippingRect:Qa,getOffsetParent:Qs,getElementRects:rl,getClientRects:Ya,getDimensions:el,getScale:br,isElement:ot,isRTL:nl};function sl(e,t){let r=null,n;const i=yt(e);function s(){var l;clearTimeout(n),(l=r)==null||l.disconnect(),r=null}function a(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const{left:u,top:p,width:f,height:b}=e.getBoundingClientRect();if(l||t(),!f||!b)return;const m=$n(p),x=$n(i.clientWidth-(u+f)),_=$n(i.clientHeight-(p+b)),L=$n(u),N={rootMargin:-m+"px "+-x+"px "+-_+"px "+-L+"px",threshold:yr(0,Ri(1,c))||1};let H=!0;function K(V){const ie=V[0].intersectionRatio;if(ie!==c){if(!H)return a();ie?a(!1,ie):n=setTimeout(()=>{a(!1,1e-7)},1e3)}H=!1}try{r=new IntersectionObserver(K,{...N,root:i.ownerDocument})}catch{r=new IntersectionObserver(K,N)}r.observe(e)}return a(!0),s}function ol(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=n,u=Zi(e),p=i||s?[...u?Ur(u):[],...Ur(t)]:[];p.forEach(S=>{i&&S.addEventListener("scroll",r,{passive:!0}),s&&S.addEventListener("resize",r)});const f=u&&l?sl(u,r):null;let b=-1,m=null;a&&(m=new ResizeObserver(S=>{let[N]=S;N&&N.target===u&&m&&(m.unobserve(t),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var H;(H=m)==null||H.observe(t)})),r()}),u&&!c&&m.observe(u),m.observe(t));let x,_=c?Gt(e):null;c&&L();function L(){const S=Gt(e);_&&(S.x!==_.x||S.y!==_.y||S.width!==_.width||S.height!==_.height)&&r(),_=S,x=requestAnimationFrame(L)}return r(),()=>{var S;p.forEach(N=>{i&&N.removeEventListener("scroll",r),s&&N.removeEventListener("resize",r)}),f==null||f(),(S=m)==null||S.disconnect(),m=null,c&&cancelAnimationFrame(x)}}const al=(e,t,r)=>{const n=new Map,i={platform:il,...r},s={...i.platform,_c:n};return qa(e,t,{...i,platform:s})};function ll(e){const t=e.renderRoot.querySelector(".inline-container-wrapper"),r=e.renderRoot.querySelector("[popover]");return ol(t,r,()=>{r.matches(":popover-open")&&al(t,r,{strategy:"fixed"}).then(({x:i,y:s})=>{Object.assign(r.style,{left:`${i}px`,top:`${s}px`,width:`${t.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function eo(e){e.renderRoot.querySelector("#eox-itemfilter-input-search").value="",Vs({target:{value:""}},e)}function cl(e,t){t.inlineMode&&e.stopPropagation()}function ul(e){e.inlineMode&&(e.showDropdown=!0)}function dl(e,t){t.inlineMode&&(e.stopPropagation(),t.showDropdown=!0)}function hl(e,t){t.inlineMode&&e.key==="Escape"&&t.showDropdown&&(eo(t),t.showDropdown=!1)}function fl(e,t){t.inlineMode&&e.target.tagName!=="DROPDOWN-FORM"&&e.target.tagName!=="EOX-ITEMFILTER"&&t.showDropdown&&(eo(t),t.showDropdown=!1)}const _t=11102230246251565e-32,Ue=134217729,pl=(3+8*_t)*_t;function wi(e,t,r,n,i){let s,a,l,c,u=t[0],p=n[0],f=0,b=0;p>u==p>-u?(s=u,u=t[++f]):(s=p,p=n[++b]);let m=0;if(f<e&&b<r)for(p>u==p>-u?(a=u+s,l=s-(a-u),u=t[++f]):(a=p+s,l=s-(a-p),p=n[++b]),s=a,l!==0&&(i[m++]=l);f<e&&b<r;)p>u==p>-u?(a=s+u,c=a-s,l=s-(a-c)+(u-c),u=t[++f]):(a=s+p,c=a-s,l=s-(a-c)+(p-c),p=n[++b]),s=a,l!==0&&(i[m++]=l);for(;f<e;)a=s+u,c=a-s,l=s-(a-c)+(u-c),u=t[++f],s=a,l!==0&&(i[m++]=l);for(;b<r;)a=s+p,c=a-s,l=s-(a-c)+(p-c),p=n[++b],s=a,l!==0&&(i[m++]=l);return(s!==0||m===0)&&(i[m++]=s),m}function gl(e,t){let r=t[0];for(let n=1;n<e;n++)r+=t[n];return r}function Xr(e){return new Float64Array(e)}const yl=(3+16*_t)*_t,bl=(2+12*_t)*_t,ml=(9+64*_t)*_t*_t,gr=Xr(4),ys=Xr(8),bs=Xr(12),ms=Xr(16),We=Xr(4);function vl(e,t,r,n,i,s,a){let l,c,u,p,f,b,m,x,_,L,S,N,H,K,V,ie,de,ae;const fe=e-i,ee=r-i,G=t-s,be=n-s;K=fe*be,b=Ue*fe,m=b-(b-fe),x=fe-m,b=Ue*be,_=b-(b-be),L=be-_,V=x*L-(K-m*_-x*_-m*L),ie=G*ee,b=Ue*G,m=b-(b-G),x=G-m,b=Ue*ee,_=b-(b-ee),L=ee-_,de=x*L-(ie-m*_-x*_-m*L),S=V-de,f=V-S,gr[0]=V-(S+f)+(f-de),N=K+S,f=N-K,H=K-(N-f)+(S-f),S=H-ie,f=H-S,gr[1]=H-(S+f)+(f-ie),ae=N+S,f=ae-N,gr[2]=N-(ae-f)+(S-f),gr[3]=ae;let Oe=gl(4,gr),O=bl*a;if(Oe>=O||-Oe>=O||(f=e-fe,l=e-(fe+f)+(f-i),f=r-ee,u=r-(ee+f)+(f-i),f=t-G,c=t-(G+f)+(f-s),f=n-be,p=n-(be+f)+(f-s),l===0&&c===0&&u===0&&p===0)||(O=ml*a+pl*Math.abs(Oe),Oe+=fe*p+be*l-(G*u+ee*c),Oe>=O||-Oe>=O))return Oe;K=l*be,b=Ue*l,m=b-(b-l),x=l-m,b=Ue*be,_=b-(b-be),L=be-_,V=x*L-(K-m*_-x*_-m*L),ie=c*ee,b=Ue*c,m=b-(b-c),x=c-m,b=Ue*ee,_=b-(b-ee),L=ee-_,de=x*L-(ie-m*_-x*_-m*L),S=V-de,f=V-S,We[0]=V-(S+f)+(f-de),N=K+S,f=N-K,H=K-(N-f)+(S-f),S=H-ie,f=H-S,We[1]=H-(S+f)+(f-ie),ae=N+S,f=ae-N,We[2]=N-(ae-f)+(S-f),We[3]=ae;const k=wi(4,gr,4,We,ys);K=fe*p,b=Ue*fe,m=b-(b-fe),x=fe-m,b=Ue*p,_=b-(b-p),L=p-_,V=x*L-(K-m*_-x*_-m*L),ie=G*u,b=Ue*G,m=b-(b-G),x=G-m,b=Ue*u,_=b-(b-u),L=u-_,de=x*L-(ie-m*_-x*_-m*L),S=V-de,f=V-S,We[0]=V-(S+f)+(f-de),N=K+S,f=N-K,H=K-(N-f)+(S-f),S=H-ie,f=H-S,We[1]=H-(S+f)+(f-ie),ae=N+S,f=ae-N,We[2]=N-(ae-f)+(S-f),We[3]=ae;const C=wi(k,ys,4,We,bs);K=l*p,b=Ue*l,m=b-(b-l),x=l-m,b=Ue*p,_=b-(b-p),L=p-_,V=x*L-(K-m*_-x*_-m*L),ie=c*u,b=Ue*c,m=b-(b-c),x=c-m,b=Ue*u,_=b-(b-u),L=u-_,de=x*L-(ie-m*_-x*_-m*L),S=V-de,f=V-S,We[0]=V-(S+f)+(f-de),N=K+S,f=N-K,H=K-(N-f)+(S-f),S=H-ie,f=H-S,We[1]=H-(S+f)+(f-ie),ae=N+S,f=ae-N,We[2]=N-(ae-f)+(S-f),We[3]=ae;const I=wi(C,bs,4,We,ms);return ms[I-1]}function wl(e,t,r,n,i,s){const a=(t-s)*(r-i),l=(e-i)*(n-s),c=a-l,u=Math.abs(a+l);return Math.abs(c)>=yl*u?c:-vl(e,t,r,n,i,s,u)}function xl(e,t){var r,n,i=0,s,a,l,c,u,p,f,b=e[0],m=e[1],x=t.length;for(r=0;r<x;r++){n=0;var _=t[r],L=_.length-1;if(p=_[0],p[0]!==_[L][0]&&p[1]!==_[L][1])throw new Error("First and last coordinates in a ring must be the same");for(a=p[0]-b,l=p[1]-m,n;n<L;n++){if(f=_[n+1],c=f[0]-b,u=f[1]-m,l===0&&u===0){if(c<=0&&a>=0||a<=0&&c>=0)return 0}else if(u>=0&&l<0||u<0&&l>=0){if(s=wl(a,c,l,u,0,0),s===0)return 0;(s>0&&u>0&&l<=0||s<0&&u<=0&&l>0)&&i++}p=f,l=u,a=c}}return i%2!==0}function Yt(e,t,r={}){const n={type:"Feature"};return(r.id===0||r.id)&&(n.id=r.id),r.bbox&&(n.bbox=r.bbox),n.properties=t||{},n.geometry=e,n}function Ml(e,t,r={}){if(!e)throw new Error("coordinates is required");if(!Array.isArray(e))throw new Error("coordinates must be an Array");if(e.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!vs(e[0])||!vs(e[1]))throw new Error("coordinates must contain numbers");return Yt({type:"Point",coordinates:e},t,r)}function $l(e,t,r={}){if(e.length<2)throw new Error("coordinates must be an array of two or more positions");return Yt({type:"LineString",coordinates:e},t,r)}function Di(e,t={}){const r={type:"FeatureCollection"};return t.id&&(r.id=t.id),t.bbox&&(r.bbox=t.bbox),r.features=e,r}function _l(e,t,r={}){return Yt({type:"MultiLineString",coordinates:e},t,r)}function vs(e){return!isNaN(e)&&e!==null&&!Array.isArray(e)}function to(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if(e.type==="Feature"&&e.geometry!==null&&e.geometry.type==="Point")return[...e.geometry.coordinates];if(e.type==="Point")return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function Al(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function wr(e){return e.type==="Feature"?e.geometry:e}function rt(e,t,r={}){if(!e)throw new Error("point is required");if(!t)throw new Error("polygon is required");const n=to(e),i=wr(t),s=i.type,a=t.bbox;let l=i.coordinates;if(a&&Sl(n,a)===!1)return!1;s==="Polygon"&&(l=[l]);let c=!1;for(var u=0;u<l.length;++u){const p=xl(n,l[u]);if(p===0)return!r.ignoreBoundary;p&&(c=!0)}return c}function Sl(e,t){return t[0]<=e[0]&&t[1]<=e[1]&&t[2]>=e[0]&&t[3]>=e[1]}class ro{constructor(t=[],r=Cl){if(this.data=t,this.length=this.data.length,this.compare=r,this.length>0)for(let n=(this.length>>1)-1;n>=0;n--)this._down(n)}push(t){this.data.push(t),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const t=this.data[0],r=this.data.pop();return this.length--,this.length>0&&(this.data[0]=r,this._down(0)),t}peek(){return this.data[0]}_up(t){const{data:r,compare:n}=this,i=r[t];for(;t>0;){const s=t-1>>1,a=r[s];if(n(i,a)>=0)break;r[t]=a,t=s}r[t]=i}_down(t){const{data:r,compare:n}=this,i=this.length>>1,s=r[t];for(;t<i;){let a=(t<<1)+1,l=r[a];const c=a+1;if(c<this.length&&n(r[c],l)<0&&(a=c,l=r[c]),n(l,s)>=0)break;r[t]=l,t=a}r[t]=s}}function Cl(e,t){return e<t?-1:e>t?1:0}function no(e,t){return e.p.x>t.p.x?1:e.p.x<t.p.x?-1:e.p.y!==t.p.y?e.p.y>t.p.y?1:-1:1}function kl(e,t){return e.rightSweepEvent.p.x>t.rightSweepEvent.p.x?1:e.rightSweepEvent.p.x<t.rightSweepEvent.p.x?-1:e.rightSweepEvent.p.y!==t.rightSweepEvent.p.y?e.rightSweepEvent.p.y<t.rightSweepEvent.p.y?1:-1:1}class ws{constructor(t,r,n,i){this.p={x:t[0],y:t[1]},this.featureId=r,this.ringId=n,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(t){return this.p.x===t.p.x&&this.p.y===t.p.y}}function Ll(e,t){if(e.type==="FeatureCollection"){const r=e.features;for(let n=0;n<r.length;n++)xs(r[n],t)}else xs(e,t)}let _n=0,An=0,Sn=0;function xs(e,t){const r=e.type==="Feature"?e.geometry:e;let n=r.coordinates;(r.type==="Polygon"||r.type==="MultiLineString")&&(n=[n]),r.type==="LineString"&&(n=[[n]]);for(let i=0;i<n.length;i++)for(let s=0;s<n[i].length;s++){let a=n[i][s][0],l=null;An=An+1;for(let c=0;c<n[i][s].length-1;c++){l=n[i][s][c+1];const u=new ws(a,_n,An,Sn),p=new ws(l,_n,An,Sn+1);u.otherEvent=p,p.otherEvent=u,no(u,p)>0?(p.isLeftEndpoint=!0,u.isLeftEndpoint=!1):(u.isLeftEndpoint=!0,p.isLeftEndpoint=!1),t.push(u),t.push(p),a=l,Sn=Sn+1}}_n=_n+1}class El{constructor(t){this.leftSweepEvent=t,this.rightSweepEvent=t.otherEvent}}function Pl(e,t){if(e===null||t===null||e.leftSweepEvent.ringId===t.leftSweepEvent.ringId&&(e.rightSweepEvent.isSamePoint(t.leftSweepEvent)||e.rightSweepEvent.isSamePoint(t.leftSweepEvent)||e.rightSweepEvent.isSamePoint(t.rightSweepEvent)||e.leftSweepEvent.isSamePoint(t.leftSweepEvent)||e.leftSweepEvent.isSamePoint(t.rightSweepEvent)))return!1;const r=e.leftSweepEvent.p.x,n=e.leftSweepEvent.p.y,i=e.rightSweepEvent.p.x,s=e.rightSweepEvent.p.y,a=t.leftSweepEvent.p.x,l=t.leftSweepEvent.p.y,c=t.rightSweepEvent.p.x,u=t.rightSweepEvent.p.y,p=(u-l)*(i-r)-(c-a)*(s-n),f=(c-a)*(n-l)-(u-l)*(r-a),b=(i-r)*(n-l)-(s-n)*(r-a);if(p===0)return!1;const m=f/p,x=b/p;if(m>=0&&m<=1&&x>=0&&x<=1){const _=r+m*(i-r),L=n+m*(s-n);return[_,L]}return!1}function Rl(e,t){t=t||!1;const r=[],n=new ro([],kl);for(;e.length;){const i=e.pop();if(i.isLeftEndpoint){const s=new El(i);for(let a=0;a<n.data.length;a++){const l=n.data[a];if(t&&l.leftSweepEvent.featureId===i.featureId)continue;const c=Pl(s,l);c!==!1&&r.push(c)}n.push(s)}else i.isLeftEndpoint===!1&&n.pop()}return r}function Tl(e,t){const r=new ro([],no);return Ll(e,r),Rl(r,t)}var Dl=Tl;function Ji(e,t,r={}){const{removeDuplicates:n=!0,ignoreSelfIntersections:i=!1}=r;let s=[];e.type==="FeatureCollection"?s=s.concat(e.features):e.type==="Feature"?s.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&s.push(Yt(e)),t.type==="FeatureCollection"?s=s.concat(t.features):t.type==="Feature"?s.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&s.push(Yt(t));const a=Dl(Di(s),i);let l=[];if(n){const c={};a.forEach(u=>{const p=u.join(",");c[p]||(c[p]=!0,l.push(u))})}else l=a;return Di(l.map(c=>Ml(c)))}function io(e,t,r){if(e!==null)for(var n,i,s,a,l,c,u,p=0,f=0,b,m=e.type,x=m==="FeatureCollection",_=m==="Feature",L=x?e.features.length:1,S=0;S<L;S++){u=x?e.features[S].geometry:_?e.geometry:e,b=u?u.type==="GeometryCollection":!1,l=b?u.geometries.length:1;for(var N=0;N<l;N++){var H=0,K=0;if(a=b?u.geometries[N]:u,a!==null){c=a.coordinates;var V=a.type;switch(p=0,V){case null:break;case"Point":if(t(c,f,S,H,K)===!1)return!1;f++,H++;break;case"LineString":case"MultiPoint":for(n=0;n<c.length;n++){if(t(c[n],f,S,H,K)===!1)return!1;f++,V==="MultiPoint"&&H++}V==="LineString"&&H++;break;case"Polygon":case"MultiLineString":for(n=0;n<c.length;n++){for(i=0;i<c[n].length-p;i++){if(t(c[n][i],f,S,H,K)===!1)return!1;f++}V==="MultiLineString"&&H++,V==="Polygon"&&K++}V==="Polygon"&&H++;break;case"MultiPolygon":for(n=0;n<c.length;n++){for(K=0,i=0;i<c[n].length;i++){for(s=0;s<c[n][i].length-p;s++){if(t(c[n][i][s],f,S,H,K)===!1)return!1;f++}K++}H++}break;case"GeometryCollection":for(n=0;n<a.geometries.length;n++)if(io(a.geometries[n],t)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function Ol(e,t){var r,n,i,s,a,l,c,u,p,f,b=0,m=e.type==="FeatureCollection",x=e.type==="Feature",_=m?e.features.length:1;for(r=0;r<_;r++){for(l=m?e.features[r].geometry:x?e.geometry:e,u=m?e.features[r].properties:x?e.properties:{},p=m?e.features[r].bbox:x?e.bbox:void 0,f=m?e.features[r].id:x?e.id:void 0,c=l?l.type==="GeometryCollection":!1,a=c?l.geometries.length:1,i=0;i<a;i++){if(s=c?l.geometries[i]:l,s===null){if(t(null,b,u,p,f)===!1)return!1;continue}switch(s.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(t(s,b,u,p,f)===!1)return!1;break}case"GeometryCollection":{for(n=0;n<s.geometries.length;n++)if(t(s.geometries[n],b,u,p,f)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}b++}}function Ln(e,t){Ol(e,function(r,n,i,s,a){var l=r===null?null:r.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return t(Yt(r,i,{bbox:s,id:a}),n,0)===!1?!1:void 0}var c;switch(l){case"MultiPoint":c="Point";break;case"MultiLineString":c="LineString";break;case"MultiPolygon":c="Polygon";break}for(var u=0;u<r.coordinates.length;u++){var p=r.coordinates[u],f={type:c,coordinates:p};if(t(Yt(f,i),n,u)===!1)return!1}})}function Oi(e,t={}){const r=wr(e);switch(!t.properties&&e.type==="Feature"&&(t.properties=e.properties),r.type){case"Polygon":return jl(r,t);case"MultiPolygon":return Nl(r,t);default:throw new Error("invalid poly")}}function jl(e,t={}){const n=wr(e).coordinates,i=t.properties?t.properties:e.type==="Feature"?e.properties:{};return so(n,i)}function Nl(e,t={}){const n=wr(e).coordinates,i=t.properties?t.properties:e.type==="Feature"?e.properties:{},s=[];return n.forEach(a=>{s.push(so(a,i))}),Di(s)}function so(e,t){return e.length>1?_l(e,t):$l(e[0],t)}function Bl(e,t,r={}){var n;const i=(n=r.ignoreSelfIntersections)!=null?n:!1;let s=!0;return Ln(e,a=>{Ln(t,l=>{if(s===!1)return!1;s=Hl(a.geometry,l.geometry,i)})}),s}function Hl(e,t,r){switch(e.type){case"Point":switch(t.type){case"Point":return!Vl(e.coordinates,t.coordinates);case"LineString":return!Ms(t,e);case"Polygon":return!rt(e,t)}break;case"LineString":switch(t.type){case"Point":return!Ms(e,t);case"LineString":return!Il(e,t,r);case"Polygon":return!$s(t,e,r)}break;case"Polygon":switch(t.type){case"Point":return!rt(t,e);case"LineString":return!$s(e,t,r);case"Polygon":return!zl(t,e,r)}}return!1}function Ms(e,t){for(let r=0;r<e.coordinates.length-1;r++)if(ql(e.coordinates[r],e.coordinates[r+1],t.coordinates))return!0;return!1}function Il(e,t,r){return Ji(e,t,{ignoreSelfIntersections:r}).features.length>0}function $s(e,t,r){for(const i of t.coordinates)if(rt(i,e))return!0;return Ji(t,Oi(e),{ignoreSelfIntersections:r}).features.length>0}function zl(e,t,r){for(const i of e.coordinates[0])if(rt(i,t))return!0;for(const i of t.coordinates[0])if(rt(i,e))return!0;return Ji(Oi(e),Oi(t),{ignoreSelfIntersections:r}).features.length>0}function ql(e,t,r){const n=r[0]-e[0],i=r[1]-e[1],s=t[0]-e[0],a=t[1]-e[1];return n*a-i*s!==0?!1:Math.abs(s)>=Math.abs(a)?s>0?e[0]<=r[0]&&r[0]<=t[0]:t[0]<=r[0]&&r[0]<=e[0]:a>0?e[1]<=r[1]&&r[1]<=t[1]:t[1]<=r[1]&&r[1]<=e[1]}function Vl(e,t){return e[0]===t[0]&&e[1]===t[1]}function Ul(e,t,r={}){var n;const i=(n=r.ignoreSelfIntersections)!=null?n:!1;let s=!1;return Ln(e,a=>{Ln(t,l=>{if(s===!0)return!0;s=!Bl(a.geometry,l.geometry,{ignoreSelfIntersections:i})})}),s}var Wl=Ul;function En(e,t={}){if(e.bbox!=null&&t.recompute!==!0)return e.bbox;const r=[1/0,1/0,-1/0,-1/0];return io(e,n=>{r[0]>n[0]&&(r[0]=n[0]),r[1]>n[1]&&(r[1]=n[1]),r[2]<n[0]&&(r[2]=n[0]),r[3]<n[1]&&(r[3]=n[1])}),r}function Pn(e,t,r={}){const n=to(e),i=Al(t);for(let s=0;s<i.length-1;s++){let a=!1;if(r.ignoreEndVertices&&(s===0&&(a="start"),s===i.length-2&&(a="end"),s===0&&s+1===i.length-1&&(a="both")),Kl(i[s],i[s+1],n,a,typeof r.epsilon>"u"?null:r.epsilon))return!0}return!1}function Kl(e,t,r,n,i){const s=r[0],a=r[1],l=e[0],c=e[1],u=t[0],p=t[1],f=r[0]-l,b=r[1]-c,m=u-l,x=p-c,_=f*x-b*m;if(i!==null){if(Math.abs(_)>i)return!1}else if(_!==0)return!1;if(n){if(n==="start")return Math.abs(m)>=Math.abs(x)?m>0?l<s&&s<=u:u<=s&&s<l:x>0?c<a&&a<=p:p<=a&&a<c;if(n==="end")return Math.abs(m)>=Math.abs(x)?m>0?l<=s&&s<u:u<s&&s<=l:x>0?c<=a&&a<p:p<a&&a<=c;if(n==="both")return Math.abs(m)>=Math.abs(x)?m>0?l<s&&s<u:u<s&&s<l:x>0?c<a&&a<p:p<a&&a<c}else return Math.abs(m)>=Math.abs(x)?m>0?l<=s&&s<=u:u<=s&&s<=l:x>0?c<=a&&a<=p:p<=a&&a<=c;return!1}function Gl(e,t){var r=wr(e),n=wr(t),i=r.type,s=n.type;switch(i){case"Point":switch(s){case"MultiPoint":return Yl(r,n);case"LineString":return Pn(r,n,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return rt(r,n,{ignoreBoundary:!0});default:throw new Error("feature2 "+s+" geometry not supported")}case"MultiPoint":switch(s){case"MultiPoint":return Fl(r,n);case"LineString":return Zl(r,n);case"Polygon":case"MultiPolygon":return Xl(r,n);default:throw new Error("feature2 "+s+" geometry not supported")}case"LineString":switch(s){case"LineString":return Jl(r,n);case"Polygon":case"MultiPolygon":return Ql(r,n);default:throw new Error("feature2 "+s+" geometry not supported")}case"Polygon":switch(s){case"Polygon":case"MultiPolygon":return ec(r,n);default:throw new Error("feature2 "+s+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function Yl(e,t){var r,n=!1;for(r=0;r<t.coordinates.length;r++)if(ao(t.coordinates[r],e.coordinates)){n=!0;break}return n}function Fl(e,t){for(var r=0;r<e.coordinates.length;r++){for(var n=!1,i=0;i<t.coordinates.length;i++)ao(e.coordinates[r],t.coordinates[i])&&(n=!0);if(!n)return!1}return!0}function Zl(e,t){for(var r=!1,n=0;n<e.coordinates.length;n++){if(!Pn(e.coordinates[n],t))return!1;r||(r=Pn(e.coordinates[n],t,{ignoreEndVertices:!0}))}return r}function Xl(e,t){for(var r=!0,n=!1,i=0;i<e.coordinates.length;i++){if(n=rt(e.coordinates[i],t),!n){r=!1;break}n=rt(e.coordinates[i],t,{ignoreBoundary:!0})}return r&&n}function Jl(e,t){for(var r=0;r<e.coordinates.length;r++)if(!Pn(e.coordinates[r],t))return!1;return!0}function Ql(e,t){var r=En(t),n=En(e);if(!oo(r,n))return!1;for(var i=!1,s=0;s<e.coordinates.length;s++){if(!rt(e.coordinates[s],t))return!1;if(i||(i=rt(e.coordinates[s],t,{ignoreBoundary:!0})),!i&&s<e.coordinates.length-1){var a=tc(e.coordinates[s],e.coordinates[s+1]);i=rt(a,t,{ignoreBoundary:!0})}}return i}function ec(e,t){var r=En(e),n=En(t);if(!oo(n,r))return!1;for(var i=0;i<e.coordinates[0].length;i++)if(!rt(e.coordinates[0][i],t))return!1;return!0}function oo(e,t){return!(e[0]>t[0]||e[2]<t[2]||e[1]>t[1]||e[3]<t[3])}function ao(e,t){return e[0]===t[0]&&e[1]===t[1]}function tc(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2]}var rc=Gl;const nc=(e,t)=>t?Wl(e,t):!0,ic=(e,t)=>t?rc(e,t):!0;function sc(e,t="highlight",r="title"){const n=(s,a,l)=>{const c=a.split(".");let u;for(u=0;u<c.length-1;u++)s=s[c[u]];s[c[u]]=l},i=(s,a=[])=>{let l="",c=0;return a.forEach(u=>{const p=u[1]+1;l+=[s.substring(c,u[0]),`<mark class="${t}">`,s.substring(u[0],p),"</mark>"].join(""),c=p}),l+=s.substring(c),l};return e.filter(({matches:s})=>s&&s.length).map(({item:s,matches:a})=>{const l={...s};return a.forEach(c=>{c.key===r&&n(l,c.key,i(c.value,c.indices))}),l})}var lo={exports:{}};(function(e,t){(function(r,n){e.exports=n()})($t,function(){var r=1e3,n=6e4,i=36e5,s="millisecond",a="second",l="minute",c="hour",u="day",p="week",f="month",b="quarter",m="year",x="date",_="Invalid Date",L=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,S=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,N={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(O){var k=["th","st","nd","rd"],C=O%100;return"["+O+(k[(C-20)%10]||k[C]||k[0])+"]"}},H=function(O,k,C){var I=String(O);return!I||I.length>=k?O:""+Array(k+1-I.length).join(C)+O},K={s:H,z:function(O){var k=-O.utcOffset(),C=Math.abs(k),I=Math.floor(C/60),P=C%60;return(k<=0?"+":"-")+H(I,2,"0")+":"+H(P,2,"0")},m:function O(k,C){if(k.date()<C.date())return-O(C,k);var I=12*(C.year()-k.year())+(C.month()-k.month()),P=k.clone().add(I,f),Z=C-P<0,X=k.clone().add(I+(Z?-1:1),f);return+(-(I+(C-P)/(Z?P-X:X-P))||0)},a:function(O){return O<0?Math.ceil(O)||0:Math.floor(O)},p:function(O){return{M:f,y:m,w:p,d:u,D:x,h:c,m:l,s:a,ms:s,Q:b}[O]||String(O||"").toLowerCase().replace(/s$/,"")},u:function(O){return O===void 0}},V="en",ie={};ie[V]=N;var de="$isDayjsObject",ae=function(O){return O instanceof be||!(!O||!O[de])},fe=function O(k,C,I){var P;if(!k)return V;if(typeof k=="string"){var Z=k.toLowerCase();ie[Z]&&(P=Z),C&&(ie[Z]=C,P=Z);var X=k.split("-");if(!P&&X.length>1)return O(X[0])}else{var pe=k.name;ie[pe]=k,P=pe}return!I&&P&&(V=P),P||!I&&V},ee=function(O,k){if(ae(O))return O.clone();var C=typeof k=="object"?k:{};return C.date=O,C.args=arguments,new be(C)},G=K;G.l=fe,G.i=ae,G.w=function(O,k){return ee(O,{locale:k.$L,utc:k.$u,x:k.$x,$offset:k.$offset})};var be=function(){function O(C){this.$L=fe(C.locale,null,!0),this.parse(C),this.$x=this.$x||C.x||{},this[de]=!0}var k=O.prototype;return k.parse=function(C){this.$d=function(I){var P=I.date,Z=I.utc;if(P===null)return new Date(NaN);if(G.u(P))return new Date;if(P instanceof Date)return new Date(P);if(typeof P=="string"&&!/Z$/i.test(P)){var X=P.match(L);if(X){var pe=X[2]-1||0,Me=(X[7]||"0").substring(0,3);return Z?new Date(Date.UTC(X[1],pe,X[3]||1,X[4]||0,X[5]||0,X[6]||0,Me)):new Date(X[1],pe,X[3]||1,X[4]||0,X[5]||0,X[6]||0,Me)}}return new Date(P)}(C),this.init()},k.init=function(){var C=this.$d;this.$y=C.getFullYear(),this.$M=C.getMonth(),this.$D=C.getDate(),this.$W=C.getDay(),this.$H=C.getHours(),this.$m=C.getMinutes(),this.$s=C.getSeconds(),this.$ms=C.getMilliseconds()},k.$utils=function(){return G},k.isValid=function(){return this.$d.toString()!==_},k.isSame=function(C,I){var P=ee(C);return this.startOf(I)<=P&&P<=this.endOf(I)},k.isAfter=function(C,I){return ee(C)<this.startOf(I)},k.isBefore=function(C,I){return this.endOf(I)<ee(C)},k.$g=function(C,I,P){return G.u(C)?this[I]:this.set(P,C)},k.unix=function(){return Math.floor(this.valueOf()/1e3)},k.valueOf=function(){return this.$d.getTime()},k.startOf=function(C,I){var P=this,Z=!!G.u(I)||I,X=G.p(C),pe=function(Le,se){var Ee=G.w(P.$u?Date.UTC(P.$y,se,Le):new Date(P.$y,se,Le),P);return Z?Ee:Ee.endOf(u)},Me=function(Le,se){return G.w(P.toDate()[Le].apply(P.toDate("s"),(Z?[0,0,0,0]:[23,59,59,999]).slice(se)),P)},Ae=this.$W,Se=this.$M,Ne=this.$D,ke="set"+(this.$u?"UTC":"");switch(X){case m:return Z?pe(1,0):pe(31,11);case f:return Z?pe(1,Se):pe(0,Se+1);case p:var Be=this.$locale().weekStart||0,le=(Ae<Be?Ae+7:Ae)-Be;return pe(Z?Ne-le:Ne+(6-le),Se);case u:case x:return Me(ke+"Hours",0);case c:return Me(ke+"Minutes",1);case l:return Me(ke+"Seconds",2);case a:return Me(ke+"Milliseconds",3);default:return this.clone()}},k.endOf=function(C){return this.startOf(C,!1)},k.$set=function(C,I){var P,Z=G.p(C),X="set"+(this.$u?"UTC":""),pe=(P={},P[u]=X+"Date",P[x]=X+"Date",P[f]=X+"Month",P[m]=X+"FullYear",P[c]=X+"Hours",P[l]=X+"Minutes",P[a]=X+"Seconds",P[s]=X+"Milliseconds",P)[Z],Me=Z===u?this.$D+(I-this.$W):I;if(Z===f||Z===m){var Ae=this.clone().set(x,1);Ae.$d[pe](Me),Ae.init(),this.$d=Ae.set(x,Math.min(this.$D,Ae.daysInMonth())).$d}else pe&&this.$d[pe](Me);return this.init(),this},k.set=function(C,I){return this.clone().$set(C,I)},k.get=function(C){return this[G.p(C)]()},k.add=function(C,I){var P,Z=this;C=Number(C);var X=G.p(I),pe=function(Se){var Ne=ee(Z);return G.w(Ne.date(Ne.date()+Math.round(Se*C)),Z)};if(X===f)return this.set(f,this.$M+C);if(X===m)return this.set(m,this.$y+C);if(X===u)return pe(1);if(X===p)return pe(7);var Me=(P={},P[l]=n,P[c]=i,P[a]=r,P)[X]||1,Ae=this.$d.getTime()+C*Me;return G.w(Ae,this)},k.subtract=function(C,I){return this.add(-1*C,I)},k.format=function(C){var I=this,P=this.$locale();if(!this.isValid())return P.invalidDate||_;var Z=C||"YYYY-MM-DDTHH:mm:ssZ",X=G.z(this),pe=this.$H,Me=this.$m,Ae=this.$M,Se=P.weekdays,Ne=P.months,ke=P.meridiem,Be=function(se,Ee,lt,$e){return se&&(se[Ee]||se(I,Z))||lt[Ee].slice(0,$e)},le=function(se){return G.s(pe%12||12,se,"0")},Le=ke||function(se,Ee,lt){var $e=se<12?"AM":"PM";return lt?$e.toLowerCase():$e};return Z.replace(S,function(se,Ee){return Ee||function(lt){switch(lt){case"YY":return String(I.$y).slice(-2);case"YYYY":return G.s(I.$y,4,"0");case"M":return Ae+1;case"MM":return G.s(Ae+1,2,"0");case"MMM":return Be(P.monthsShort,Ae,Ne,3);case"MMMM":return Be(Ne,Ae);case"D":return I.$D;case"DD":return G.s(I.$D,2,"0");case"d":return String(I.$W);case"dd":return Be(P.weekdaysMin,I.$W,Se,2);case"ddd":return Be(P.weekdaysShort,I.$W,Se,3);case"dddd":return Se[I.$W];case"H":return String(pe);case"HH":return G.s(pe,2,"0");case"h":return le(1);case"hh":return le(2);case"a":return Le(pe,Me,!0);case"A":return Le(pe,Me,!1);case"m":return String(Me);case"mm":return G.s(Me,2,"0");case"s":return String(I.$s);case"ss":return G.s(I.$s,2,"0");case"SSS":return G.s(I.$ms,3,"0");case"Z":return X}return null}(se)||X.replace(":","")})},k.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},k.diff=function(C,I,P){var Z,X=this,pe=G.p(I),Me=ee(C),Ae=(Me.utcOffset()-this.utcOffset())*n,Se=this-Me,Ne=function(){return G.m(X,Me)};switch(pe){case m:Z=Ne()/12;break;case f:Z=Ne();break;case b:Z=Ne()/3;break;case p:Z=(Se-Ae)/6048e5;break;case u:Z=(Se-Ae)/864e5;break;case c:Z=Se/i;break;case l:Z=Se/n;break;case a:Z=Se/r;break;default:Z=Se}return P?Z:G.a(Z)},k.daysInMonth=function(){return this.endOf(f).$D},k.$locale=function(){return ie[this.$L]},k.locale=function(C,I){if(!C)return this.$L;var P=this.clone(),Z=fe(C,I,!0);return Z&&(P.$L=Z),P},k.clone=function(){return G.w(this.$d,this)},k.toDate=function(){return new Date(this.valueOf())},k.toJSON=function(){return this.isValid()?this.toISOString():null},k.toISOString=function(){return this.$d.toISOString()},k.toString=function(){return this.$d.toUTCString()},O}(),Oe=be.prototype;return ee.prototype=Oe,[["$ms",s],["$s",a],["$m",l],["$H",c],["$W",u],["$M",f],["$y",m],["$D",x]].forEach(function(O){Oe[O[1]]=function(k){return this.$g(k,O[0],O[1])}}),ee.extend=function(O,k){return O.$i||(O(k,be,ee),O.$i=!0),ee},ee.locale=fe,ee.isDayjs=ae,ee.unix=function(O){return ee(1e3*O)},ee.en=ie[V],ee.Ls=ie,ee.p={},ee})})(lo);var oc=lo.exports;const Wr=Ki(oc);let co;const ac=(e,t)=>{co=new Dt(e,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...t})},lc=async(e,t,r)=>{const n=Object.entries(t).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[c,u])=>{const p="$or",f=[],b=(m,x)=>{const _={};u.type==="text"?_[m]=`${x}`:_[c]=`="${m}"`,f.push(_)};return Object.entries(u.state).filter(([,m])=>m).forEach(([m,x])=>b(m,x)),f.length>0&&l.push({[p]:f}),l},[]);let i;if(!(n.length>0)&&r.matchAllWhenEmpty!==!1)i=e;else{const l={$and:[...n]},c=co.search(l);i=r.enableHighlighting?sc(c,"highlight",r.titleProperty):c.map(u=>u.item)}const s=Object.entries(t).filter(([,l])=>l.type==="range").reduce((l,[c,u])=>(l[c]={min:u.state.min,max:u.state.max,format:u.format},l),{});if(Object.keys(s).length>0){const l=[];for(let c=0;c<i.length;c++){const u={};for(const[p,f]of Object.entries(s)){const b=x=>f.format==="date"?Wr(x).unix():x,m=Kr(p,i[c]);m?Array.isArray(m)?u[p]=s[p].min<=b(m[1])&&b(m[0])<=s[p].max:b(m)>=s[p].min&&b(m)<=s[p].max?u[p]=!0:u[p]=!1:u[p]=!0}Object.values(u).every(p=>!!p)&&l.push(i[c])}i=[...l]}const a=Object.entries(t).filter(([,l])=>l.type==="spatial").reduce((l,[c,u])=>(l[c]={geometry:u.state.geometry,mode:u.state.mode},l),{});if(Object.values(a).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let c=0;c<i.length;c++){const u={};for(const p of Object.keys(a)){const f=Kr(p,i[c]),b=a[p].mode||"within";f&&(b==="within"?ic(f,a[p].geometry):nc(f,a[p].geometry))?u[p]=!0:u[p]=!1}Object.values(u).every(p=>!!p)&&l.push(i[c])}i=[...l]}return i};function cc(e,t){return[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...e&&{format:"GeoJSON"},...e&&{url:t}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}]}function Vn(e){if(!e.dirty)return null;switch(e.type){case"multiselect":for(const r in e.state)e.state.hasOwnProperty(r)&&(e.state[r]=!1);break;case"range":e.state.min=e.min,e.state.max=e.max;break;case"select":for(const r in e.state)e.state.hasOwnProperty(r)&&(e.state[r]=!1);break;case"spatial":e.state.geometry=void 0;break;case"text":e.keys.forEach(r=>{e.state[r]=void 0});break}return delete e.stringifiedState,delete e.dirty,e}function _s(e,t){return e*2+t}function uc(e){return Object.keys(e).map(t=>({title:Q`${e[t].title||e[t].key}:
        <strong>${e[t].stringifiedState}</strong>`,key:t})).filter(t=>e[t.key].dirty)}function ji(e){return Object.values(e).map(t=>t.dirty).filter(t=>t).length>0}async function dc(e,t,r){return await(await fetch(`${r.externalFilter(e,t)}`)).json()}function uo(e,t,r){let n;if(e.detail?n=e.detail.target:n=e.target,n!=null&&n.classList.contains("details-filter")){if(!n.open||t!=null&&t.expandMultipleFilters)return;r.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const s=i.shadowRoot.querySelector(".details-filter");s&&s!==n&&s.removeAttribute("open")})}else{if(!(n!=null&&n.open)||t!=null&&t.expandMultipleResults)return;r.querySelectorAll("details").forEach(i=>{i!==n&&i.removeAttribute("open")})}}function Kr(e,t){return e!=null&&e.includes(".")?e.split(".").reduce((r,n)=>r&&r[n],t):t[e]}var ve,ho,Ni,Bi,fo,Hi,Ii,po,zi,go,yo;class hc extends gt{constructor(){super();Fe(this,ve);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=he(this,ve,fo).bind(this),this._handleKeyDown=he(this,ve,Hi).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(r){this.renderRoot.querySelector("[popover]").togglePopover(r)}get showDropdown(){var r;return(r=this.renderRoot.querySelector("[popover]"))==null?void 0:r.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&he(this,ve,Ni).call(this)}disconnectedCallback(){this.inlineMode&&he(this,ve,Bi).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(r){r.has("inlineMode")&&(this.inlineMode?he(this,ve,Ni).call(this):he(this,ve,Bi).call(this))}render(){return Q`
      <style>
        ${!this.unstyled&&Fr}
      </style>
      ${this.inlineMode?Q`
            <div
              class="inline-container-wrapper"
              @click="${he(this,ve,Ii)}"
            >
              <div class="inline-container" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${uc(this.filters)}
                      .controller=${{remove:r=>he(this,ve,go).call(this,r)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${Ke(ji(this.filters),()=>Q`
                      <span
                        class="chip-close"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      ></span>
                    `)}
                </div>
                <div
                  class="input-container ${ji(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${he(this,ve,Ii)}"
                    @focus="${he(this,ve,po)}"
                    @input="${he(this,ve,yo)}"
                    placeholder="Search and add filter"
                    aria-haspopup="true"
                    aria-expanded="${this.showDropdown}"
                  />
                </div>
              </div>
              <div popover="manual">
                <div
                  class="inline-content"
                  slot="content"
                  @keydown="${he(this,ve,Hi)}"
                  @click="${he(this,ve,zi)}"
                  @focus="${he(this,ve,zi)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:Q`<slot name="section"></slot>`}
    `}}ve=new WeakSet,ho=function(){setTimeout(()=>this._overlayCleanup=ll(this))},Ni=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),he(this,ve,ho).call(this)},Bi=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},fo=function(r){fl(r,this)},Hi=function(r){hl(r,this)},Ii=function(r){dl(r,this)},po=function(){ul(this)},zi=function(r){cl(r,this)},go=function(r){Na(r,this)},yo=function(r){Vs(r,this)};customElements.define("eox-itemfilter-container",hc);function fc(e){const t=e.renderRoot.querySelector("input[type='text']");t.value="",Vn(e.filterObject),e.requestUpdate()}function pc(e){const t=e.renderRoot.querySelector("input[type='text']");e.isValid=t.checkValidity(),e.filterObject.keys.forEach(r=>{e.filterObject.state[r]=t.value}),e.filterObject.dirty=!0,e.filterObject.stringifiedState=t.value,e.dispatchEvent(new CustomEvent("filter")),t.value===""&&e.reset()}function gc(e){if(e.filterObject=Vn(e.filterObject),e.filterObject){const t=e.querySelector("tc-range-slider"),r=e.filterObject.min,n=e.filterObject.max;t.value1!==r&&(t.value1=r),t.value2!==n&&(t.value2=n)}e.requestUpdate()}function yc(e,t){const[r,n]=e.detail.values;(r!==t.filterObject.state.min||n!==t.filterObject.state.max)&&([t.filterObject.state.min,t.filterObject.state.max]=[r,n],t.filterObject.dirty=!0),t.filterObject.dirty&&(t.filterObject.stringifiedState=t.filterObject.format==="date"?`${Wr(r)} - ${Wr(n)}`:`${r} - ${n}`),t.dispatchEvent(new CustomEvent("filter")),r===t.filterObject.min&&n===t.filterObject.max?t.reset():t.requestUpdate()}function bc(e,t,r){const n=r.filterObject.format==="date",i=r.filterObject.state[e],s=n?Wr.unix(i):i;return Q`<div class="range-${t}">${s}</div>`}function mc(e){vc(-1,e),Vn(e.filterObject),e.requestUpdate()}function vc(e,t){t.selectedItems=[],Qi(t),mo(t)}function bo(e,t){const r=t.selectedItems.indexOf(e);r>=0?t.selectedItems=t.selectedItems.filter((n,i)=>i!==r):t.type==="multiselect"?t.selectedItems=[...t.selectedItems,e]:(t.selectedItems=[e],t.showSuggestions=!1),Qi(t),mo(t)}function wc(e,t){t.query=e.target.value,t.showSuggestions=!0}function xc(e,t){switch(e.key){case"ArrowDown":t.highlightedIndex=Math.min(t.highlightedIndex+1,t.filteredSuggestions.length-1);break;case"ArrowUp":t.highlightedIndex=Math.max(t.highlightedIndex-1,0);break;case"Enter":t.highlightedIndex>=0&&bo(t.filteredSuggestions[t.highlightedIndex],t);break;case"Escape":t.showSuggestions=!1;break}}function Mc(e,t){(e.has("suggestions")||e.has("query"))&&Qi(t)}function $c(e,t){var n;const r=((n=e.filterObject)==null?void 0:n.sort)||((i,s)=>i.localeCompare(s));return t.sort(r).map(i=>i)}function Qi(e){var r,n,i;let t;e.query&&(t=new Dt(e.suggestions,{threshold:.4}).search(e.query).map(a=>a.item)),e.filteredSuggestions=$c(e,t||e.suggestions),(r=e.filterObject)!=null&&r.filterKeys&&(e.filteredSuggestions=(n=e.filterObject)==null?void 0:n.filterKeys.map(s=>`${s}`),e.filterObject.state=(i=e.filterObject)==null?void 0:i.filterKeys.map(s=>`${s}`).reduce((s,a)=>(a in s||(s[a]=void 0),s),e.filterObject.state)),e.highlightedIndex=-1}function mo(e){Object.keys(e.filterObject.state).forEach(t=>{e.filterObject.state[t]=e.selectedItems.includes(t)}),e.filterObject.stringifiedState=Object.keys(e.filterObject.state).filter(t=>e.filterObject.state[t]).join(", ")||"",e.filterObject.dirty=e.filterObject.stringifiedState.length>0,e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}function _c(e){Vn(e.filterObject),e.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),e.requestUpdate()}function Ac(e){e.renderRoot.querySelector("#eox-map").innerHTML="",vo(e)}function Sc(e,t){t.filterObject.state.mode=e;const r=new CustomEvent("filter",{detail:{[t.filterObject.key]:{}}});t.dispatchEvent(r)}function vo(e){const t=e.renderRoot.querySelector("#eox-map");t.innerHTML===""&&(t.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const r=e.geometry&&Cc(e.geometry),n=cc(e.geometry,r);e.eoxMap=e.renderRoot.querySelector("eox-map"),setTimeout(()=>{e.eoxMap.layers=n;const i=s=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:s.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});e.dispatchEvent(a)};e.eoxMap.interactions.drawInteraction.on("drawend",s=>{i(s.feature),e.eoxMap.removeInteraction("drawInteraction")}),e.eoxMap.interactions.drawInteraction_modify.on("modifyend",s=>{i(s.features.getArray()[0])})},1e3)}function Cc(e){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:e}]}))}`}var On;class kc extends gt{constructor(){super();Fe(this,On,()=>{pc(this)});qr(this,"debouncedInputHandler",Bn(Xe(this,On),500,{leading:!0}));this.filterObject={},this.unstyled=!1,this.tabIndex=0,this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){fc(this)}createRenderRoot(){return this}render(){return Ke(this.filterObject,()=>{var r;return Q`
        <style></style>
        <div class="text-container">
          <div class="text-container-wrapper">
            <input
              type="text"
              placeholder=${this.filterObject.placeholder}
              data-cy="search"
              class="text-input"
              part="input-search"
              value="${Object.values(this.filterObject.state)[0]}"
              tabindex=${this.tabIndex}
              pattern="${((r=this.filterObject.validation)==null?void 0:r.pattern)||".*"}"
              @input="${this.debouncedInputHandler}"
              @click=${n=>n.stopPropagation()}
            />
          </div>
        </div>
        <small class="error-validation"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `})}}On=new WeakMap;customElements.define("eox-itemfilter-text",kc);function Lc(e,t,r){return e.filter(n=>{const i=n[r.config.aggregateResults];let s;return r.filters[r.config.aggregateResults]&&(s=Object.keys(r.filters[r.config.aggregateResults]).filter(l=>r.filters[r.config.aggregateResults].state[l])),(s!=null&&s.length?s.includes(t):!0)&&Array.isArray(i)?i.includes(t):i===t})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Ec}=qo,As=()=>document.createComment(""),Vr=(e,t,r)=>{var s;const n=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const a=n.insertBefore(As(),i),l=n.insertBefore(As(),i);r=new Ec(a,l,e,e.options)}else{const a=r._$AB.nextSibling,l=r._$AM,c=l!==e;if(c){let u;(s=r._$AQ)==null||s.call(r,e),r._$AM=e,r._$AP!==void 0&&(u=e._$AU)!==l._$AU&&r._$AP(u)}if(a!==i||c){let u=r._$AA;for(;u!==a;){const p=u.nextSibling;n.insertBefore(u,i),u=p}}}return r},Wt=(e,t,r=e)=>(e._$AI(t,r),e),Pc={},Rc=(e,t=Pc)=>e._$AH=t,Tc=e=>e._$AH,xi=e=>{var n;(n=e._$AP)==null||n.call(e,!1,!0);let t=e._$AA;const r=e._$AB.nextSibling;for(;t!==r;){const i=t.nextSibling;t.remove(),t=i}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ss=(e,t,r)=>{const n=new Map;for(let i=t;i<=r;i++)n.set(e[i],i);return n},Dc=Es(class extends Ps{constructor(e){if(super(e),e.type!==Rs.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const i=[],s=[];let a=0;for(const l of e)i[a]=n?n(l,a):a,s[a]=r(l,a),a++;return{values:s,keys:i}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const i=Tc(e),{values:s,keys:a}=this.dt(t,r,n);if(!Array.isArray(i))return this.ut=a,s;const l=this.ut??(this.ut=[]),c=[];let u,p,f=0,b=i.length-1,m=0,x=s.length-1;for(;f<=b&&m<=x;)if(i[f]===null)f++;else if(i[b]===null)b--;else if(l[f]===a[m])c[m]=Wt(i[f],s[m]),f++,m++;else if(l[b]===a[x])c[x]=Wt(i[b],s[x]),b--,x--;else if(l[f]===a[x])c[x]=Wt(i[f],s[x]),Vr(e,c[x+1],i[f]),f++,x--;else if(l[b]===a[m])c[m]=Wt(i[b],s[m]),Vr(e,i[f],i[b]),b--,m++;else if(u===void 0&&(u=Ss(a,m,x),p=Ss(l,f,b)),u.has(l[f]))if(u.has(l[b])){const _=p.get(a[m]),L=_!==void 0?i[_]:null;if(L===null){const S=Vr(e,i[f]);Wt(S,s[m]),c[m]=S}else c[m]=Wt(L,s[m]),Vr(e,i[f],L),i[_]=null;m++}else xi(i[b]),b--;else xi(i[f]),f++;for(;m<=x;){const _=Vr(e,c[x+1]);Wt(_,s[m]),c[m++]=_}for(;f<=b;){const _=i[f++];_!==null&&xi(_)}return this.ut=a,Rc(e,c),Ls}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class qi extends Ps{constructor(t){if(super(t),this.it=st,t.type!==Rs.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===st||t==null)return this._t=void 0,this.it=t;if(t===Ls)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}qi.directiveName="unsafeHTML",qi.resultType=1;const Mi=Es(qi);function Oc(e,t){return Q`
    <details
      class="details-results"
      @toggle=${t.handleAccordion}
      ?open=${t.config.expandResults||st}
    >
      <summary>
        <span class="title">
          ${e}
          <span class="count"
            >${t.aggregateResults(t.results,e).length}</span
          >
        </span>
      </summary>
      <div>
        ${wo(e,t)}
      </div>
    </details>
  `}function wo(e,t){const r=t.results,n=e?t.aggregateResults(r,e):r,i=t.config,s=a=>{var l;return((l=t.selectedResult)==null?void 0:l[i.idProperty])===a[i.idProperty]?"highlighted":st};return Q`
    <ul class=${t.resultType}>
      ${Dc(n,a=>a.id,a=>Q`
          <li class=${s(a)}>
            <span
              id="${a.id}"
              @click=${()=>{t.selectedResult===a?t.selectedResult=null:t.selectedResult=a,t.dispatchEvent(new CustomEvent("result",{detail:t.selectedResult}))}}
            >
              ${Ke(i.subTitleProperty,()=>Q`
                  ${Kr(i.imageProperty,a)?Q`
                        <img
                          class="image"
                          src="${Kr(i.imageProperty,a)}"
                        />
                      `:st}
                  <div class="title-container">
                    <span class="title"
                      >${Mi(a[i.titleProperty])}</span
                    >
                    <span class="subtitle"
                      >${Mi(a[i.subTitleProperty])}</span
                    >
                  </div>
                `,()=>Q`
                  <span class="title"
                    >${Mi(a[i.titleProperty])}</span
                  >
                `)}
            </span>
          </li>
        `)}
    </ul>
  `}var Zt,Vi,xo;class jc extends gt{constructor(){super();Fe(this,Zt);this.config=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list"}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Object},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String}}}aggregateResults(r,n){return Lc(r,n,this)}createRenderRoot(){return this}handleAccordion(r){uo(r,this.config,this)}render(){return Q`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${Ke(this.results.length<1,()=>Q`<small class="no-results">No matching items</small>`,()=>st)}
          <ul id="results" part="results">
            ${Ke(this.config.aggregateResults,()=>Hn(this.resultAggregation.filter(r=>this.aggregateResults(this.results,r).length),r=>Q`${Ke(this.aggregateResults(this.results,r).length===1&&this.config.autoSpreadSingle,()=>Q`<div style="margin-left: -8px">
                          ${he(this,Zt,Vi).call(this,r)}
                        </div>`,()=>he(this,Zt,xo).call(this,r))}`),()=>he(this,Zt,Vi).call(this))}
          </ul>
        </div>
      </section>
    `}}Zt=new WeakSet,Vi=function(r){return wo(r,this)},xo=function(r){return Oc(r,this)};customElements.define("eox-itemfilter-results",jc);const Nc=`input[type="checkbox"] { appearance: none; -webkit-appearance: none; margin: 0; cursor: pointer; display: flex; flex-direction: row; align-items: center; width: 24px; height: 24px;}input[type="checkbox"]:after { display: block; content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-blank-outline%3C/title%3E%3Cpath d='M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z' /%3E%3C/svg%3E"); width: 20px; height: 20px; margin-right: 4px;}input[type="checkbox"]:checked:after { content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-marked%3C/title%3E%3Cpath d='M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z' /%3E%3C/svg%3E");}`,Bc=`input[type="radio"] { appearance: none; -webkit-appearance: none; margin: 0; cursor: pointer; display: flex; flex-direction: row; align-items: center; width: 24px; height: 24px;}label span { font-size: small;}input[type="radio"]:after { display: block; content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-blank%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' /%3E%3C/svg%3E"); width: 20px; height: 20px; margin-right: 4px;}input[type="radio"]:checked:after { content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-marked%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z' /%3E%3C/svg%3E");}`;var Rt,$o,_o,Ao;class Mo extends gt{constructor(){super();Fe(this,Rt);qr(this,"debouncedInputHandler",Bn(he(this,Rt,Ao),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(r){Mc(r,this)}reset(){mc(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(r=>this.filterObject.state[r]?r:null).filter(r=>!!r),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}render(){const r=this.type.includes("multi")?"checkbox":"radio",n=this.filteredSuggestions.length>5?"select-overflow":st;return Q`
      <style>
        ${!this.unstyled&&Fr}
        ${!this.unstyled&&Nc}
        ${!this.unstyled&&Bc}
      </style>
      ${Ke(this.suggestions.length>10,()=>Q`<div class="autocomplete-container">
            <div class="autocomplete-container-wrapper">
              <input
                autocomplete="off"
                tabindex=${this.tabIndex}
                class="autocomplete-input"
                type="text"
                .value=${this.query}
                placeholder="${this.filterObject.placeholder||""}"
                @input=${he(this,Rt,$o)}
                @keydown=${he(this,Rt,_o)}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${n}">
        <ul class="${this.type}">
          ${this.filteredSuggestions.map(i=>Q`
              <li
                data-identifier="${i.toString().toLowerCase()}"
                data-title="${i}"
              >
                <label>
                  <input
                    type="${r}"
                    name=${i}
                    .checked=${this.selectedItems.includes(i)}
                    @change=${()=>this.debouncedInputHandler(i)}
                    @keydown=${s=>{s.key===" "&&this.inlineMode&&this.debouncedInputHandler(i)}}
                    tabindex=${this.tabIndex+1}
                  />
                  <span class="title">${i}</span>
                </label>
              </li>
            `)}
        </ul>
      </div>
    `}}Rt=new WeakSet,$o=function(r){wc(r,this)},_o=function(r){xc(r,this)},Ao=function(r){bo(r,this)},qr(Mo,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",Mo);(()=>{var e=Object.defineProperty,t=Math.pow,r=(d,y,$)=>y in d?e(d,y,{enumerable:!0,configurable:!0,writable:!0,value:$}):d[y]=$,n=(d,y,$)=>(r(d,typeof y!="symbol"?y+"":y,$),$),i=(d,y)=>` ${y&&y.length>0?y.map($=>`<link rel="stylesheet" href="${$}" />`).join(""):""} <style> ${d} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,s=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",l="pointers-min-distance",c="pointers-max-distance",u="range-dragging",p="data",f="min",b="max",m="step",x="round",_="type",L="theme",S="rtl",N="btt",H="disabled",K="keyboard-disabled",V="mousewheel-disabled",ie="slider-width",de="slider-height",ae="slider-radius",fe="slider-bg",ee="slider-bg-hover",G="slider-bg-fill",be="pointer-width",Oe="pointer-height",O="pointer-radius",k="pointer-bg",C="pointer-bg-hover",I="pointer-bg-focus",P="pointer-shadow",Z="pointer-shadow-hover",X="pointer-shadow-focus",pe="pointer-border",Me="pointer-border-hover",Ae="pointer-border-focus",Se="animate-onclick",Ne="css-links",ke="vertical",Be="horizontal",le=(d,y,$,w,E)=>{let U=y-d;return U===0?$:(w-$)*(E-d)/U+$},Le=d=>!isNaN(parseFloat(d))&&isFinite(d),se=(d,y)=>Le(d)?Number(d):y,Ee=(d,y)=>y===0?0:Math.round(d/y)*y,lt=(d,y=1/0)=>{if(y===1/0)return d;let $=t(10,y);return Math.round(d*$)/$},$e=d=>d==null?!1:typeof d=="boolean"?d:d.trim().toLowerCase()==="true",Kn=(d,y)=>{d.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:y}}))},Jr=(d,y)=>{d.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:y}}))},Qr=(d,y)=>{d.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:y}}))},en=(d,y)=>{d.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:y}}))},Gn=(d,y)=>{if(!y||y.length<=0)return;let $=y.map(E=>Le(E)?se(E,E):E),w={values:$||[]};w.value=$[0],w.value0=$[0],w.value1=$[0];for(let E=1;E<$.length;E++)w[`value${E+1}`]=$[E];d.dispatchEvent(new CustomEvent("change",{detail:w}))},Ar=(d,y,$)=>{let w=0,E,U,W,R,D=!1,te=(Y,ye,Pe,Ce,_e,we)=>{let He=w;Pe!==void 0&&Y>Pe&&(Y=Pe),ye!==void 0&&Y<ye&&(Y=ye),w=Y;let Ie=w;return(Ce===ke&&we||Ce===Be&&_e)&&(Ie=100-Ie),Ce===ke?y.style.top=`${Ie}%`:y.style.left=`${Ie}%`,He!==w},oe=Y=>Y===y||y.contains(Y),q=(Y,ye,Pe,Ce)=>{E=Y,U=ye,W=Pe,R=Ce},ce=Y=>{D=Y,y.classList.toggle("disabled",D),D?y.setAttribute("aria-disabled","true"):y.hasAttribute("aria-disabled")&&y.removeAttribute("aria-disabled")},Ye=(Y,ye)=>{ye==null?y.removeAttribute(Y):y.setAttribute(Y,ye)},Te=Y=>y.getAttribute(Y),z=Y=>{if(!D){switch(Y.key){case"ArrowLeft":{Y.preventDefault(),typeof E=="function"&&E($);break}case"ArrowRight":{Y.preventDefault(),typeof U=="function"&&U($);break}case"ArrowUp":{Y.preventDefault(),typeof W=="function"&&W($);break}case"ArrowDown":{Y.preventDefault(),typeof R=="function"&&R($);break}}en(d,Y)}},ne=()=>{D||Kn(d,y)};return y.className=`pointer pointer-${$}`,y.addEventListener("keydown",z),y.addEventListener("click",ne),{$pointer:y,get percent(){return w},get disabled(){return D},set disabled(Y){ce(Y)},updatePosition:te,isClicked:oe,setCallbacks:q,setAttr:Ye,getAttr:Te,destroy:()=>{y.removeEventListener("keydown",z),y.removeEventListener("click",ne),y.remove()}}},Yn=d=>{if(d==null)return;if(Array.isArray(d))return d;if(d.trim()==="")return;let y=d.split(","),$=[],w=!0;for(let E=0;E<y.length;E++){let U=y[E].trim();U!==""&&($.push(U),Le(U)||(w=!1))}return w?$.map(E=>Number(E)):$},Fn=(d,y)=>y?y.findIndex($=>$===d||$.toString().trim()===d.toString().trim()):-1,Zn=d=>({updatePosition:(y,$,w,E)=>{if($.length<=0)return;let U=$.length===1,W=$[0],R=$[$.length-1];y===ke?(d.style.removeProperty("width"),d.style.removeProperty("right"),d.style.removeProperty("left"),U?d.style.height=`${W}%`:d.style.height=`${Math.abs(W-R)}%`,E?(d.style.bottom="0%",U?d.style.top="auto":d.style.top=`${Math.min(100-R,100-W)}%`):(d.style.bottom="auto",U?d.style.top="0%":d.style.top=`${Math.min(W,R)}%`)):(d.style.removeProperty("height"),d.style.removeProperty("top"),d.style.removeProperty("bottom"),U?d.style.width=`${W}%`:d.style.width=`${Math.abs(W-R)}%`,w?(d.style.right="0%",U?d.style.left="auto":d.style.left=`${Math.min(100-R,100-W)}%`):(d.style.right="auto",U?d.style.left="0%":d.style.left=`${Math.min(W,R)}%`))}}),tn="--animate-onclick",Xn="--width",Sr="--height",Jn="--panel-bg-border-radius",Qn="--panel-bg",ei="--panel-bg-hover",ti="--panel-bg-fill",ri="--pointer-width",Qt="--pointer-height",Cr="--pointer-border-radius",rn="--pointer-bg",nn="--pointer-bg-hover",nt="--pointer-bg-focus",St="--pointer-shadow",ni="--pointer-shadow-hover",er="--pointer-shadow-focus",sn="--pointer-border",ii="--pointer-border-hover",si="--pointer-border-focus",Ot=(d,y,$)=>{let w=new Map;for(let E of d.attributes){let U=E.nodeName.trim().toLowerCase();if(!y.test(U))continue;let W=U.replace(/\D/g,"").trim(),R=W===""||W==="0"||W==="1"?0:se(W,0)-1,D=$&&typeof $=="function"?$(E.value):E.value;w.set(R,D)}return w},oi=d=>{if(!d)return null;let y=d.getAttribute(Ne);if(!y)return null;let $=y.split(";"),w=[];for(let E of $)E.trim()!==""&&w.push(E.trim());return w},tr=[[Xn,ie,"sliderWidth",null],[Sr,de,"sliderHeight",null],[Jn,ae,"sliderRadius",null],[Qn,fe,"sliderBg",null],[ei,ee,"sliderBgHover",null],[ti,G,"sliderBgFill",null],[ri,be,"pointer#Width",/^pointer([0-9]*)-width$/],[Qt,Oe,"pointer#Height",/^pointer([0-9]*)-height$/],[Cr,O,"pointer#Radius",/^pointer([0-9]*)-radius$/],[rn,k,"pointer#Bg",/^pointer([0-9]*)-bg$/],[nn,C,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[nt,I,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[St,P,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[ni,Z,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[er,X,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[sn,pe,"pointer#Border",/^pointer([0-9]*)-border$/],[ii,Me,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[si,Ae,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],jt=(d,y,$)=>{let w=null,E=[],U=new Map,W=(z,ne=y)=>{let Y=[...ne.classList];for(let ye of Y)ye.startsWith(z)&&y.classList.remove(ye)},R=()=>{W("shape");let z=y.querySelectorAll(".pointer");for(let ne of z)W("shape",ne)},D=z=>{w=z,W("theme-"),typeof z=="string"&&y.classList.add(`theme-${z}`)},te=()=>{if(R(),!(E.length<=0)){y.classList.add("shape",`shape-${E[0]}`);for(let z=1;z<E.length;z++){let ne=E[z];if(!ne)continue;let Y=y.querySelector(`.pointer-${z}`);!Y||Y.classList.add("shape",`shape-${ne}`)}}},oe=(z,ne)=>{E[z]=ne,te()},q=()=>{R();let z=Ot(d,/^pointer([0-9]*)-shape$/);if(!(z.size<=0)){for(let ne of z){let Y=ne[0];E[Y]=ne[1]}te()}},ce=(z,ne)=>`${z}-${ne}`,Ye=(z,ne,Y)=>{let ye=$[Y];if(!ye)return;let Pe=Y===0?y:ye.$pointer;if(ne==null){U.has(ce(z,Y))&&U.delete(ce(z,Y)),Pe.style.removeProperty(z);return}U.set(ce(z,Y),ne),Pe.style.setProperty(z,ne)},Te=(z,ne)=>U.get(ce(z,ne));return(()=>{for(let z of tr){let[ne,Y,ye,Pe]=z;if(Pe){let _e=Ot(d,Pe);for(let we of _e){let He=we[0],Ie=we[1];Ye(ne,Ie,He)}}else{let _e=d.getAttribute(Y);Ye(ne,_e,0)}let Ce=[];if(ye.indexOf("#")===-1)Ce.push([ye,0]);else{Ce.push([ye.replace("#",""),0]),Ce.push([ye.replace("#","0"),0]),Ce.push([ye.replace("#","1"),0]);for(let _e=1;_e<$.length;_e++)Ce.push([ye.replace("#",(_e+1).toString()),_e])}for(let _e of Ce)try{let we=_e[0],He=_e[1];Object.prototype.hasOwnProperty.call(d,we)||Object.defineProperty(d,we,{get(){return Te(ne,He)},set:Ie=>{Ye(ne,Ie,He)}})}catch(we){console.error(we)}}D(d.getAttribute(L)),q()})(),{setStyle:Ye,getStyle:Te,get theme(){return w},set theme(z){D(z)},get pointerShapes(){return E},setPointerShape:oe}},ct="animate-on-click",rr="range-dragging",kr=(d,y,$,w)=>{let E=[],U=oe=>{for(let q of E)q.update&&typeof q.update=="function"&&q.update(oe)},W=()=>{for(let oe of E)oe.destroy&&typeof oe.destroy=="function"&&oe.destroy()},R=(oe,q)=>{for(let ce of E)ce.onAttrChange&&typeof ce.onAttrChange=="function"&&ce.onAttrChange(oe,q)},D=oe=>{if(oe.gettersAndSetters){for(let q of oe.gettersAndSetters)if(!(!q.name||!q.attributes))try{Object.prototype.hasOwnProperty.call(d,q.name)||Object.defineProperty(d,q.name,q.attributes)}catch(ce){console.error("defineSettersGetters error:",ce)}}},te=oe=>{var q;if(!oe.css)return;let ce=(q=d.shadowRoot)==null?void 0:q.querySelector("style");!ce||(ce.innerHTML+=oe.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let oe of window.tcRangeSliderPlugins){let q=oe();E.push(q),q.init&&typeof q.init=="function"&&(q.init(d,y,$,w),D(q),te(q))}},update:U,onAttrChange:R,destroy:W}},Nt=10,on=20,ai=(d,y)=>{let $=new Map,w=/^value([0-9]*)$/;for(let R of d.attributes){let D=R.nodeName.trim().toLowerCase();if(!w.test(D))continue;let te=D.replace("value","").trim(),oe=te===""||te==="0"||te==="1"?0:se(te,0)-1,q=Le(R.value)?se(R.value,0):R.value;$.set(oe,q)}let E=Math.max(...Array.from($.keys())),U=[];U.push([Ar(d,y,0),$.get(0)]);let W=y;for(let R=1;R<=E;R++){let D=y.cloneNode(!0);W.after(D),W=D,U.push([Ar(d,D,R),$.get(R)])}return U},an=(d,y,$,w,E,U,W)=>{try{Object.defineProperty(d,w,{configurable:!0,get(){if(!y)return;let R=y.pointers[$];if(!R)return;let D=y.getTextValue(R.percent);return Le(D)?se(D,D):D},set:R=>{y.pointers[$]?y==null||y.setValue(R,$):y==null||y.addPointer(R)}}),Object.defineProperty(d,E,{configurable:!0,get(){var R,D;return(D=(R=y==null?void 0:y.pointers[$])==null?void 0:R.getAttr("aria-label"))!=null?D:void 0},set:R=>{!y||y.setAriaLabel($,R)}}),Object.defineProperty(d,U,{configurable:!0,get(){var R,D;return(D=(R=y==null?void 0:y.styles)==null?void 0:R.pointerShapes[$])!=null?D:null},set:R=>{!y||!y.styles||y.styles.setPointerShape($,R)}}),Object.defineProperty(d,W,{configurable:!0,get(){var R;return(R=y==null?void 0:y.pointers[$].disabled)!=null?R:!1},set:R=>{if(!y)return;let D=y==null?void 0:y.pointers[$];!D||(D.disabled=R)}})}catch(R){console.error(R)}},li=(d,y)=>{let $=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let w=2;w<Nt;w++)$.push([`value${w}`,`ariaLabel${w}`,`pointer${w}Shape`,`pointer${w}Disabled`,w-1]);for(let w of $)an(d,y,w[4],w[0],w[1],w[2],w[3])},ln=(d,y,$)=>{var w;let E=(w=$.shadowRoot)==null?void 0:w.querySelector(".container");if(E)for(let U of d)y?E.prepend(U.$pointer):E.append(U.$pointer)},nr=(d,y)=>{if(!(!y||d.length<=1)){for(let $ of d)$.$pointer.style.zIndex=on.toString();y.$pointer.style.zIndex=(on*2).toString()}},Bt=0,Ct=100,Ge=2,cn="0.3s",ci=(d,y,$)=>{let w=$.map(g=>g[0]),E=null,U=null,W=null,R=null,D=Bt,te=Ct,oe,q,ce=Be,Ye=Ge,Te=!1,z=!1,ne=!1,Y=0,ye=1/0,Pe=!1,Ce,_e,we=!1,He=!1,Ie=!1,ut=cn,un=[],Er=g=>{we||(g.preventDefault&&g.preventDefault(),bt(g),window.addEventListener("mousemove",bt),window.addEventListener("mouseup",ir),Jr(d,g))},ir=g=>{we||(Ce=void 0,_e=void 0,window.removeEventListener("mousemove",bt),window.removeEventListener("mouseup",ir),ut&&y.classList.add(ct),Qr(d,g))},hi=(g,M)=>{if(w.length<=0)return;if(w.length===1)return w[0].isClicked(g)&&ut&&y.classList.remove(ct),w[0];let j=pi(g);if(Pe){let ue=M,Ve=zt(ue);Ve!==void 0&&(ue=Ee(ue,Ve)),j?(Ce=ue,_e=0,ut&&y.classList.remove(ct)):Ce!==void 0&&(_e=ue-Ce,Ce=ue)}if(!fi(g)&&!j){for(let ue of w)if(!(!ue.isClicked(g)||ue.disabled))return ut&&y.classList.remove(ct),ue;for(let ue of w)if(E===ue)return ue}let re=1/0,ge=null;for(let ue of w){if(ue.disabled)continue;let Ve=Math.abs(M-ue.percent);Ve<re&&(re=Ve,ge=ue)}return ge},sr=()=>w.findIndex(g=>E===g&&!g.disabled),bt=g=>{let M;if(ce===ke){let{height:re,top:ge}=y.getBoundingClientRect(),ue=g.type.indexOf("mouse")!==-1?g.clientY:g.touches[0].clientY;M=Math.min(Math.max(0,ue-ge),re)*100/re}else{let{width:re,left:ge}=y.getBoundingClientRect(),ue=g.type.indexOf("mouse")!==-1?g.clientX:g.touches[0].clientX;M=Math.min(Math.max(0,ue-ge),re)*100/re}if((Te||z)&&(M=100-M),E=hi(g.target,M),E&&nr(w,E),Pe&&w.length>1&&_e!==void 0){let re=w[0],ge=w[w.length-1],ue=re.percent+_e<0,Ve=ge.percent+_e>100;if(ue||Ve)return;for(let Mt=0;Mt<w.length;Mt++)Re(Mt,w[Mt].percent+_e);return}let j=sr();j!==-1&&(Re(j,M),E==null||E.$pointer.focus())},or=g=>{if(we||document.activeElement!==d||E!=null&&E.disabled)return;g.stopPropagation(),g.preventDefault();let M=g.deltaY<0,j=Te||z,re=M?!j:j,ge=sr();ge!==-1&&(re?Ht(ge,w[ge].percent):It(ge,w[ge].percent))},dn=g=>{we||He||(ce===ke?z?Re(g,100):Re(g,0):Te?It(g,w[g].percent):Ht(g,w[g].percent))},hn=g=>{we||He||(ce===ke?z?Re(g,0):Re(g,100):Te?Ht(g,w[g].percent):It(g,w[g].percent))},fn=g=>{we||He||(ce===ke?z?It(g,w[g].percent):Ht(g,w[g].percent):Te?Re(g,100):Re(g,0))},pn=g=>{we||He||(ce===ke?z?Ht(g,w[g].percent):It(g,w[g].percent):Te?Re(g,0):Re(g,100))},fi=g=>g.classList.contains("panel"),pi=g=>g.classList.contains("panel-fill"),Ht=(g,M)=>{if(M===void 0)return;let j=zt(M);j==null&&(j=1),M-=j,M<0&&(M=0),Re(g,M)},It=(g,M)=>{if(M===void 0)return;let j=zt(M);j==null&&(j=1),M+=j,M>100&&(M=100),Re(g,M)},mt=()=>{!R||R.update({percents:yn(),values:bn(),$pointers:Rr(),min:qt(),max:mn(),data:Tr(),step:Pr(),round:lr(),type:Dr(),textMin:ar(),textMax:vt(),rightToLeft:it(),bottomToTop:jr(),pointersOverlap:Ut(),pointersMinDistance:cr(),pointersMaxDistance:Or(),rangeDragging:Ze(),disabled:Nr(),keyboardDisabled:Vt(),mousewheelDisabled:dr()})},gn=()=>{mt()},gi=g=>{if(!(ne||w.length<=1||te===D))if(g===0){let M=ye*100/(te-D);return Math.max(0,w[g+1].percent-M)}else{let M=Y*100/(te-D);return Math.min(w[g-1].percent+M,100)}},yi=g=>{if(!(ne||w.length<=1||te===D))if(g===w.length-1){let M=ye*100/(te-D);return Math.min(w[g-1].percent+M,100)}else{let M=Y*100/(te-D);return Math.max(0,w[g+1].percent-M)}},zt=g=>{let M;if(typeof oe=="function"){let j=le(0,100,D,te,g);M=oe(j,g)}else M=oe;if(Le(M)){let j=te-D;return M=j===0?0:M*100/j,M}},kt=g=>{if(g===void 0)return;let M=le(0,100,D,te,g);return q!==void 0?q[Math.round(M)]:lt(M,Ye)},ar=()=>q!==void 0?q[D]:D,vt=()=>q!==void 0?q[te]:te,Pr=()=>oe,Lt=g=>{var M;return g<=0||ne?ar():(M=kt(w[g-1].percent))!=null?M:""},dt=g=>{var M;return w.length<=1||g>=w.length-1||ne?vt():(M=kt(w[g+1].percent))!=null?M:""},yn=()=>w.map(g=>g.percent),bn=()=>w.map(g=>kt(g.percent)),Rr=()=>w.map(g=>g.$pointer),qt=()=>D,mn=()=>te,Tr=()=>q,Dr=()=>ce,lr=()=>Ye,cr=()=>Y,Or=()=>ye,ur=g=>un[g],it=()=>Te,jr=()=>z,Nr=()=>we,Vt=()=>He,dr=()=>Ie,Ut=()=>ne,Ze=()=>Pe,Re=(g,M)=>{if(M===void 0)return;let j=zt(M);j!==void 0&&(M=Ee(M,j));let re=w[g];if(!re)return;let ge=re.updatePosition(M,gi(g),yi(g),ce,Te,z);U==null||U.updatePosition(ce,w.map(ue=>ue.percent),Te,z),mt();for(let ue of w){let Ve=kt(ue.percent);Ve!==void 0&&(ue.setAttr("aria-valuenow",Ve.toString()),ue.setAttr("aria-valuetext",Ve.toString()))}Br(),ge&&Gn(d,w.map(ue=>kt(ue.percent)))},et=()=>{for(let g=0;g<w.length;g++)Re(g,w[g].percent)},vn=(g,M)=>{D=q!==void 0?0:se(g,Bt),te=q!==void 0?q.length-1:se(M,Ct),wt(D),xt(te)},Br=()=>{var g,M;for(let j=0;j<w.length;j++){let re=w[j];re.setAttr("aria-valuemin",((g=Lt(j))!=null?g:"").toString()),re.setAttr("aria-valuemax",((M=dt(j))!=null?M:"").toString())}},wt=g=>{D=se(g,Bt),D>te&&(te=D+Ct),et()},xt=g=>{te=se(g,Ct),te<D&&(te=D+Ct),et()},hr=g=>{ne=!0;for(let M=0;M<g.length;M++)fr(g[M],M);ne=!1;for(let M=0;M<g.length;M++)fr(g[M],M)},fr=(g,M)=>{let j;q!==void 0?(j=g==null?0:Fn(g,q),j===-1&&(j=0)):(j=se(g,D),j<D&&(j=D),j>te&&(j=te));let re=le(D,te,0,100,j);Re(M,re)},pr=g=>{if(g==null){oe=void 0;return}if(typeof g=="function"){oe=g,et();return}if(Le(g)){oe=se(g,1);let M=Math.abs(te-D);oe>M&&(oe=void 0),et();return}oe=void 0},Hr=g=>{ne=g,et()},Ir=g=>{(!Le(g)||g<0)&&(g=0),Y=g},Et=g=>{(!Le(g)||g<0)&&(g=1/0),ye=g},zr=g=>{we=g,y.classList.toggle("disabled",we),we?y.setAttribute("aria-disabled","true"):y.hasAttribute("aria-disabled")&&y.removeAttribute("aria-disabled")},wn=g=>{He=g},o=g=>{Ie=g,Ie?document.removeEventListener("wheel",or):document.addEventListener("wheel",or,{passive:!1})},h=g=>{if(g==null){q=void 0;return}if(q=Yn(g),q===void 0||q.length<=0){q=void 0;return}wt(0),xt(q.length-1),oe===void 0&&pr(1)},v=g=>{var M;typeof g=="string"?ce=g.trim().toLowerCase()===ke?ke:Be:ce=Be;let j=(M=d.shadowRoot)==null?void 0:M.querySelector(".range-slider-box");if(!j)return;j.className=`range-slider-box type-${ce}`,et();let re=ce===ke?"vertical":"horizontal";for(let ge of w)ge.setAttr("aria-orientation",re)},A=g=>{Te=g,w.length>1&&ln(w,Te,d),et(),mt()},B=g=>{z=g,w.length>1&&ln(w,z,d),et(),mt()},T=g=>{Ye=se(g,Ge),Ye<0&&(Ye=Ge),mt()},F=g=>{g==null||g.toString().trim().toLowerCase()==="false"?(ut=void 0,y.style.removeProperty(tn),y.classList.remove(ct)):(ut=g.toString(),y.style.setProperty(tn,ut),y.classList.add(ct))},xe=(g,M)=>{let j=w[g];!j||(j.setAttr("aria-label",M),un[g]=M)},me=g=>{if(Ce=void 0,w.length<=1){Pe=!1,y.classList.remove(rr);return}Pe=g,y.classList.toggle(rr,Pe)},De=()=>{zr($e(d.getAttribute(H))),He=$e(d.getAttribute(K)),Ie=$e(d.getAttribute(V));let g=Ot(d,/^pointer([0-9]*)-disabled$/,M=>$e(M));for(let M of g){let j=M[0];!w[j]||(w[j].disabled=M[1])}},ze=()=>{let g=Ot(d,/^aria-label([0-9]*)$/);for(let M of g){let j=M[0];xe(j,M[1])}},qe=g=>{let M=w.length,j=w[M-1].$pointer,re=j.cloneNode(!0);j.after(re);let ge=Ar(d,re,M);return ge.setCallbacks(dn,hn,fn,pn),w.push(ge),fr(g,M),et(),mt(),M},je=()=>{let g=w.length,M=w[g-1];return M?(M.destroy(),w.pop(),w.length<=1&&me(!1),et(),mt(),g-1):-1};return(()=>{var g,M;for(let re of w)re.setCallbacks(dn,hn,fn,pn);let j=(g=d.shadowRoot)==null?void 0:g.querySelector(".panel-fill");j&&(U=Zn(j)),v(d.getAttribute(_)),A($e(d.getAttribute(S))),B($e(d.getAttribute(N))),vn(d.getAttribute(f),d.getAttribute(b)),pr(d.getAttribute(m)),h(d.getAttribute(p)),hr($.map(re=>re[1])),Hr($e(d.getAttribute(a))),Ir(se(d.getAttribute(l),0)),Et(se(d.getAttribute(c),1/0)),me($e(d.getAttribute(u))),T(se(d.getAttribute(x),Ge)),De(),ze(),W=jt(d,y,w),F((M=d.getAttribute(Se))!=null?M:cn),y.addEventListener("mousedown",Er),y.addEventListener("mouseup",ir),y.addEventListener("touchmove",bt),y.addEventListener("touchstart",bt),Ie||document.addEventListener("wheel",or,{passive:!1}),R=kr(d,gn,{setValues:hr,setMin:wt,setMax:xt,setStep:pr,setPointersOverlap:Hr,setPointersMinDistance:Ir,setPointersMaxDistance:Et,setDisabled:zr,setType:v,setRightToLeft:A,setBottomToTop:B,setRound:T,setKeyboardDisabled:wn,setMousewheelDisabled:o,setRangeDragging:me,setData:h},{getPercents:yn,getValues:bn,getPointerElements:Rr,getMin:qt,getMax:mn,getStep:Pr,getData:Tr,getType:Dr,getRound:lr,getTextMin:ar,getTextMax:vt,isRightToLeft:it,isBottomToTop:jr,isDisabled:Nr,isKeyboardDisabled:Vt,isMousewheelDisabled:dr,isPointersOverlap:Ut,isRangeDraggingEnabled:Ze,getPointersMinDistance:cr,getPointersMaxDistance:Or}),R.init()})(),{get pointers(){return w},get styles(){return W},get pluginsManager(){return R},get min(){return ar()},get max(){return vt()},get step(){return Pr()},get pointersOverlap(){return Ut()},set pointersOverlap(g){Hr(g)},get pointersMinDistance(){return cr()},set pointersMinDistance(g){Ir(g)},get pointersMaxDistance(){return Or()},set pointersMaxDistance(g){Et(g)},get disabled(){return Nr()},set disabled(g){zr(g)},get data(){return Tr()},get type(){return Dr()},set type(g){v(g)},get rightToLeft(){return it()},set rightToLeft(g){A(g)},get bottomToTop(){return jr()},set bottomToTop(g){B(g)},get round(){return lr()},set round(g){T(g)},get animateOnClick(){return ut},set animateOnClick(g){F(g)},get keyboardDisabled(){return Vt()},set keyboardDisabled(g){wn(g)},get mousewheelDisabled(){return dr()},set mousewheelDisabled(g){o(g)},get rangeDragging(){return Ze()},set rangeDragging(g){me(g)},setMin:wt,setMax:xt,setValue:fr,setStep:pr,setData:h,getTextValue:kt,setAriaLabel:xe,getAriaLabel:ur,addPointer:qe,removePointer:je,destroy:()=>{y.removeEventListener("mousedown",Er),y.removeEventListener("mouseup",ir),y.removeEventListener("touchmove",bt),y.removeEventListener("touchstart",bt),document.removeEventListener("wheel",or);for(let g of w)g.destroy();R==null||R.destroy()}}},ui=(d,y,$)=>{let w=tr.find(([R,D,te,oe])=>D.replace("#","")===y.replace(/\d+/g,""));if(w&&d.styles){let[R,D,te,oe]=w,q=y.replace(/\D/g,"").trim(),ce=q===""||q==="0"||q==="1"?0:se(q,0)-1;d.styles.setStyle(R,$,ce);return}switch(d&&d.pluginsManager&&d.pluginsManager.onAttrChange(y,$),y){case f:{d.setMin($);break}case b:{d.setMax($);break}case m:{d.setStep($);break}case a:{d.pointersOverlap=$e($);break}case l:{d.pointersMinDistance=se($,0);break}case u:{d.rangeDragging=$e($);break}case c:{d.pointersMaxDistance=se($,1/0);break}case H:{d.disabled=$e($);break}case K:{d.keyboardDisabled=$e($);break}case V:{d.mousewheelDisabled=$e($);break}case p:{d.setData($);break}case _:{d.type=$;break}case S:{d.rightToLeft=$e($);break}case N:{d.bottomToTop=$e($);break}case x:{d.round=se($,Ge);break}case L:{d.styles&&(d.styles.theme=$);break}case Se:{d.animateOnClick=$;break}}let E=null;if(/^value([0-9]*)$/.test(y)&&(E="value"),/^pointer([0-9]*)-disabled$/.test(y)&&(E="pointer-disabled"),/^aria-label([0-9]*)$/.test(y)&&(E="aria-label"),/^pointer([0-9]*)-shape$/.test(y)&&(E="pointer-shape"),!E)return;let U=y.replace(/\D/g,"").trim(),W=U===""||U==="0"||U==="1"?0:se(U,0)-1;switch(E){case"value":{d.setValue($,W);break}case"pointer-disabled":{let R=d==null?void 0:d.pointers[W];if(!R)return;R.disabled=$e($);break}case"aria-label":{d.setAriaLabel(W,$);break}case"pointer-shape":{d.styles&&d.styles.setPointerShape(W,$);break}}},di=class extends HTMLElement{constructor(){super(),n(this,"slider"),n(this,"_externalCSSList",[]),n(this,"_observer",null),this.attachShadow({mode:"open"})}set step(d){this.slider&&this.slider.setStep(d)}get step(){var d;return(d=this.slider)==null?void 0:d.step}set disabled(d){this.slider&&(this.slider.disabled=d)}get disabled(){var d,y;return(y=(d=this.slider)==null?void 0:d.disabled)!=null?y:!1}set data(d){var y;(y=this.slider)==null||y.setData(d)}get data(){var d;return(d=this.slider)==null?void 0:d.data}set min(d){var y;(y=this.slider)==null||y.setMin(d)}get min(){var d;return(d=this.slider)==null?void 0:d.min}set max(d){var y;(y=this.slider)==null||y.setMax(d)}get max(){var d;return(d=this.slider)==null?void 0:d.max}set round(d){!this.slider||(this.slider.round=d)}get round(){var d,y;return(y=(d=this.slider)==null?void 0:d.round)!=null?y:Ge}set type(d){!this.slider||(this.slider.type=d??Be)}get type(){var d;return((d=this.slider)==null?void 0:d.type)||Be}set pointersOverlap(d){!this.slider||(this.slider.pointersOverlap=d)}get pointersOverlap(){var d,y;return(y=(d=this.slider)==null?void 0:d.pointersOverlap)!=null?y:!1}set pointersMinDistance(d){!this.slider||(this.slider.pointersMinDistance=d)}get pointersMinDistance(){var d,y;return(y=(d=this.slider)==null?void 0:d.pointersMinDistance)!=null?y:0}set pointersMaxDistance(d){!this.slider||(this.slider.pointersMaxDistance=d)}get pointersMaxDistance(){var d,y;return(y=(d=this.slider)==null?void 0:d.pointersMaxDistance)!=null?y:1/0}set theme(d){!this.slider||!this.slider.styles||(this.slider.styles.theme=d)}get theme(){var d,y,$;return($=(y=(d=this.slider)==null?void 0:d.styles)==null?void 0:y.theme)!=null?$:null}set rtl(d){!this.slider||(this.slider.rightToLeft=d)}get rtl(){var d,y;return(y=(d=this.slider)==null?void 0:d.rightToLeft)!=null?y:!1}set btt(d){!this.slider||(this.slider.bottomToTop=d)}get btt(){var d,y;return(y=(d=this.slider)==null?void 0:d.bottomToTop)!=null?y:!1}set keyboardDisabled(d){!this.slider||(this.slider.keyboardDisabled=d)}get keyboardDisabled(){var d,y;return(y=(d=this.slider)==null?void 0:d.keyboardDisabled)!=null?y:!1}set mousewheelDisabled(d){!this.slider||(this.slider.mousewheelDisabled=d)}get mousewheelDisabled(){var d,y;return(y=(d=this.slider)==null?void 0:d.mousewheelDisabled)!=null?y:!1}set animateOnClick(d){!this.slider||(this.slider.animateOnClick=d)}get animateOnClick(){var d;return(d=this.slider)==null?void 0:d.animateOnClick}get rangeDragging(){var d,y;return(y=(d=this.slider)==null?void 0:d.rangeDragging)!=null?y:!1}set rangeDragging(d){this.slider&&(this.slider.rangeDragging=$e(d))}get externalCSSList(){return this._externalCSSList}addPointer(d){var y,$;if(!this.slider)return;let w=($=(y=this.slider)==null?void 0:y.addPointer(d))!=null?$:0;an(this,this.slider,w,`value${w+1}`,`ariaLabel${w+1}`,`pointerShape${w+1}`,`pointer${w+1}Disabled`)}removePointer(){var d;!this.slider||(d=this.slider)==null||d.removePointer()}addCSS(d){if(!this.shadowRoot)return;let y=document.createElement("style");y.textContent=d,this.shadowRoot.appendChild(y)}connectedCallback(){var d,y;if(!this.shadowRoot)return;this._externalCSSList=oi(this),this.shadowRoot.innerHTML=i(s,this._externalCSSList);let $=(d=this.shadowRoot)==null?void 0:d.querySelector(".pointer");if(!$)return;let w=(y=this.shadowRoot)==null?void 0:y.getElementById("range-slider");if(!w)return;let E=ai(this,$);this.slider=ci(this,w,E),li(this,this.slider),this._observer=new MutationObserver(U=>{U.forEach(W=>{var R;if(!this.slider||W.type!=="attributes")return;let D=W.attributeName;!D||ui(this.slider,D,(R=this.getAttribute(D))!=null?R:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Lr=di;window.tcRangeSlider=Lr,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Lr),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Lr{})})();var Xt,Co,Ui;class So extends gt{constructor(){super();Fe(this,Xt);this.filterObject={},this.tabIndex=0,this.inputHandler=he(this,Xt,Co).bind(this),this.debouncedInputHandler=Bn(this.inputHandler,0,{leading:!0})}reset(){gc(this)}createRenderRoot(){return this}render(){return Ke(this.filterObject,()=>Q`
        ${he(this,Xt,Ui).call(this,"min","before")}
        <tc-range-slider
          min="${this.filterObject.min}"
          max="${this.filterObject.max}"
          value1="${this.filterObject.min||this.filterObject.state.min}"
          value2="${this.filterObject.max||this.filterObject.state.max}"
          step="${this.filterObject.step||1}"
          @change=${this.debouncedInputHandler}
        ></tc-range-slider>
        ${he(this,Xt,Ui).call(this,"max","after")}
      `)}}Xt=new WeakSet,Co=function(r){yc(r,this)},Ui=function(r,n){return bc(r,n,this)},qr(So,"properties",{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}});customElements.define("eox-itemfilter-range",So);var jn,ko;class Hc extends gt{constructor(){super();Fe(this,jn);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){_c(this)}createRenderRoot(){return this}render(){return Ke(this.filterObject,()=>{var r;return Q`
        <form style="display: inline">
          ${Hn(["intersects","within"],n=>Q`
              <label>
                <input
                  tabindex=${this.tabIndex}
                  type="radio"
                  name="mode"
                  .checked="${(this.filterObject.state.mode||"")===n||st}"
                  value="${n}"
                  @click=${()=>he(this,jn,ko).call(this,n)}
                />
                <small>${n} filter geometry</small>
              </label>
            `)}
        </form>
        <eox-itemfilter-spatial-filter
          exportparts="map: spatial-filter-map"
          .geometry="${(r=this.filterObject.state)==null?void 0:r.geometry}"
          @filter="${n=>{this.filterObject.state.geometry=n.detail.geometry,this.filterObject.dirty=!0,this.filterObject.stringifiedState="Polygon",this.dispatchEvent(new CustomEvent("filter"))}}"
        ></eox-itemfilter-spatial>
      `})}}jn=new WeakSet,ko=function(r){Sc(r,this)};customElements.define("eox-itemfilter-spatial",Hc);var Nn,Lo;class Ic extends gt{constructor(){super();Fe(this,Nn);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){he(this,Nn,Lo).call(this)}reset(){Ac(this)}render(){return Q`<div id="eox-map"></div>`}}Nn=new WeakSet,Lo=function(){vo(this)};customElements.define("eox-itemfilter-spatial-filter",Ic);function zc(e,t){t.renderRoot.querySelectorAll(".chip").forEach(r=>{r.classList.remove("highlighted")}),e.target.classList.add("highlighted"),t.requestUpdate()}function qc(e,t){const{code:r,target:n}=e;n.id==="eox-itemfilter-input-search"&&(t.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(r)||(r==="Space"&&e.preventDefault(),["Escape","Space","Enter"].includes(r)||e.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(r)&&Vc(r,e.target.value??"",t)))}function Vc(e,t,r){const n=r.renderRoot.querySelector(".chip.highlighted");if((e==="Escape"||t)&&n&&n.classList.remove("highlighted"),e==="Backspace"&&!t){if(r.items.length){n&&(n.querySelector(".chip-item-close").click(),r.items.splice(Array.from(r.renderRoot.querySelectorAll(".chip")).indexOf(n),1));const i=r.renderRoot.querySelectorAll(".chip")[r.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),r.requestUpdate()}r._dispatchEvent()}if((e==="ArrowLeft"||e==="ArrowRight")&&!t){if(r.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const s=r.renderRoot.querySelector(".chip.highlighted");s&&(i=Array.from(r.renderRoot.querySelectorAll(".chip")).indexOf(s),s.classList.remove("highlighted")),i=i+(e==="ArrowLeft"?-1:1),e==="ArrowLeft"&&i<0&&(i=r.renderRoot.querySelectorAll(".chip").length-1),e==="ArrowRight"&&i>r.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(r.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}var Jt,Wi,Eo;class Uc extends gt{constructor(){super();Fe(this,Jt);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",he(this,Jt,Wi).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",he(this,Jt,Wi).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return Q`
      <style>
        ${Fr}
      </style>
      <span class="chip-container">
        ${Hn(this.items,r=>Q`
            <span class="chip" @click=${he(this,Jt,Eo).bind(this)}>
              <span class="chip-title">${r.title}</span>
                <span
                  class="chip-item-close hidden"
                  data-close=${r.key}
                  @click=${n=>{n.stopPropagation(),this.controller.remove(n),this.requestUpdate()}}
                ></span>
            </span>
            </span>
          `)}
      </span>
    `}}Jt=new WeakSet,Wi=function(r){qc(r,this)},Eo=function(r){zc(r,this)};customElements.define("eox-itemfilter-chips",Uc);const Wc=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),Cs=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var Kc=200,es="__lodash_hash_undefined__",Gc=1/0,Yc="[object Function]",Fc="[object GeneratorFunction]",Zc=/[\\^$.*+?()[\]{}|]/g,Xc=/^\[object .+?Constructor\]$/,Jc=typeof $t=="object"&&$t&&$t.Object===Object&&$t,Qc=typeof self=="object"&&self&&self.Object===Object&&self,ts=Jc||Qc||Function("return this")();function eu(e,t){var r=e?e.length:0;return!!r&&ru(e,t,0)>-1}function tu(e,t,r,n){for(var i=e.length,s=r+-1;++s<i;)if(t(e[s],s,e))return s;return-1}function ru(e,t,r){if(t!==t)return tu(e,nu,r);for(var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1}function nu(e){return e!==e}function iu(e,t){return e.has(t)}function su(e,t){return e==null?void 0:e[t]}function ou(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}function Po(e){var t=-1,r=Array(e.size);return e.forEach(function(n){r[++t]=n}),r}var au=Array.prototype,lu=Function.prototype,Ro=Object.prototype,$i=ts["__core-js_shared__"],ks=function(){var e=/[^.]+$/.exec($i&&$i.keys&&$i.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),To=lu.toString,rs=Ro.hasOwnProperty,cu=Ro.toString,uu=RegExp("^"+To.call(rs).replace(Zc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),du=au.splice,hu=ns(ts,"Map"),_i=ns(ts,"Set"),Gr=ns(Object,"create");function Ft(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function fu(){this.__data__=Gr?Gr(null):{}}function pu(e){return this.has(e)&&delete this.__data__[e]}function gu(e){var t=this.__data__;if(Gr){var r=t[e];return r===es?void 0:r}return rs.call(t,e)?t[e]:void 0}function yu(e){var t=this.__data__;return Gr?t[e]!==void 0:rs.call(t,e)}function bu(e,t){var r=this.__data__;return r[e]=Gr&&t===void 0?es:t,this}Ft.prototype.clear=fu;Ft.prototype.delete=pu;Ft.prototype.get=gu;Ft.prototype.has=yu;Ft.prototype.set=bu;function $r(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function mu(){this.__data__=[]}function vu(e){var t=this.__data__,r=Un(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():du.call(t,r,1),!0}function wu(e){var t=this.__data__,r=Un(t,e);return r<0?void 0:t[r][1]}function xu(e){return Un(this.__data__,e)>-1}function Mu(e,t){var r=this.__data__,n=Un(r,e);return n<0?r.push([e,t]):r[n][1]=t,this}$r.prototype.clear=mu;$r.prototype.delete=vu;$r.prototype.get=wu;$r.prototype.has=xu;$r.prototype.set=Mu;function _r(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function $u(){this.__data__={hash:new Ft,map:new(hu||$r),string:new Ft}}function _u(e){return Wn(this,e).delete(e)}function Au(e){return Wn(this,e).get(e)}function Su(e){return Wn(this,e).has(e)}function Cu(e,t){return Wn(this,e).set(e,t),this}_r.prototype.clear=$u;_r.prototype.delete=_u;_r.prototype.get=Au;_r.prototype.has=Su;_r.prototype.set=Cu;function Rn(e){var t=-1,r=e?e.length:0;for(this.__data__=new _r;++t<r;)this.add(e[t])}function ku(e){return this.__data__.set(e,es),this}function Lu(e){return this.__data__.has(e)}Rn.prototype.add=Rn.prototype.push=ku;Rn.prototype.has=Lu;function Un(e,t){for(var r=e.length;r--;)if(Nu(e[r][0],t))return r;return-1}function Eu(e){if(!Do(e)||Du(e))return!1;var t=Bu(e)||ou(e)?uu:Xc;return t.test(Ou(e))}function Pu(e,t,r){var n=-1,i=eu,s=e.length,a=!0,l=[],c=l;if(s>=Kc){var u=Ru(e);if(u)return Po(u);a=!1,i=iu,c=new Rn}else c=l;e:for(;++n<s;){var p=e[n],f=p;if(p=p!==0?p:0,a&&f===f){for(var b=c.length;b--;)if(c[b]===f)continue e;l.push(p)}else i(c,f,r)||(c!==l&&c.push(f),l.push(p))}return l}var Ru=_i&&1/Po(new _i([,-0]))[1]==Gc?function(e){return new _i(e)}:Hu;function Wn(e,t){var r=e.__data__;return Tu(t)?r[typeof t=="string"?"string":"hash"]:r.map}function ns(e,t){var r=su(e,t);return Eu(r)?r:void 0}function Tu(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Du(e){return!!ks&&ks in e}function Ou(e){if(e!=null){try{return To.call(e)}catch{}try{return e+""}catch{}}return""}function ju(e){return e&&e.length?Pu(e):[]}function Nu(e,t){return e===t||e!==e&&t!==t}function Bu(e){var t=Do(e)?cu.call(e):"";return t==Yc||t==Fc}function Do(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Hu(){}var Iu=ju;const Oo=Ki(Iu);var Tn={exports:{}};Tn.exports;(function(e,t){var r=200,n="Expected a function",i="__lodash_hash_undefined__",s=1,a=2,l=1/0,c=9007199254740991,u="[object Arguments]",p="[object Array]",f="[object Boolean]",b="[object Date]",m="[object Error]",x="[object Function]",_="[object GeneratorFunction]",L="[object Map]",S="[object Number]",N="[object Object]",H="[object Promise]",K="[object RegExp]",V="[object Set]",ie="[object String]",de="[object Symbol]",ae="[object WeakMap]",fe="[object ArrayBuffer]",ee="[object DataView]",G="[object Float32Array]",be="[object Float64Array]",Oe="[object Int8Array]",O="[object Int16Array]",k="[object Int32Array]",C="[object Uint8Array]",I="[object Uint8ClampedArray]",P="[object Uint16Array]",Z="[object Uint32Array]",X=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pe=/^\w*$/,Me=/^\./,Ae=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Se=/[\\^$.*+?()[\]{}|]/g,Ne=/\\(\\)?/g,ke=/^\[object .+?Constructor\]$/,Be=/^(?:0|[1-9]\d*)$/,le={};le[G]=le[be]=le[Oe]=le[O]=le[k]=le[C]=le[I]=le[P]=le[Z]=!0,le[u]=le[p]=le[fe]=le[f]=le[ee]=le[b]=le[m]=le[x]=le[L]=le[S]=le[N]=le[K]=le[V]=le[ie]=le[ae]=!1;var Le=typeof $t=="object"&&$t&&$t.Object===Object&&$t,se=typeof self=="object"&&self&&self.Object===Object&&self,Ee=Le||se||Function("return this")(),lt=t&&!t.nodeType&&t,$e=lt&&!0&&e&&!e.nodeType&&e,Kn=$e&&$e.exports===lt,Jr=Kn&&Le.process,Qr=function(){try{return Jr&&Jr.binding("util")}catch{}}(),en=Qr&&Qr.isTypedArray;function Gn(o,h){for(var v=-1,A=o?o.length:0,B=Array(A);++v<A;)B[v]=h(o[v],v,o);return B}function Ar(o,h){for(var v=-1,A=h.length,B=o.length;++v<A;)o[B+v]=h[v];return o}function Yn(o,h){for(var v=-1,A=o?o.length:0;++v<A;)if(h(o[v],v,o))return!0;return!1}function Fn(o){return function(h){return h==null?void 0:h[o]}}function Zn(o,h){for(var v=-1,A=Array(o);++v<o;)A[v]=h(v);return A}function tn(o){return function(h){return o(h)}}function Xn(o,h){return o==null?void 0:o[h]}function Sr(o){var h=!1;if(o!=null&&typeof o.toString!="function")try{h=!!(o+"")}catch{}return h}function Jn(o){var h=-1,v=Array(o.size);return o.forEach(function(A,B){v[++h]=[B,A]}),v}function Qn(o,h){return function(v){return o(h(v))}}function ei(o){var h=-1,v=Array(o.size);return o.forEach(function(A){v[++h]=A}),v}var ti=Array.prototype,ri=Function.prototype,Qt=Object.prototype,Cr=Ee["__core-js_shared__"],rn=function(){var o=/[^.]+$/.exec(Cr&&Cr.keys&&Cr.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}(),nn=ri.toString,nt=Qt.hasOwnProperty,St=Qt.toString,ni=RegExp("^"+nn.call(nt).replace(Se,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),er=Ee.Symbol,sn=Ee.Uint8Array,ii=Qt.propertyIsEnumerable,si=ti.splice,Ot=er?er.isConcatSpreadable:void 0,oi=Qn(Object.keys,Object),tr=Lt(Ee,"DataView"),jt=Lt(Ee,"Map"),ct=Lt(Ee,"Promise"),rr=Lt(Ee,"Set"),kr=Lt(Ee,"WeakMap"),Nt=Lt(Object,"create"),on=it(tr),ai=it(jt),an=it(ct),li=it(rr),ln=it(kr),nr=er?er.prototype:void 0,Bt=nr?nr.valueOf:void 0,Ct=nr?nr.toString:void 0;function Ge(o){var h=-1,v=o?o.length:0;for(this.clear();++h<v;){var A=o[h];this.set(A[0],A[1])}}function cn(){this.__data__=Nt?Nt(null):{}}function ci(o){return this.has(o)&&delete this.__data__[o]}function ui(o){var h=this.__data__;if(Nt){var v=h[o];return v===i?void 0:v}return nt.call(h,o)?h[o]:void 0}function di(o){var h=this.__data__;return Nt?h[o]!==void 0:nt.call(h,o)}function Lr(o,h){var v=this.__data__;return v[o]=Nt&&h===void 0?i:h,this}Ge.prototype.clear=cn,Ge.prototype.delete=ci,Ge.prototype.get=ui,Ge.prototype.has=di,Ge.prototype.set=Lr;function d(o){var h=-1,v=o?o.length:0;for(this.clear();++h<v;){var A=o[h];this.set(A[0],A[1])}}function y(){this.__data__=[]}function $(o){var h=this.__data__,v=we(h,o);if(v<0)return!1;var A=h.length-1;return v==A?h.pop():si.call(h,v,1),!0}function w(o){var h=this.__data__,v=we(h,o);return v<0?void 0:h[v][1]}function E(o){return we(this.__data__,o)>-1}function U(o,h){var v=this.__data__,A=we(v,o);return A<0?v.push([o,h]):v[A][1]=h,this}d.prototype.clear=y,d.prototype.delete=$,d.prototype.get=w,d.prototype.has=E,d.prototype.set=U;function W(o){var h=-1,v=o?o.length:0;for(this.clear();++h<v;){var A=o[h];this.set(A[0],A[1])}}function R(){this.__data__={hash:new Ge,map:new(jt||d),string:new Ge}}function D(o){return vt(this,o).delete(o)}function te(o){return vt(this,o).get(o)}function oe(o){return vt(this,o).has(o)}function q(o,h){return vt(this,o).set(o,h),this}W.prototype.clear=R,W.prototype.delete=D,W.prototype.get=te,W.prototype.has=oe,W.prototype.set=q;function ce(o){var h=-1,v=o?o.length:0;for(this.__data__=new W;++h<v;)this.add(o[h])}function Ye(o){return this.__data__.set(o,i),this}function Te(o){return this.__data__.has(o)}ce.prototype.add=ce.prototype.push=Ye,ce.prototype.has=Te;function z(o){this.__data__=new d(o)}function ne(){this.__data__=new d}function Y(o){return this.__data__.delete(o)}function ye(o){return this.__data__.get(o)}function Pe(o){return this.__data__.has(o)}function Ce(o,h){var v=this.__data__;if(v instanceof d){var A=v.__data__;if(!jt||A.length<r-1)return A.push([o,h]),this;v=this.__data__=new W(A)}return v.set(o,h),this}z.prototype.clear=ne,z.prototype.delete=Y,z.prototype.get=ye,z.prototype.has=Pe,z.prototype.set=Ce;function _e(o,h){var v=Ze(o)||Ut(o)?Zn(o.length,String):[],A=v.length,B=!!A;for(var T in o)nt.call(o,T)&&!(B&&(T=="length"||Rr(T,A)))&&v.push(T);return v}function we(o,h){for(var v=o.length;v--;)if(dr(o[v][0],h))return v;return-1}var He=gi(un);function Ie(o,h,v,A,B){var T=-1,F=o.length;for(v||(v=bn),B||(B=[]);++T<F;){var xe=o[T];v(xe)?Ar(B,xe):B[B.length]=xe}return B}var ut=yi();function un(o,h){return o&&ut(o,h,Et)}function Er(o,h){h=qt(h,o)?[h]:gn(h);for(var v=0,A=h.length;o!=null&&v<A;)o=o[ur(h[v++])];return v&&v==A?o:void 0}function ir(o){return St.call(o)}function hi(o,h){return o!=null&&h in Object(o)}function sr(o,h,v,A,B){return o===h?!0:o==null||h==null||!wt(o)&&!xt(h)?o!==o&&h!==h:bt(o,h,sr,v,A,B)}function bt(o,h,v,A,B,T){var F=Ze(o),xe=Ze(h),me=p,De=p;F||(me=dt(o),me=me==u?N:me),xe||(De=dt(h),De=De==u?N:De);var ze=me==N&&!Sr(o),qe=De==N&&!Sr(h),je=me==De;if(je&&!ze)return T||(T=new z),F||fr(o)?zt(o,h,v,A,B,T):kt(o,h,me,v,A,B,T);if(!(B&a)){var g=ze&&nt.call(o,"__wrapped__"),M=qe&&nt.call(h,"__wrapped__");if(g||M){var j=g?o.value():o,re=M?h.value():h;return T||(T=new z),v(j,re,A,B,T)}}return je?(T||(T=new z),ar(o,h,v,A,B,T)):!1}function or(o,h,v,A){var B=v.length,T=B;if(o==null)return!T;for(o=Object(o);B--;){var F=v[B];if(F[2]?F[1]!==o[F[0]]:!(F[0]in o))return!1}for(;++B<T;){F=v[B];var xe=F[0],me=o[xe],De=F[1];if(F[2]){if(me===void 0&&!(xe in o))return!1}else{var ze=new z,qe;if(!(qe===void 0?sr(De,me,A,s|a,ze):qe))return!1}}return!0}function dn(o){if(!wt(o)||Tr(o))return!1;var h=vn(o)||Sr(o)?ni:ke;return h.test(it(o))}function hn(o){return xt(o)&&Br(o.length)&&!!le[St.call(o)]}function fn(o){return typeof o=="function"?o:o==null?zr:typeof o=="object"?Ze(o)?Ht(o[0],o[1]):pi(o):wn(o)}function pn(o){if(!Dr(o))return oi(o);var h=[];for(var v in Object(o))nt.call(o,v)&&v!="constructor"&&h.push(v);return h}function fi(o,h){var v=-1,A=Re(o)?Array(o.length):[];return He(o,function(B,T,F){A[++v]=h(B,T,F)}),A}function pi(o){var h=Pr(o);return h.length==1&&h[0][2]?cr(h[0][0],h[0][1]):function(v){return v===o||or(v,o,h)}}function Ht(o,h){return qt(o)&&lr(h)?cr(ur(o),h):function(v){var A=Hr(v,o);return A===void 0&&A===h?Ir(v,o):sr(h,A,void 0,s|a)}}function It(o){return function(h){return Er(h,o)}}function mt(o){if(typeof o=="string")return o;if(hr(o))return Ct?Ct.call(o):"";var h=o+"";return h=="0"&&1/o==-l?"-0":h}function gn(o){return Ze(o)?o:Or(o)}function gi(o,h){return function(v,A){if(v==null)return v;if(!Re(v))return o(v,A);for(var B=v.length,T=-1,F=Object(v);++T<B&&A(F[T],T,F)!==!1;);return v}}function yi(o){return function(h,v,A){for(var B=-1,T=Object(h),F=A(h),xe=F.length;xe--;){var me=F[++B];if(v(T[me],me,T)===!1)break}return h}}function zt(o,h,v,A,B,T){var F=B&a,xe=o.length,me=h.length;if(xe!=me&&!(F&&me>xe))return!1;var De=T.get(o);if(De&&T.get(h))return De==h;var ze=-1,qe=!0,je=B&s?new ce:void 0;for(T.set(o,h),T.set(h,o);++ze<xe;){var g=o[ze],M=h[ze];if(A)var j=F?A(M,g,ze,h,o,T):A(g,M,ze,o,h,T);if(j!==void 0){if(j)continue;qe=!1;break}if(je){if(!Yn(h,function(re,ge){if(!je.has(ge)&&(g===re||v(g,re,A,B,T)))return je.add(ge)})){qe=!1;break}}else if(!(g===M||v(g,M,A,B,T))){qe=!1;break}}return T.delete(o),T.delete(h),qe}function kt(o,h,v,A,B,T,F){switch(v){case ee:if(o.byteLength!=h.byteLength||o.byteOffset!=h.byteOffset)return!1;o=o.buffer,h=h.buffer;case fe:return!(o.byteLength!=h.byteLength||!A(new sn(o),new sn(h)));case f:case b:case S:return dr(+o,+h);case m:return o.name==h.name&&o.message==h.message;case K:case ie:return o==h+"";case L:var xe=Jn;case V:var me=T&a;if(xe||(xe=ei),o.size!=h.size&&!me)return!1;var De=F.get(o);if(De)return De==h;T|=s,F.set(o,h);var ze=zt(xe(o),xe(h),A,B,T,F);return F.delete(o),ze;case de:if(Bt)return Bt.call(o)==Bt.call(h)}return!1}function ar(o,h,v,A,B,T){var F=B&a,xe=Et(o),me=xe.length,De=Et(h),ze=De.length;if(me!=ze&&!F)return!1;for(var qe=me;qe--;){var je=xe[qe];if(!(F?je in h:nt.call(h,je)))return!1}var g=T.get(o);if(g&&T.get(h))return g==h;var M=!0;T.set(o,h),T.set(h,o);for(var j=F;++qe<me;){je=xe[qe];var re=o[je],ge=h[je];if(A)var ue=F?A(ge,re,je,h,o,T):A(re,ge,je,o,h,T);if(!(ue===void 0?re===ge||v(re,ge,A,B,T):ue)){M=!1;break}j||(j=je=="constructor")}if(M&&!j){var Ve=o.constructor,Mt=h.constructor;Ve!=Mt&&"constructor"in o&&"constructor"in h&&!(typeof Ve=="function"&&Ve instanceof Ve&&typeof Mt=="function"&&Mt instanceof Mt)&&(M=!1)}return T.delete(o),T.delete(h),M}function vt(o,h){var v=o.__data__;return mn(h)?v[typeof h=="string"?"string":"hash"]:v.map}function Pr(o){for(var h=Et(o),v=h.length;v--;){var A=h[v],B=o[A];h[v]=[A,B,lr(B)]}return h}function Lt(o,h){var v=Xn(o,h);return dn(v)?v:void 0}var dt=ir;(tr&&dt(new tr(new ArrayBuffer(1)))!=ee||jt&&dt(new jt)!=L||ct&&dt(ct.resolve())!=H||rr&&dt(new rr)!=V||kr&&dt(new kr)!=ae)&&(dt=function(o){var h=St.call(o),v=h==N?o.constructor:void 0,A=v?it(v):void 0;if(A)switch(A){case on:return ee;case ai:return L;case an:return H;case li:return V;case ln:return ae}return h});function yn(o,h,v){h=qt(h,o)?[h]:gn(h);for(var A,B=-1,F=h.length;++B<F;){var T=ur(h[B]);if(!(A=o!=null&&v(o,T)))break;o=o[T]}if(A)return A;var F=o?o.length:0;return!!F&&Br(F)&&Rr(T,F)&&(Ze(o)||Ut(o))}function bn(o){return Ze(o)||Ut(o)||!!(Ot&&o&&o[Ot])}function Rr(o,h){return h=h??c,!!h&&(typeof o=="number"||Be.test(o))&&o>-1&&o%1==0&&o<h}function qt(o,h){if(Ze(o))return!1;var v=typeof o;return v=="number"||v=="symbol"||v=="boolean"||o==null||hr(o)?!0:pe.test(o)||!X.test(o)||h!=null&&o in Object(h)}function mn(o){var h=typeof o;return h=="string"||h=="number"||h=="symbol"||h=="boolean"?o!=="__proto__":o===null}function Tr(o){return!!rn&&rn in o}function Dr(o){var h=o&&o.constructor,v=typeof h=="function"&&h.prototype||Qt;return o===v}function lr(o){return o===o&&!wt(o)}function cr(o,h){return function(v){return v==null?!1:v[o]===h&&(h!==void 0||o in Object(v))}}var Or=Vt(function(o){o=pr(o);var h=[];return Me.test(o)&&h.push(""),o.replace(Ae,function(v,A,B,T){h.push(B?T.replace(Ne,"$1"):A||v)}),h});function ur(o){if(typeof o=="string"||hr(o))return o;var h=o+"";return h=="0"&&1/o==-l?"-0":h}function it(o){if(o!=null){try{return nn.call(o)}catch{}try{return o+""}catch{}}return""}function jr(o,h){return Ie(Nr(o,h))}function Nr(o,h){var v=Ze(o)?Gn:fi;return v(o,fn(h))}function Vt(o,h){if(typeof o!="function"||h&&typeof h!="function")throw new TypeError(n);var v=function(){var A=arguments,B=h?h.apply(this,A):A[0],T=v.cache;if(T.has(B))return T.get(B);var F=o.apply(this,A);return v.cache=T.set(B,F),F};return v.cache=new(Vt.Cache||W),v}Vt.Cache=W;function dr(o,h){return o===h||o!==o&&h!==h}function Ut(o){return et(o)&&nt.call(o,"callee")&&(!ii.call(o,"callee")||St.call(o)==u)}var Ze=Array.isArray;function Re(o){return o!=null&&Br(o.length)&&!vn(o)}function et(o){return xt(o)&&Re(o)}function vn(o){var h=wt(o)?St.call(o):"";return h==x||h==_}function Br(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=c}function wt(o){var h=typeof o;return!!o&&(h=="object"||h=="function")}function xt(o){return!!o&&typeof o=="object"}function hr(o){return typeof o=="symbol"||xt(o)&&St.call(o)==de}var fr=en?tn(en):hn;function pr(o){return o==null?"":mt(o)}function Hr(o,h,v){var A=o==null?void 0:Er(o,h);return A===void 0?v:A}function Ir(o,h){return o!=null&&yn(o,h,hi)}function Et(o){return Re(o)?_e(o):pn(o)}function zr(o){return o}function wn(o){return qt(o)?Fn(ur(o)):It(o)}e.exports=jr})(Tn,Tn.exports);var zu=Tn.exports;const jo=Ki(zu);function qu(e,t,r){let n=[];e.filterProperties.length&&e.filterProperties.forEach(s=>{const a={},l=u=>s.format==="date"?Wr(u).unix():parseFloat(u);t.forEach(u=>{var p;if(s.type==="range"){const f=Kr(s.key,u);if(Array.isArray(f)){const b=[l(f[0]),l(f[1])];a.min=a.min!==void 0?Math.min(a.min,b[0]):b[0],a.max=a.max!==void 0?Math.max(a.max,b[1]):b[1]}else{const b=l(f);a.min=a.min!==void 0?Math.min(a.min,b):b,a.max=a.max!==void 0?Math.max(a.max,b):b}return}Array.isArray(u[s.key])?u[s.key].forEach(f=>{a[f]=void 0}):s.type==="spatial"?(a.geometry=void 0,a.mode=s.mode||"intersects"):(p=s.key)!=null&&p.includes(".")?Oo(jo(r.items,s.key)).filter(f=>f).forEach(f=>{a[f]=void 0}):a[u[s.key]]=void 0});const c=s.key||s.keys.join("|");r.filters[c]=Object.assign({type:s.type||"multiselect",dirty:s.state?!1:void 0,key:c},s.type==="range"?{min:a.min,max:a.max,format:s.format}:{},s),r.filters[c].state=Object.assign({},a,s.state)}),e.matchAllWhenEmpty!==!1&&(r.results=r.sortResults(t),r.requestUpdate()),e.aggregateResults&&(n=Array.from(new Set(t.reduce((s,a)=>s.concat(a[e.aggregateResults]),[]))).sort((s,a)=>s.localeCompare(a)));const i=[];return Object.values(r.filters).forEach(s=>{s.type==="text"?s.keys.forEach(a=>{i.includes(a)||i.push(a)}):(s.type==="select"||s.type==="multiselect")&&(i.includes(s.key)||i.push(s.key))}),ac(t,Object.assign({keys:i},e.fuseConfig)),n}async function Vu(e,t,r){let n;r.externalFilter?n=await dc(t,r.filters,e):n=await lc(t,r.filters,e),r.results=r.sortResults(n)}function Uu(e,t,r){const n=`filter-${e.key}`.replace("|","-");switch(e.type){case"text":return Q`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${n}"
        .tabIndex=${t}
        .filterObject=${e}
        .unstyled=${r.unstyled}
        @filter=${()=>r.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return Q`
        <eox-itemfilter-select
          .inlineMode=${r.inlineMode||!1}
          data-type="filter"
          id="${n}"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .suggestions="${Oo(jo(r.items,e.key)).filter(i=>i)}"
          type="${e.type}"
          .unstyled=${r.unstyled}
          @filter=${()=>r.search()}
        ></eox-itemfilter-select>
      `;case"range":return Q`
        <eox-itemfilter-range
          id="${n}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .unstyled=${r.unstyled}
          @filter=${()=>r.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return Q`
        <eox-itemfilter-spatial
          id="${n}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          @filter=${()=>r.search()}
        ></eox-itemfilter-spatial>
      `;default:return Q``}}function Wu(e,t){return[...e].sort((r,n)=>r[t.titleProperty].localeCompare(n[t.titleProperty]))}function Ku(e,t,r){return Q`
    ${Ke(e.dirty,()=>Q`
        <button
          type="button"
          tabindex=${t}
          slot="reset-button"
          class="reset-icon icon"
          @click=${n=>{const i=n.target.parentElement.querySelector("[slot=filter]");i&&typeof i.reset=="function"&&i.reset(),r.search(),r.requestUpdate()}}
        >
          ${r.unstyled?"Reset":st}
        </button>
      `)}
  `}function Gu(e){e.renderRoot.querySelectorAll("[data-type='filter']").forEach(t=>{typeof t.reset=="function"&&t.reset()}),e.search()}var Yr,mr,tt,xr,No,Bo;class Yu extends gt{constructor(){super();Fe(this,xr);Fe(this,Yr,[]);Fe(this,mr,[]);Fe(this,tt,Wc);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=Bn(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.unstyled=!1}static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},unstyled:{type:Boolean}}}apply(){xn(this,Yr,qu(Xe(this,tt),Xe(this,mr),this)),this.search()}async searchHandler(){await Vu(Xe(this,tt),Xe(this,mr),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(r){return Wu(r,Xe(this,tt))}resetFilters(){Gu(this)}firstUpdated(r){var i;let n={};Cs.map(s=>{n={...n,[s]:this[s]}}),xn(this,tt,n),xn(this,mr,((i=this.items)==null?void 0:i.map((s,a)=>Object.assign({id:s[this.idProperty]||`item-${a}`},s)))||[]),this.apply()}updated(r){Cs.map(n=>{if(r.has(n))return this.firstUpdated(),!0})}updateResult(r){this.selectedResult=r.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}render(){var r;return Q`
      <style>
        ${Yo}
        ${!this.unstyled&&Fr}
        ${!this.unstyled&&Fo}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":st}
        @submit="${n=>n.preventDefault()}"
      >
        ${Ke(this.filterProperties,()=>Q`
            <eox-itemfilter-container
              .filters=${this.filters}
              .filterProperties=${this.filterProperties}
              .inlineMode=${this.inlineMode||!1}
              @reset=${()=>this.resetFilters()}
              @filter=${()=>this.search()}
            >
              <section slot="section">
                ${Ke(!this.inlineMode,()=>Q`
                    <slot name="filterstitle"
                      ><h6 class="main-heading">Filters</h6></slot
                    >
                  `)}
                <ul id="filters">
                  ${Hn(Object.values(this.filters),(n,i)=>Q` <li>
                        <eox-itemfilter-expandcontainer
                          .filterObject=${n}
                          @details-toggled=${s=>uo(s,Xe(this,tt),this)}
                          data-details="${n.key}"
                        >
                          ${he(this,xr,Bo).call(this,n,_s(i,1))}
                          ${he(this,xr,No).call(this,n,_s(i,2))}
                        </eox-itemfilter-expandcontainer>
                      </li>`)}
                </ul>
                ${Ke(!this.inlineMode&&Xe(this,tt).filterProperties&&!this.inlineMode&&Xe(this,tt).filterProperties&&ji(this.filters),()=>Q`
                    <button
                      type="button"
                      id="filter-reset"
                      class="outline small icon-text reset-icon"
                      data-cy="filter-reset"
                      @click=${()=>this.resetFilters()}
                    >
                      Reset all
                    </a>
                  `)}
              </section>
            </eox-itemfilter-container>
          `)}
        ${Ke(((r=Xe(this,tt))==null?void 0:r.showResults)&&this.results,()=>Q`
            <eox-itemfilter-results
              .config=${Xe(this,tt)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${Xe(this,Yr)}
              .selectedResult=${this.selectedResult}
              .resultType=${this.resultType}
              @result=${this.updateResult}
            >
              <slot name="resultstitle"
                ><h6 class="main-heading">Results</h6></slot
              >
            </eox-itemfilter-results>
          `)}
      </form>
    `}}Yr=new WeakMap,mr=new WeakMap,tt=new WeakMap,xr=new WeakSet,No=function(r,n){return Uu(r,n,this)},Bo=function(r,n){return Ku(r,n,this)};customElements.define("eox-itemfilter",Yu);const Fu={slot:"filterstitle",style:{margin:"14px 8px"}},Zu={slot:"resultstitle",style:{margin:"14px 8px"}},Ai="float:right; height:15px; padding:4px;  margin-top:-4px; background-color:white;",Xu="float:right; height:15px; padding:4px;  margin-top:-4px; background-color:#9bcaeb;",od={__name:"EodashItemFilter",props:{enableCompare:{type:Boolean,default:!1},filtersTitle:{type:String,default:"Indicators"},resultsTitle:{type:String,default:""},titleProperty:{type:String,default:"title"},aggregateResults:{type:String,default:"themes"},enableHighlighting:{type:Boolean,default:!0},expandMultipleFilters:{type:Boolean,default:!0},expandMultipleResults:{type:Boolean,default:!0},filterProperties:{type:Array,default:()=>[{keys:["title","themes","description"],title:"Search",type:"text"},{key:"themes",title:"Theme Filter",type:"multiselect"}]}},setup(e){const t=e,r=async l=>{var u,p;(p=(u=i.value)==null?void 0:u.shadowRoot)==null||p.querySelectorAll(".compareMapButton").forEach(f=>f.setAttribute("style",Ai));const c=l.detail;c&&(s.resetSelectedCompareSTAC(),await s.loadSelectedSTAC(c.href))},n={titleProperty:t.titleProperty,filterProperties:t.filterProperties,aggregateResults:t.aggregateResults,enableHighlighting:t.enableHighlighting,expandMultipleFilters:t.expandMultipleFilters,expandMultipleResults:t.expandMultipleResults},i=Vo(null),s=zo(),a=()=>{setTimeout(()=>{var l,c;(l=i.value)==null||l.shadowRoot.querySelectorAll("details>summary").forEach(u=>u.setAttribute("style","width: 100%")),(c=i.value)==null||c.shadowRoot.querySelectorAll("details>div li").forEach(u=>{let p=document.createElement("button");p.className="compareMapButton",p.dataset.id=u.children[0].id,p.onclick=async m=>{var L,S,N;(S=(L=i.value)==null?void 0:L.shadowRoot)==null||S.querySelectorAll(".compareMapButton").forEach(H=>{H.setAttribute("style",Ai)});const x=m.currentTarget;x==null||x.setAttribute("style",Xu);const _=(N=i.value)==null?void 0:N.items.find(H=>H.id===(x==null?void 0:x.dataset.id));_&&await s.loadSelectedCompareSTAC(_.href)},p.setAttribute("style",Ai);const f=document.createElementNS("http://www.w3.org/2000/svg","svg"),b=document.createElementNS("http://www.w3.org/2000/svg","path");f.setAttribute("width","15"),f.setAttribute("height","15"),f.setAttribute("viewBox","0 0 24 24"),b.setAttribute("d","M19,3H14V5H19V18L14,12V21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,18H5L10,12M10,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H10V23H12V1H10V3Z"),f.appendChild(b),p.appendChild(f),u.append(p)})},100)};return Uo(()=>{var u,p,f;const l=document.createElement("style");l.innerHTML=`
    section {
      margin: 0 !important;
    }
    section button#filter-reset {
      padding: 0 8px;
      top: 8px;
      right: 8px;
    }
  `,(p=(u=i.value)==null?void 0:u.shadowRoot)==null||p.appendChild(l);const c=(f=s.stac)==null?void 0:f.filter(b=>b.rel==="child");i.value.items=c,t.enableCompare&&a()}),(l,c)=>(Go(),Wo("eox-itemfilter",Ko({class:"fill-height"},n,{ref_key:"eoxItemFilter",ref:i,style:{overflow:"auto"},onSelect:r}),[ss("h4",Fu,os(e.filtersTitle),1),ss("h4",Zu,os(e.resultsTitle),1)],16))}};export{od as default};
