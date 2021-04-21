(function(e,t){e.extend(e.datepicker,{_generateHTML:function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U=new Date,z=this._daylightSavingAdjust(new Date(U.getFullYear(),U.getMonth(),U.getDate())),W=this._get(e,"isRTL"),X=this._get(e,"showButtonPanel"),V=this._get(e,"hideIfNoPrevNext"),$=this._get(e,"navigationAsDateFormat"),J=this._getNumberOfMonths(e),K=this._get(e,"showCurrentAtPos"),Q=this._get(e,"stepMonths"),G=J[0]!==1||J[1]!==1,Y=this._daylightSavingAdjust(!e.currentDay?new Date(9999,9,9):new Date(e.currentYear,e.currentMonth,e.currentDay)),Z=this._getMinMaxDate(e,"min"),et=this._getMinMaxDate(e,"max"),tt=e.drawMonth-K,nt=e.drawYear;if(tt<0){tt+=12;nt--}if(et){t=this._daylightSavingAdjust(new Date(et.getFullYear(),et.getMonth()-J[0]*J[1]+1,et.getDate()));t=Z&&t<Z?Z:t;while(this._daylightSavingAdjust(new Date(nt,tt,1))>t){tt--;if(tt<0){tt=11;nt--}}}e.drawMonth=tt;e.drawYear=nt;n=this._get(e,"prevText");n=!$?n:this.formatDate(n,this._daylightSavingAdjust(new Date(nt,tt-Q,1)),this._getFormatConfig(e));r=this._canAdjustMonth(e,-1,nt,tt)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'"+" title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(W?"e":"w")+"'>"+n+"</span></a>":V?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(W?"e":"w")+"'>"+n+"</span></a>";i=this._get(e,"nextText");i=!$?i:this.formatDate(i,this._daylightSavingAdjust(new Date(nt,tt+Q,1)),this._getFormatConfig(e));s=this._canAdjustMonth(e,+1,nt,tt)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'"+" title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(W?"w":"e")+"'>"+i+"</span></a>":V?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(W?"w":"e")+"'>"+i+"</span></a>";o=this._get(e,"currentText");u=this._get(e,"gotoCurrent")&&e.currentDay?Y:z;o=!$?o:this.formatDate(o,u,this._getFormatConfig(e));a=!e.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>":"";f=X?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(W?a:"")+(this._isInRange(e,u)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'"+">"+o+"</button>":"")+(W?"":a)+"</div>":"";l=parseInt(this._get(e,"firstDay"),10);l=isNaN(l)?0:l;c=this._get(e,"showWeek");h=this._get(e,"dayNames");p=this._get(e,"dayNamesMin");d=this._get(e,"monthNames");v=this._get(e,"monthNamesShort");m=this._get(e,"showLowestRate");g=this._get(e,"beforeShowDay");y=this._get(e,"showOtherMonths");b=this._get(e,"selectOtherMonths");w=this._getDefaultDate(e);E="";S;for(x=0;x<J[0];x++){T="";this.maxRows=4;for(N=0;N<J[1];N++){C=this._daylightSavingAdjust(new Date(nt,tt,e.selectedDay));k=" ui-corner-all";L="";if(G){L+="<div class='ui-datepicker-group";if(J[1]>1){switch(N){case 0:L+=" ui-datepicker-group-first";k=" ui-corner-"+(W?"right":"left");break;case J[1]-1:L+=" ui-datepicker-group-last";k=" ui-corner-"+(W?"left":"right");break;default:L+=" ui-datepicker-group-middle";k="";break}}L+="'>"}L+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+k+"'>"+(/all|left/.test(k)&&x===0?W?s:r:"")+(/all|right/.test(k)&&x===0?W?r:s:"")+this._generateMonthYearHeader(e,tt,nt,Z,et,x>0||N>0,d,v)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>";A=c?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"";for(S=0;S<7;S++){O=(S+l)%7;A+="<th"+((S+l+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+h[O]+"'>"+p[O]+"</span></th>"}L+=A+"</tr></thead><tbody>";M=this._getDaysInMonth(nt,tt);if(nt===e.selectedYear&&tt===e.selectedMonth){e.selectedDay=Math.min(e.selectedDay,M)}_=(this._getFirstDayOfMonth(nt,tt)-l+7)%7;D=Math.ceil((_+M)/7);P=G?this.maxRows>D?this.maxRows:D:D;this.maxRows=P;H=this._daylightSavingAdjust(new Date(nt,tt,1-_));for(B=0;B<P;B++){L+="<tr>";j=!c?"":"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(H)+"</td>";for(S=0;S<7;S++){I=m?m.apply(e.input?e.input[0]:null,[H]):"";F=g?g.apply(e.input?e.input[0]:null,[H]):[true,""];q=H.getMonth()!==tt;R=q&&!b||!F[0]||Z&&H<Z||et&&H>et;j+="<td class='"+((S+l+6)%7>=5?" ui-datepicker-week-end":"")+(q?" ui-datepicker-other-month":"")+(H.getTime()===C.getTime()&&tt===e.selectedMonth&&e._keyEvent||w.getTime()===H.getTime()&&w.getTime()===C.getTime()?" ":"")+(R?" "+this._unselectableClass+" ui-state-disabled":"")+(q&&!y?"":" "+F[1]+(H.getTime()===Y.getTime()?" "+this._currentClass:"")+(H.getTime()===z.getTime()?" ui-datepicker-today":""))+"'"+((!q||y)&&F[2]?" title='"+F[2].replace(/'/g,"&#39;")+"'":"")+(R?"":" data-handler='selectDay' data-event='click' data-month='"+H.getMonth()+"' data-year='"+H.getFullYear()+"'")+">"+(q&&!y?"&#xa0;":R?"<span class='ui-state-default'>"+H.getDate()+"</span>":"<a class='ui-state-default"+(H.getTime()===z.getTime()?" ui-state-highlight":"")+(q?" ui-priority-secondary":"")+"' href='#'>"+H.getDate()+"</a>")+(I&&(!R||R&&(F[1]=="no-arrive"||F[1]=="date-range-selected")&&!q)?"<div class='lowest-rate-wrap'><div class='lowest-rate'>"+I+"</div></div>":"")+"</td>";H.setDate(H.getDate()+1);H=this._daylightSavingAdjust(H)}L+=j+"</tr>"}tt++;if(tt>11){tt=0;nt++}L+="</tbody></table>"+(G?"</div>"+(J[0]>0&&N===J[1]-1?"<div class='ui-datepicker-row-break'></div>":""):"");T+=L}E+=T}E+=f;e._keyEvent=false;return E},_attachHandlers:function(t){var n=this._get(t,"stepMonths"),r="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(r,-n,"M")},next:function(){e.datepicker._adjustDate(r,+n,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(r)},selectDay:function(){e.datepicker._selectDay(r,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);return false},selectMonth:function(){e.datepicker._selectMonthYear(r,this,"M");return false},selectYear:function(){e.datepicker._selectMonthYear(r,this,"Y");return false}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])});e(document).trigger("datepickerLoaded")}})})(jQuery)