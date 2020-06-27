$(document).ready(function(){
	var state_toggle=1;
	
	var i = 7, j = 7, prei = 0, prej = 0, lasti = 0, lastj = 0;
	var value = i + '-' + j;
	$('td[weizhi="'+value+'"]').css({"background-color":"black","border-radius":"50px 50px 50px 50px"});
	$('td[weizhi="'+value+'"]').html('－');
	$("td").click(function(){
		if($(this).css("background-color")=="rgb(255, 255, 255)"){

			return false;
		}
		if($(this).css("background-color")=="rgb(0, 0, 0)"){

			return false;
		}

		state_toggle++;


		$(this).css({"opacity":"1","background-color":"white","border-radius":"50px 50px 50px 50px"});
		$(this).html('＋');

		var pre = computer();
		prei = pre[0];
		prej = pre[1];
		checkWinOrNot(this);
		var current_weizhi=$(this).attr('weizhi');
        var arr_weizhi=new Array();
        var weizhi_a=current_weizhi.split('-');
		lasti = weizhi_a[0], lastj = weizhi_a[1];
	})
	$("a").click(function()
	{
		var value = prei + '-' + prej;
		console.log(prei, prej);
		$('td[weizhi="'+value+'"]').html('*');
		$('td[weizhi="'+value+'"]').css({"background-color":"rgb(155, 255, 255, 0)"});
		
		var value = lasti + '-' + lastj;
		$('td[weizhi="'+value+'"]').html('*');
		$('td[weizhi="'+value+'"]').css({"background-color":"rgb(155, 255, 255, 0)"});
		
	})

})

function computer()
{
	var ti = 0, tj = 0, maxPoint = -1;
	for (var i = 1; i < 16; i++)
	{
		for (var j = 1; j < 16; j++)
		{
			//console.log(i,j);
			var value = i + '-' + j;
			if ($('td[weizhi="'+value+'"]').html() == '*' )
			{			
				$('td[weizhi="'+value+'"]').html('－');
				var current = 0;
				for (var k = i - 2; k < i + 2; k++)
				{
					if (k < 1)
					{
						k = 1;
					}
					if (k > 15)
					{
						break;
					}
					for (var q = j - 2; q < j + 2; q++)
						{
						if (q < 1)
						{
							q = 1;
						}
						if (q > 15)
						{
							break;
						}
						
						var temp = k + '-' + q;
						current += deadFore('td[weizhi="'+temp+'"]', '－');
						
						//console.log(k,q);}
					}
				}
				$('td[weizhi="'+value+'"]').html('＋');
				for (var k = i - 2; k < i + 2; k++)
				{
					if (k < 1)
					{
						k = 1;
					}
					if (k > 15)
					{
						break;
					}
					for (var q = j - 2; q < j + 2; q++)
						{
						if (q < 1)
						{
							q = 1;
						}
						if (q > 15)
						{
							break;
						}
						
						var temp = k + '-' + q;
						var opp =  deadFore('td[weizhi="'+temp+'"]', '＋');
						if (opp > 45)
						{
							current += 100;
						}
						current += opp;
						
						//console.log(k,q);}
					}
				}
				if (parseInt(current) > parseInt(maxPoint))
				{
					//console.log(current, "maxPoint=",maxPoint);
					maxPoint = current;
					ti = i, tj = j;
					// console.log(current, "maxPoint=",maxPoint);
					// console.log(ti , tj)
				}
				$('td[weizhi="'+value+'"]').html('*');}
			}
		
	}
	
	var value = ti + '-' + tj;

	$('td[weizhi="'+value+'"]').html('－');
	$('td[weizhi="'+value+'"]').css({"background-color":"black","border-radius":"50px 50px 50px 50px"});
	checkWinOrNot('td[weizhi="'+value+'"]');
	return [ti, tj];
}

