qst.Timer = function (_delay, _count) { return {
	timerId : -1,
	currentCount : 0,
	repeatCount : Math.max(0,_count),
	//0 - till an infinity exists
	delay : Math.max(1,_delay),
	active : false,
	
	onTimerEvent : null,
	onTimerEventEnd : null,
	
	
	start : function ()
	{
		if (this.active)
			return false;
		
		if (!this.onTimerEvent && !this.onTimerEventEnd)
			return false;
		
		this.active = true;
		
		if ((this.currentCount <= this.repeatCount) || (this.repeatCount == 0))
			this.timerId = setInterval(_.bind(this.timerProgress, this), this.delay);
	},
	stop : function()
	{
		if (this.timerId!=-1)
			clearInterval(this.timerId);
		this.timerId = -1;
		this.active = false;
	},
	
	reset : function()
	{
		this.stop();
		this.currentCount = 0;
	},
	
	timerProgress : function()
	{
		
			
		if ((this.currentCount >= this.repeatCount) && (this.repeatCount > 0))
		{
			clearInterval(this.timerId);
			this.currentCount = this.repeatCount;
			this.timerId = -1;
			this.active = false;
			
			if (this.onTimerEventEnd)
			{
				var timerEvent = {type : "onTimerEventEnd", currentCount : this.currentCount, repeatCount : this.repeatCount, target : this};
				this.onTimerEventEnd(timerEvent);
			}
		}
		
		if (this.onTimerEvent)
		{
			var timerEvent = {type : "onTimerEvent", currentCount : this.currentCount, repeatCount : this.repeatCount, target : this};
			this.onTimerEvent(timerEvent);
		}
		
		this.currentCount++;
	}
}}