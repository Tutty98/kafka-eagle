/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.smartloli.kafka.eagle.web.service;

import java.util.List;
import java.util.Map;

import org.smartloli.kafka.eagle.common.protocol.AlertInfo;
import org.smartloli.kafka.eagle.common.protocol.ClustersInfo;
import org.smartloli.kafka.eagle.common.protocol.alarm.AlarmClusterInfo;
import org.smartloli.kafka.eagle.common.protocol.alarm.AlarmConfigInfo;

/**
 * Alarm service interface.
 * 
 * @author smartloli.
 *
 *         Created by Jan 17, 2017.
 * 
 *         Update by hexiang 20170216
 */
public interface AlertService {

	/** Add alerter interface. */
	public int add(AlertInfo alert);

	/** Get alarmer interface. */
	public String get(String clusterAlias, String formatter);

	/** List alarmer information. */
	public List<AlertInfo> list(Map<String, Object> params);

	/** Count alert size. */
	public int alertCount(Map<String, Object> params);

	/** Exist alert by cluster_group_topic from table. */
	public int isExistAlertByCGT(Map<String, Object> params);

	/** Find alert by cluster_group_topic from table. */
	public AlertInfo findAlertByCGT(Map<String, Object> params);

	/** Delete alert by id. */
	public int deleteAlertById(int id);

	/** Find alert info by id. */
	public String findAlertById(int id);

	/** Find alert info by id. */
	public int modifyAlertById(AlertInfo alert);

	/** Storage or update alarm cluster,such as kafka or zookeeper. */
	public int create(AlarmClusterInfo clusterInfo);

	/** List cluster information from alert. */
	public List<AlarmClusterInfo> getAlarmClusterList(Map<String, Object> params);
	
	/** Get all alarm tasks. */
	public List<AlarmClusterInfo> getAllAlarmTasks();

	public int getAlarmClusterCount(Map<String, Object> params);

	/** Delete alert by id. */
	public int deleteAlarmClusterAlertById(int id);

	/** Find alert cluster info by id. */
	public AlarmClusterInfo findAlarmClusterAlertById(int id);

	/** Modify alert info by id. */
	public int modifyClusterAlertById(ClustersInfo cluster);

	/** Get alert type list. */
	public String getAlertTypeList();
	
	/** Get alert cluster type list. */
	public String getAlertClusterTypeList(String type,Map<String, Object> params);

	/** Storage or update alarm config info. */
	public int insertOrUpdateAlarmConfig(AlarmConfigInfo alarmConfig);

	/** Find alarm config by group name. */
	public boolean findAlarmConfigByGroupName(Map<String, Object> params);

	/** Get alarm config list. */
	public List<AlarmConfigInfo> getAlarmConfigList(Map<String, Object> params);

	/** Get alarm config count. */
	public int alarmConfigCount(Map<String, Object> params);

	/** Delete alarm config by group name. */
	public int deleteAlertByGroupName(Map<String, Object> params);
	
	/** Get alarm config by group name. */
	public AlarmConfigInfo getAlarmConfigByGroupName(Map<String, Object> params);
}