function score(checked_weizhi, target)
{
	var pointCnt = 0;
	var cnt = 0;
	var live = 1;
	var conti = 1;
	var counter = '－';
	if (target == '＋')
	{
		counter = '－';
	}
	else{
		counter = '＋';
	}
	if (checked_weizhi.length==7)
	{
		
		for (var a = 0; a < 7; a++)
		{
			if ((a == 0 || a == 6) && checked_weizhi[a] == counter)
			{
				live = 0;
			}
			if (a >= 1 && a < 6 && checked_weizhi[a] == counter)
			{
				cnt = 0;
				break;
			}
			else if (checked_weizhi[a] == target)
			{
				cnt++;
			}
			if (cnt > 0)
			{
				conti++;
			}
			
			
		}
		//console.log(checked_weizhi);
		//checkQiZi(cnt>=5,$(self).html()) )
	}
	if (live == 1)
	{
		if (cnt == 2)
		{
			pointCnt += 14;
		}
		if (cnt == 3)
		{
			pointCnt += 30;
		}
		if (cnt == 4)
		{
			pointCnt += 100;
		}
		//console.log(cnt)
	}
	else
	{
		
		if (cnt == 3)
		{
			pointCnt += 30;
		}
		if (cnt == 4)
		{
			pointCnt += 29;
		}
	}
	if (cnt >= 5)
	{

		pointCnt += 10000;
		
	}
	if (conti == cnt)
	{
		pointCnt += pointCnt/2;
	}
	//console.log(pointCnt)
	//checkQiZi(cnt >= 5, '－');
	return parseInt(pointCnt);
}



function deadFore(obj, target)
{
    var pointCnt = 0;
		var ti = 0, tj = 0;
        var self=obj;
        var current_weizhi=$(self).attr('weizhi');
        var arr_weizhi=new Array(),checked_weizhi=new Array();
    

        var weizhi_a=current_weizhi.split('-');
        for(var a=3;a>=-3;a--){
            if(weizhi_a[0]-a>0 && weizhi_a[0]-a<=15){
                arr_weizhi.push(weizhi_a[0]-a+'-'+weizhi_a[1]);
            }
        }
        $.each(arr_weizhi,function(index,value){

             checked_weizhi.push( $('td[weizhi="'+value+'"]').html());
            
        });
		pointCnt += score(checked_weizhi, target);


		var arr_weizhi_bb=new Array(),checked_weizhi_bb=new Array();
	
		for(var a=3;a>=-3;a--){
			if(weizhi_a[1]-a>0 && weizhi_a[1]-a<=15){
				arr_weizhi_bb.push(weizhi_a[0]+'-'+(weizhi_a[1]-a));
			}
		}

		$.each(arr_weizhi_bb,function(index,value){

			checked_weizhi_bb.push( $('td[weizhi="'+value+'"]').html());
			
		});


		pointCnt += score(checked_weizhi_bb, target);

		var arr_weizhi_aabb=new Array(),checked_weizhi_aabb=new Array();

		for(var a=3;a>=-3;a--){
			if(weizhi_a[1]-a>0 && weizhi_a[1]-a<=15 && weizhi_a[0]-a>0 && weizhi_a[0]-a<=15){
				arr_weizhi_aabb.push((weizhi_a[0]-a)+'-'+(parseInt(weizhi_a[1])+a));
			}
		}
		//console.log(arr_weizhi_aabb);
		$.each(arr_weizhi_aabb,function(index,value){
			checked_weizhi_aabb.push( $('td[weizhi="'+value+'"]').html());
			
		});
		//console.log(checked_weizhi_aabb);

		pointCnt += score(checked_weizhi_aabb, target);
		

		var arr_weizhi_bbaa=new Array(),checked_weizhi_bbaa=new Array();

		for(var a=3;a>=-3;a--){
			if(weizhi_a[1]-a>0 && weizhi_a[1]-a<=15 && weizhi_a[0]-a>0 && weizhi_a[0]-a<=15){
				arr_weizhi_bbaa.push((weizhi_a[0]-a)+'-'+(parseInt(weizhi_a[1])-a));
			}
		}
		//console.log(arr_weizhi_bbaa);
		$.each(arr_weizhi_bbaa,function(index,value){
			checked_weizhi_bbaa.push( $('td[weizhi="'+value+'"]').html());
		});
		//console.log(checked_weizhi_bbaa);
		pointCnt += score(checked_weizhi_bbaa, target);//console.log(pointCnt);
		return pointCnt;
}

