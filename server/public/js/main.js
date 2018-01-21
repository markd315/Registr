$(document).ready(function() {
	console.log("eskeddit");
	var main = new Main();
	$("body").css('background-color', '#2196f3');
	main.main();
});
class Main{
	constructor(){
		this.colorCounter = 0;
		this.colorArray = ["#f44336","#e91e63","#9c27b0","#3f51b5","#2196f3","#00bcd4","#4caf50","#ff9800"];
	}
	main(){
		var self =this;
		this.calendarHandly = new calendarHandler($('#results'));
		this.searchy = new searchHandler($('#search'));
		this.filters = new filterHandler($('#filters'));
		//Get color
		this.searchy.attachColorGetter(function(){
			return self.getColor();
		});
		//Change of courses
		this.searchy.attachDataSend(function(input){
			self.calendarHandly.handleInputUpdate(input);
		});
		//Change of filters
		this.filters.attachOnFilterClick(function(){
			self.calendarHandly.handleInputUpdate({"updateFilters":true});
		});
		//Get filters
		this.calendarHandly.attachGetFilters(function(){
			return self.filters.getValues();
		});
	}
	getColor(){
		console.log(this);
		var color = this.colorArray[this.colorCounter];
		this.colorCounter = (this.colorCounter + 1) % this.colorArray.length;
		return color;
	}	
}
