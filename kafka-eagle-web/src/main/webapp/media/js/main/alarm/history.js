$(document).ready(function() {
	$("#result").dataTable({
		"bSort" : false,
		"bLengthChange" : false,
		"bProcessing" : true,
		"bServerSide" : true,
		"fnServerData" : retrieveData,
		"sAjaxSource" : "/ke/alarm/history/table/ajax",
		"aoColumns" : [ {
			"mData" : 'id'
		}, {
			"mData" : 'type'
		}, {
			"mData" : 'server'
		}, {
			"mData" : 'alarmGroup'
		}, {
			"mData" : 'alarmTimes'
		}, {
			"mData" : 'alarmMaxTimes'
		}, {
			"mData" : 'alarmLevel'
		}, {
			"mData" : 'alarmIsNormal'
		}, {
			"mData" : 'alarmIsEnable'
		}, {
			"mData" : 'created'
		}, {
			"mData" : 'modify'
		}, {
			"mData" : 'operate'
		} ]
	});

	function retrieveData(sSource, aoData, fnCallback) {
		$.ajax({
			"type" : "get",
			"contentType" : "application/json",
			"url" : sSource,
			"dataType" : "json",
			"data" : {
				aoData : JSON.stringify(aoData)
			},
			"success" : function(data) {
				fnCallback(data)
			}
		});
	}

	// Show detail content
	$(document).on('click', 'a[name=ke_alarm_cluster_detail]', function() {
		var href = $(this).attr("href");
		var id = href.split("#")[1].split("/")[0];
		var type = href.split("#")[1].split("/")[1];
		$('#ke_alarm_cluster_detail').modal({
			backdrop : 'static',
			keyboard : false
		});
		$('#ke_alarm_cluster_detail').modal('show').css({
			position : 'fixed',
			left : '50%',
			top : '50%',
			transform : 'translateX(-50%) translateY(-50%)'
		});

		$.ajax({
			type : 'get',
			dataType : 'json',
			url : '/ke/alarm/cluster/detail/' + type + '/' + id + '/ajax',
			success : function(datas) {
				$("#ke_alarm_cluster_property").val(datas.result);
			}
		});
	});

	// Alarm cluster remove
	$(document).on('click', 'a[name=alarm_cluster_remove]', function() {
		var href = $(this).attr("href");
		var id = href.split("#")[1].split("/")[0];
		$("#alarm_cluster_remove_content").html("<p>Are you sure you want to delete id [" + id + "] ?<p>");
		$("#remove_div").html("<a href='/ke/alarm/history/" + id + "/del' class='btn btn-danger'>Remove</a>");
		$('#alarm_cluster_remove').modal({
			backdrop : 'static',
			keyboard : false
		});
		$('#alarm_cluster_remove').modal('show').css({
			position : 'fixed',
			left : '50%',
			top : '50%',
			transform : 'translateX(-50%) translateY(-50%)'
		});
	});

	// alarm level
	$("#select2level").select2({
		placeholder : "Alarm Cluster Level",
		ajax : {
			url : "/ke/alarm/cluster/level/list/ajax",
			dataType : 'json',
			delay : 250,
			data : function(params) {
				params.offset = 10;
				params.page = params.page || 1;
				return {
					name : params.term,
					page : params.page,
					offset : params.offset
				};
			},
			cache : true,
			processResults : function(data, params) {
				if (data.items.length > 0) {
					var datas = new Array();
					$.each(data.items, function(index, e) {
						var s = {};
						s.id = index + 1;
						s.text = e.text;
						datas[index] = s;
					});
					return {
						results : datas,
						pagination : {
							more : (params.page * params.offset) < data.total
						}
					};
				} else {
					return {
						results : []
					}
				}
			},
			escapeMarkup : function(markup) {
				return markup;
			},
			minimumInputLength : 1
		}
	});

	$('#select2level').on('select2:select', function(evt) {
		var text = evt.params.data.text;
		$("#select2level").val(text);
		$("#ke_alarm_cluster_level").val(text);
	});

	// alarm max times
	$("#select2maxtimes").select2({
		placeholder : "Alarm Cluster Max Times",
		ajax : {
			url : "/ke/alarm/cluster/maxtimes/list/ajax",
			dataType : 'json',
			delay : 250,
			data : function(params) {
				params.offset = 10;
				params.page = params.page || 1;
				return {
					name : params.term,
					page : params.page,
					offset : params.offset
				};
			},
			cache : true,
			processResults : function(data, params) {
				if (data.items.length > 0) {
					var datas = new Array();
					$.each(data.items, function(index, e) {
						var s = {};
						s.id = index + 1;
						s.text = e.text;
						datas[index] = s;
					});
					return {
						results : datas,
						pagination : {
							more : (params.page * params.offset) < data.total
						}
					};
				} else {
					return {
						results : []
					}
				}
			},
			escapeMarkup : function(markup) {
				return markup;
			},
			minimumInputLength : 1
		}
	});

	$('#select2maxtimes').on('select2:select', function(evt) {
		var text = evt.params.data.text;
		$("#select2maxtimes").val(text);
		$("#ke_alarm_cluster_maxtimes").val(text);
	});

	// alarm group
	$("#select2group").select2({
		placeholder : "Alarm Cluster Group",
		ajax : {
			url : "/ke/alarm/cluster/group/list/ajax",
			dataType : 'json',
			delay : 250,
			data : function(params) {
				params.offset = 10;
				params.page = params.page || 1;
				return {
					name : params.term,
					page : params.page,
					offset : params.offset
				};
			},
			cache : true,
			processResults : function(data, params) {
				if (data.items.length > 0) {
					var datas = new Array();
					$.each(data.items, function(index, e) {
						var s = {};
						s.id = index + 1;
						s.text = e.text;
						datas[index] = s;
					});
					return {
						results : datas,
						pagination : {
							more : (params.page * params.offset) < data.total
						}
					};
				} else {
					return {
						results : []
					}
				}
			},
			escapeMarkup : function(markup) {
				return markup;
			},
			minimumInputLength : 1
		}
	});

	$('#select2group').on('select2:select', function(evt) {
		var text = evt.params.data.text;
		$("#select2group").val(text);
		$("#ke_alarm_cluster_group").val(text);
	});

	// Alarm cluster modify
	$(document).on('click', 'a[name=alarm_cluster_modify]', function() {
		var href = $(this).attr("href");
		var id = href.split("#")[1].split("/")[0];
		$("#ke_alarm_cluster_id_server").val(id);
		$('#alarm_cluster_modify').modal({
			backdrop : 'static',
			keyboard : false
		});
		$('#alarm_cluster_modify').modal('show').css({
			position : 'fixed',
			left : '50%',
			top : '50%',
			transform : 'translateX(-50%) translateY(-50%)'
		});

		$.ajax({
			type : 'get',
			dataType : 'json',
			url : '/ke/alarm/history/modify/' + id + '/ajax',
			success : function(datas) {
				$("#ke_alarm_cluster_name_server").val(datas.server);
			}
		});
	});
});