//判断是否有同色的五子相连
function checkWinOrNot(obj){

	var self=obj;
	var current_weizhi=$(self).attr('weizhi');
	var arr_weizhi=new Array(),checked_weizhi=new Array();


	var weizhi_a=current_weizhi.split('-');
	for(var a=4;a>=-4;a--){
		if(weizhi_a[0]-a>0 && weizhi_a[0]-a<=15){
			arr_weizhi.push(weizhi_a[0]-a+'-'+weizhi_a[1]);
		}
	}
	$.each(arr_weizhi,function(index,value){
		//console.log($('td[weizhi="'+value+'"]').html());
		if($('td[weizhi="'+value+'"]').html() && $('td[weizhi="'+value+'"]').html()==$(self).html()){
			var aa=value.split('-');
			checked_weizhi.push(aa[0]);
		}
	});
	
	checkQiZi(checked_weizhi.length==5&& parseInt(checked_weizhi[0])+1==checked_weizhi[1] && parseInt(checked_weizhi[1])+1==checked_weizhi[2] && parseInt(checked_weizhi[2])+1==checked_weizhi[3] && parseInt(checked_weizhi[3])+1==checked_weizhi[4],$(self).html());

	var arr_weizhi_bb=new Array(),checked_weizhi_bb=new Array();

	
	for(var a=4;a>=-4;a--){
		if(weizhi_a[1]-a>0 && weizhi_a[1]-a<=15){
			arr_weizhi_bb.push(weizhi_a[0]+'-'+(weizhi_a[1]-a));
		}
	}
	//console.log(arr_weizhi_bb);
	$.each(arr_weizhi_bb,function(index,value){
		if($('td[weizhi="'+value+'"]').html() && $('td[weizhi="'+value+'"]').html()==$(self).html()){
			var aa=value.split('-');
			checked_weizhi_bb.push(aa[1]);
		}
	});
	//console.log(checked_weizhi_bb);

	checkQiZi(checked_weizhi_bb.length==5 && parseInt(checked_weizhi_bb[0])+1==checked_weizhi_bb[1] && parseInt(checked_weizhi_bb[1])+1==checked_weizhi_bb[2] && parseInt(checked_weizhi_bb[2])+1==checked_weizhi_bb[3] && parseInt(checked_weizhi_bb[3])+1==checked_weizhi_bb[4],$(self).html());

	var arr_weizhi_aabb=new Array(),checked_weizhi_aabb=new Array();

	for(var a=4;a>=-4;a--){
		if(weizhi_a[1]-a>0 && weizhi_a[1]-a<=15 && weizhi_a[0]-a>0 && weizhi_a[0]-a<=15){
			arr_weizhi_aabb.push((weizhi_a[0]-a)+'-'+(parseInt(weizhi_a[1])+a));
		}
	}
	//console.log(arr_weizhi_aabb);
	$.each(arr_weizhi_aabb,function(index,value){
		if($('td[weizhi="'+value+'"]').html() && $('td[weizhi="'+value+'"]').html()==$(self).html()){
			var aa=value.split('-');
			checked_weizhi_aabb.push(aa[0]);
		}
	});

	checkQiZi(checked_weizhi_aabb.length==5 && parseInt(checked_weizhi_aabb[0])+1==checked_weizhi_aabb[1] && parseInt(checked_weizhi_aabb[1])+1==checked_weizhi_aabb[2] && parseInt(checked_weizhi_aabb[2])+1==checked_weizhi_aabb[3] && parseInt(checked_weizhi_aabb[3])+1==checked_weizhi_aabb[4],$(self).html());
	

	var arr_weizhi_bbaa=new Array(),checked_weizhi_bbaa=new Array();

	for(var a=4;a>=-4;a--){
		if(weizhi_a[1]-a>0 && weizhi_a[1]-a<=15 && weizhi_a[0]-a>0 && weizhi_a[0]-a<=15){
			arr_weizhi_bbaa.push((weizhi_a[0]-a)+'-'+(parseInt(weizhi_a[1])-a));
		}
	}
	//console.log(arr_weizhi_bbaa);
	$.each(arr_weizhi_bbaa,function(index,value){
		if($('td[weizhi="'+value+'"]').html() && $('td[weizhi="'+value+'"]').html()==$(self).html()){
			var aa=value.split('-');
			checked_weizhi_bbaa.push(aa[0]);
		}
	});

	checkQiZi(checked_weizhi_bbaa.length==5 && parseInt(checked_weizhi_bbaa[0])+1==checked_weizhi_bbaa[1] && parseInt(checked_weizhi_bbaa[1])+1==checked_weizhi_bbaa[2] && parseInt(checked_weizhi_bbaa[2])+1==checked_weizhi_bbaa[3] && parseInt(checked_weizhi_bbaa[3])+1==checked_weizhi_bbaa[4],$(self).html());
	
}

function checkQiZi(conditions,type_val){
	if(conditions){
		if(type_val=='＋'){
			var who='白棋';
		}else{
			var who='黑棋';
		}
		alert(who+'勝利！');
		if(confirm('重新開始游戏？')){
			window.location.reload();
		}
	}
}