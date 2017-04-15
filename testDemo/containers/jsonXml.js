import React from 'react'
import * as d3 from 'd3/build/d3.js'
import logoImage from '../../images/logo.jpg'
import XML from '../components/ObjTree'
export default class jsonXml extends React.Component{

    constructor(props){
        super(props)
        this.points = []
        
    }

    componentDidMount(){
        console.log(XML)
       // this.jsonToXml()
       this.xmlToJson()
    }

    jsonToXml(){
        let json={"root":{"global":{"profiles":{"profile":{"-name":"jdbc.properties","jdbc.username":{"-desc":"jdbc.properties文件 作为全部变量，如果巨变也有，则以局部为准","#text":"root"},"jdbc.password":"7X6K0ode.Yjvs"}}},"packages":{"redis":{"-version":"3.2.5"},"nginx":{"-version":"1.10.2","-domain":"private.paratera.com"},"mysql":{"-version":"5.6.26"},"es":{"-version":"2.0.0"},"tomcat":{"-version":"tomcat7"},"jdk":{"-version":"1.8"}},"projects":{"project":[{"-name":"nrelation","profiles":{"profile":[{"-name":"jdbc.properties","jdbc.url":"jdbc:mysql://172.18.3.98:3306/secretdb?useUnicode=true&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull","jdbc.username":"root","jdbc.password":"7X6K0ode.Yjvs"},{"-name":"nrelation.properties","assetinfo.url":"http://private.paratera.com/pmonitor/api/inner/node/report"},{"-name":"createdb.sql","-type":"sql"}]}},{"-name":"pmonitor","profiles":{"profile":[{"-name":"jdbc.properties","jdbc.url":"jdbc:mysql://172.18.3.98:3306/secretdb?useUnicode=true&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull"},{"-name":"pmonitor.properties","es.server.base.url":"http://172.18.3.98:9600","nrelation.server.base.url":"http://pbs.paratera.com/nrelation/api","zserver.base.url":"http://pbs.paratera.com/station/api/"},{"-name":"createdb.sql","-type":"sql"}]}},{"-name":"push","profiles":{"profile":[{"-name":"push-servlet.xml","-desc":"下面的key，点前面的代表父节点id，点后面的代表子节点name","dataSource.url":"jdbc:mysql://172.18.4.243:3306/pushdb?useUnicode=true&amp;characterEncoding=utf-8&amp;zeroDateTimeBehavior=convertToNull","dataSource.username":"root","dataSource.password":"111111"},{"-name":"cache.properties","cache.type":"redis","redis.host":"172.18.3.98","redis.port":"6379","zk.hosts":"182.92.65.97:2181","zk.node":"/zk/codis/db_test/proxy"},{"-name":"push.properties","push.weixin":"http://wx.oits.paratera.com/php/papp/job_push.php","push.weixin.cluster.offline":"http://wx.oits.paratera.com/php/sync_mysql_cluster_status_alarm.php","query.user.info":"https://user.paratera.com/user/api/inner/users","all.user.info":"https://pbs.paratera.com/as/inner/user/info/aftertime","cluster.info.url":"http://pbs.paratera.com/as/inner/cluster/info","is.private.cloud":"true"},{"-name":"jdbc.properties","jdbc.url":"jdbc:mysql://172.18.3.98:3306/secretdb?useUnicode=true&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull"},{"-name":"createdb.sql","-type":"sql"}]}},{"-name":"scheduler","profiles":{"profile":[{"-name":"scheduler.properties","assetinfo.url":"http://private.paratera.com/pmonitor/api/inner/node/report","tgraph.url":"http://private.paratera.com/pmonitor/api/inner/report/sum/graph","smartinfo.url":"http://private.paratera.com/xmonitor/data","atokenservice.url":"http://private.paratera.com"},{"-name":"jdbc.properties","jdbc.url":"jdbc:mysql://172.18.3.98:3306/secretdb?useUnicode=true&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull"},{"-name":"createdb.sql","-type":"sql"}]}},{"-name":"station","profiles":{"profile":[{"-name":"station.properties","atokenservice.url":"http://private.paratera.com","visualization.url":"http://private.paratera.com/visualization/api/inner/apps/","scheduler.url":"http://private.paratera.com/scheduler/api/inner/node/get","atoken.user.url":"http://private.paratera.com/as/inner/user/byid","cluster":"1491","netfs.upload_dir":{"-desc":"文件上传临时目录","#text":"/lustre/upload"},"slurmweb.script_dir":{"-desc":"应用的shell文件放的目录，指定的应用模板的路径","#text":"/lustre/slurmweb/script"},"slurmweb.work_dir":{"-desc":"作业提交之后，作业输出文件存放的目录","#text":"/lustre/slurmweb/work"},"slurmweb.interaction_script_dir":{"-desc":"交互式应用提交模板存放的目录","#text":"/lustre/slurmweb/interaction_script"},"update.task.interval":{"-desc":"作业采集时间的间隔","#text":"5000"},"share.dir":{"-desc":"共享文件的目录位置","#text":"/share"},"job.small.scale":{"-desc":"默认的节点个数规模大小(小)","#text":"20"},"job.middle.scale":{"-desc":"默认的节点个数规模大小(中)","#text":"50"},"job.big.scale":{"-desc":"默认的节点个数规模大小(大)","#text":"100"},"job.hour.count.on":{"-desc":"每小时作业数量消耗机时数开关","#text":"false"},"job.day.count.on":{"-desc":"每天作业数量消耗机时数开关","#text":"true"},"job.state.collector.on":{"-desc":"作业坐台采集开关","#text":"true"}},{"-name":"jdbc.properties","jdbc.url":"jdbc:mysql://172.18.3.98:3306/secretdb?useUnicode=true&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull"},{"-name":"createdb.sql","-type":"sql"}]}},{"-name":"visualization","profiles":{"profile":[{"-name":"visualizationservice.properties","upload_file_path":"/tmp","pagent_port":"7000","pmonitor_base_url":"http://pbs.paratera.com/pmonitor/api","nrelation_base_url":"http://pbs.paratera.com/nrelation/api","atoken_service_base_url":"http://pbs.paratera.com/as"},{"-name":"jdbc.properties","jdbc.url":"jdbc:mysql://172.18.3.98:3306/secretdb?useUnicode=true&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull"},{"-name":"createdb.sql","-type":"sql"}]}},{"-name":"ATokenService","-desc":"应该在安装的时候才自动生成一个start.sh脚本","profiles":{"profile":[{"-name":"as.properties","port":"9966","user_head_path":"/data/temp","user_role_create":"http://pbs.paratera.com/permission/inner/user/role/create","user_role_delete":"http://pbs.paratera.com/permission/inner/user/role/delete","server_type":"ldap","hybrid_cloud_on":{"-desc":"混合云的开关","#text":"false"},"password_secret":{"-desc":"私有云到公有云加密串","#text":"=c-hXIXk1pDCJtjsNHtpCxw=="},"filter_on":{"-desc":"认证的开关","#text":"true"},"para_cloud_logout_url":{"-desc":"公有云注销","#text":"https://user.paratera.com/user/api/inner/hybrid/logout"},"get_para_cloud_sid_url":{"-desc":"获取公有云sid（通过sid获取token）","#text":"https://user.paratera.com/user/api/inner/hybrid/user/sid"},"check_para_user_url":{"-desc":"check公有云用户名密码是否正确","#text":"https://user.paratera.com/user/api/inner/hybrid/user/check"},"CLUSTER_ID":{"-desc":"集群ID","#text":"1491"}},{"-name":"jdbc.properties","jdbc.url":"jdbc:mysql://172.18.3.98:3306/secretdb?useUnicode=true&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull"},{"-name":"start.sh","-type":"sh","MEMORY":"4g","Xmn":"256m"},{"-name":"createdb.sql","-type":"sql"}]}},{"-name":"xmonitor","-desc":"应该在安装的时候才自动生成一个start.sh脚本","profiles":{"profile":[{"-name":"cache.properties","cache.type":"redis","redis.host":"172.18.3.98","redis.port":"6379","zk.hosts":"182.92.65.97:2181","zk.node":"/zk/codis/db_test/proxy"},{"-name":"xmonitor.properties","nats.msg.servers":"nats://172.18.4.205:4242","nats.alarm.servers":"nats://172.18.4.205:4244","nats.listen.topics":"*.sysinfo.*","nrelation.url":"https://nrelation.paratera.com/nrelation/api/inner/nasset/update","push.rule.url":"https://push.paratera.com/pushservice/push/internal/message/rule/push","xmonitor.port":{"-desc":"混合云的开关","#text":"8899"}},{"-name":"jdbc.properties","jdbc.url":"jdbc:mysql://172.18.3.98:3306/secretdb?useUnicode=true&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull"},{"-name":"start.sh","-type":"sh","MEMORY":"4g","Xmn":"256m"},{"-name":"createdb.sql","-type":"sql"}]}},{"-name":"tower","-desc":"应该在安装的时候才自动生成一个start.sh脚本","profiles":{"profile":[{"-name":"jdbc.properties","jdbc.url":"jdbc:mysql://172.18.3.98:3306/secretdb?useUnicode=true&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull"},{"-name":"nrelationdb.properties","jdbc.url":"jdbc:mysql://172.18.3.98:3306/secretdb?useUnicode=true&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull","jdbc.username":"root","jdbc.password":"7X6K0ode.Yjvs"},{"-name":"tower.properties","port":{"-desc":"端口","#text":"6969"},"nats.servers":{"-desc":"nats信息","#text":"nats://172.18.3.98:4242"},"nats.topics":{"-desc":"nats的topic，接收哪套集群的topic","#text":">"},"es.host":{"-desc":"es的host","#text":"172.18.3.98"},"es.port":{"-desc":"es的端口","#text":"9600"},"mysql.on":{"-desc":"是否入mysql的开关","#text":"true"},"mysql.collect.topics":{"-desc":"采集哪些信息","#text":"cpu,gpu,meminfo,dskio,nfs,net,ipmi,df,croarch2"},"collect.to.es.on":{"-desc":"es的开关","#text":"true"},"as.base.url":{"-desc":"域名","#text":"http://private.paratera.com"},"as.ignore":{"-desc":"as是否进行认证","#text":"false"},"permission.on":{"-desc":"as是否进行权限认证","#text":"true"},"alarm.cluster.name":{"-desc":"告警的集群ID,这个位置修改了，在安装的时候需要在createdb.sql中所有的初始化表名前加上clusterId_,然后再初始化表","#text":"1491"},"alarm.on":{"-desc":"告警开关","#text":"true"},"alarm.push.url":{"-desc":"告警推送消息url","#text":"https://172.18.3.98/pushservice/push/internal/message/rule/push"},"alarm.rule.url":{"-desc":"获取告警规则的url","#text":"https://172.18.3.98/pushservice/push/internal/monitor/warning/rule/list"},"offline.may.time":{"-desc":"离线时间多久认为是可能离线","#text":"60000"},"offline.time":{"-desc":"离线多久认为是真的离线","#text":"120000"},"offline.alarm.on":{"-desc":"离线告警开关","#text":"true"},"alarm.offline.url":{"-desc":"离线告警推送消息","#text":"https://172.18.3.98/pushservice/push/internal/message/rule/push"}},{"-name":"createdb.sql","-type":"sql"},{"-name":"start.sh","-type":"sh","MEMORY":"4g","Xmn":"256m"}]}}]}}}
        var xotree = new XML.ObjTree();
        var xml = xotree.writeXML( json );        // tree to source
      //  xml = xml.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
        console.log(xml );
        
    }


    xmlToJson(){
        let xml = '<?xml version="1.0" encoding="UTF-8"?><root><global><profiles><profile name="jdbc.properties"><jdbc.username desc="jdbc.properties文件 作为全部变量，如果巨变也有，则以局部为准">root</jdbc.username><jdbc.password>7X6K0ode.Yjvs</jdbc.password></profile></profiles></global><packages><redis version="3.2.5" /><nginx version="1.10.2" domain="private.paratera.com" /><mysql version="5.6.26"/><es version="2.0.0" /><tomcat version="tomcat7" /><jdk version="1.8" /></packages><projects><project name="nrelation"><profiles><profile name="jdbc.properties"><jdbc.url>jdbc:mysql://172.18.3.98:3306/secretdb?useUnicode=true&amp;characterEncoding=utf-8&amp;zeroDateTimeBehavior=convertToNull</jdbc.url><jdbc.username>root</jdbc.username><jdbc.password>7X6K0ode.Yjvs</jdbc.password></profile><profile name="nrelation.properties"><assetinfo.url>http://private.paratera.com/pmonitor/api/inner/node/report</assetinfo.url></profile><profile name="createdb.sql" type="sql"></profile></profiles></project><project name="pmonitor"><profiles><profile name="jdbc.properties"><jdbc.url>jdbc:mysql://172.18.3.98:3306/secretdb?useUnicode=true&amp;characterEncoding=utf-8&amp;zeroDateTimeBehavior=convertToNull</jdbc.url></profile><profile name="pmonitor.properties"><es.server.base.url>http://172.18.3.98:9600</es.server.base.url><nrelation.server.base.url>http://pbs.paratera.com/nrelation/api</nrelation.server.base.url><zserver.base.url>http://pbs.paratera.com/station/api/</zserver.base.url></profile><profile name="createdb.sql" type="sql"></profile></profiles></project><project name="push"><profiles><profile name="push-servlet.xml" desc="下面的key，点前面的代表父节点id，点后面的代表子节点name"><dataSource.url>jdbc:mysql://172.18.4.243:3306/pushdb?useUnicode=true&amp;amp;characterEncoding=utf-8&amp;amp;zeroDateTimeBehavior=convertToNull</dataSource.url><dataSource.username>root</dataSource.username><dataSource.password>111111</dataSource.password></profile><profile name="cache.properties"><cache.type>redis</cache.type><redis.host>172.18.3.98</redis.host><redis.port>6379</redis.port><zk.hosts>182.92.65.97:2181</zk.hosts><zk.node>/zk/codis/db_test/proxy</zk.node></profile><profile name="push.properties"><push.weixin>http://wx.oits.paratera.com/php/papp/job_push.php</push.weixin><push.weixin.cluster.offline>http://wx.oits.paratera.com/php/sync_mysql_cluster_status_alarm.php</push.weixin.cluster.offline><query.user.info>https://user.paratera.com/user/api/inner/users</query.user.info><all.user.info>https://pbs.paratera.com/as/inner/user/info/aftertime</all.user.info><cluster.info.url>http://pbs.paratera.com/as/inner/cluster/info</cluster.info.url><is.private.cloud>true</is.private.cloud></profile><profile name="jdbc.properties"><jdbc.url>jdbc:mysql://172.18.3.98:3306/secretdb?useUnicode=true&amp;characterEncoding=utf-8&amp;zeroDateTimeBehavior=convertToNull</jdbc.url></profile><profile name="createdb.sql" type="sql"></profile></profiles></project><project name="scheduler"><profiles><profile name="scheduler.properties"><assetinfo.url>http://private.paratera.com/pmonitor/api/inner/node/report</assetinfo.url><tgraph.url>http://private.paratera.com/pmonitor/api/inner/report/sum/graph</tgraph.url><smartinfo.url>http://private.paratera.com/xmonitor/data</smartinfo.url><atokenservice.url>http://private.paratera.com</atokenservice.url></profile><profile name="jdbc.properties"><jdbc.url>jdbc:mysql://172.18.3.98:3306/secretdb?useUnicode=true&amp;characterEncoding=utf-8&amp;zeroDateTimeBehavior=convertToNull</jdbc.url></profile><profile name="createdb.sql" type="sql"></profile></profiles></project><project name="station"><profiles><profile name="station.properties"><atokenservice.url>http://private.paratera.com</atokenservice.url><visualization.url>http://private.paratera.com/visualization/api/inner/apps/</visualization.url><scheduler.url>http://private.paratera.com/scheduler/api/inner/node/get</scheduler.url><atoken.user.url>http://private.paratera.com/as/inner/user/byid</atoken.user.url><cluster>1491</cluster><netfs.upload_dir desc="文件上传临时目录">/lustre/upload</netfs.upload_dir><slurmweb.script_dir desc="应用的shell文件放的目录，指定的应用模板的路径">/lustre/slurmweb/script</slurmweb.script_dir><slurmweb.work_dir desc="作业提交之后，作业输出文件存放的目录">/lustre/slurmweb/work</slurmweb.work_dir><slurmweb.interaction_script_dir desc="交互式应用提交模板存放的目录">/lustre/slurmweb/interaction_script</slurmweb.interaction_script_dir><update.task.interval desc="作业采集时间的间隔">5000</update.task.interval><share.dir desc="共享文件的目录位置">/share</share.dir><job.small.scale desc="默认的节点个数规模大小(小)">20</job.small.scale><job.middle.scale desc="默认的节点个数规模大小(中)">50</job.middle.scale><job.big.scale desc="默认的节点个数规模大小(大)">100</job.big.scale><job.hour.count.on desc="每小时作业数量消耗机时数开关">false</job.hour.count.on><job.day.count.on desc="每天作业数量消耗机时数开关">true</job.day.count.on><job.state.collector.on desc="作业坐台采集开关">true</job.state.collector.on></profile><profile name="jdbc.properties"><jdbc.url>jdbc:mysql://172.18.3.98:3306/secretdb?useUnicode=true&amp;characterEncoding=utf-8&amp;zeroDateTimeBehavior=convertToNull</jdbc.url></profile><profile name="createdb.sql" type="sql"></profile></profiles></project><project name="visualization"><profiles><profile name="visualizationservice.properties"><upload_file_path>/tmp</upload_file_path><pagent_port>7000</pagent_port><pmonitor_base_url>http://pbs.paratera.com/pmonitor/api</pmonitor_base_url><nrelation_base_url>http://pbs.paratera.com/nrelation/api</nrelation_base_url><atoken_service_base_url>http://pbs.paratera.com/as</atoken_service_base_url></profile><profile name="jdbc.properties"><jdbc.url>jdbc:mysql://172.18.3.98:3306/secretdb?useUnicode=true&amp;characterEncoding=utf-8&amp;zeroDateTimeBehavior=convertToNull</jdbc.url></profile><profile name="createdb.sql" type="sql"></profile></profiles></project><project name="ATokenService" desc="应该在安装的时候才自动生成一个start.sh脚本"><profiles><profile name="as.properties"><port>9966</port><user_head_path>/data/temp</user_head_path><user_role_create>http://pbs.paratera.com/permission/inner/user/role/create</user_role_create><user_role_delete>http://pbs.paratera.com/permission/inner/user/role/delete</user_role_delete><server_type>ldap</server_type><hybrid_cloud_on desc="混合云的开关">false</hybrid_cloud_on><password_secret desc="私有云到公有云加密串">=c-hXIXk1pDCJtjsNHtpCxw==</password_secret><filter_on desc="认证的开关">true</filter_on><para_cloud_logout_url desc="公有云注销">https://user.paratera.com/user/api/inner/hybrid/logout</para_cloud_logout_url><get_para_cloud_sid_url desc="获取公有云sid（通过sid获取token）">https://user.paratera.com/user/api/inner/hybrid/user/sid</get_para_cloud_sid_url><check_para_user_url desc="check公有云用户名密码是否正确">https://user.paratera.com/user/api/inner/hybrid/user/check</check_para_user_url><CLUSTER_ID desc="集群ID">1491</CLUSTER_ID></profile><profile name="jdbc.properties"><jdbc.url>jdbc:mysql://172.18.3.98:3306/secretdb?useUnicode=true&amp;characterEncoding=utf-8&amp;zeroDateTimeBehavior=convertToNull</jdbc.url></profile><profile name="start.sh" type="sh"><MEMORY>4g</MEMORY><Xmn>256m</Xmn></profile><profile name="createdb.sql" type="sql"></profile></profiles></project><project name="xmonitor" desc="应该在安装的时候才自动生成一个start.sh脚本"><profiles><profile name="cache.properties"><cache.type>redis</cache.type><redis.host>172.18.3.98</redis.host><redis.port>6379</redis.port><zk.hosts>182.92.65.97:2181</zk.hosts><zk.node>/zk/codis/db_test/proxy</zk.node></profile><profile name="xmonitor.properties"><nats.msg.servers>nats://172.18.4.205:4242</nats.msg.servers><nats.alarm.servers>nats://172.18.4.205:4244</nats.alarm.servers><nats.listen.topics>*.sysinfo.*</nats.listen.topics><nrelation.url>https://nrelation.paratera.com/nrelation/api/inner/nasset/update</nrelation.url><push.rule.url>https://push.paratera.com/pushservice/push/internal/message/rule/push</push.rule.url><xmonitor.port desc="混合云的开关">8899</xmonitor.port></profile><profile name="jdbc.properties"><jdbc.url>jdbc:mysql://172.18.3.98:3306/secretdb?useUnicode=true&amp;characterEncoding=utf-8&amp;zeroDateTimeBehavior=convertToNull</jdbc.url></profile><profile name="start.sh" type="sh"><MEMORY>4g</MEMORY><Xmn>256m</Xmn></profile><profile name="createdb.sql" type="sql"></profile></profiles></project><project name="tower" desc="应该在安装的时候才自动生成一个start.sh脚本"><profiles><profile name="jdbc.properties"><jdbc.url>jdbc:mysql://172.18.3.98:3306/secretdb?useUnicode=true&amp;characterEncoding=utf-8&amp;zeroDateTimeBehavior=convertToNull</jdbc.url></profile><profile name="nrelationdb.properties"><jdbc.url>jdbc:mysql://172.18.3.98:3306/secretdb?useUnicode=true&amp;characterEncoding=utf-8&amp;zeroDateTimeBehavior=convertToNull</jdbc.url><jdbc.username>root</jdbc.username><jdbc.password>7X6K0ode.Yjvs</jdbc.password></profile><profile name="tower.properties"><port desc="端口">6969</port><nats.servers desc="nats信息">nats://172.18.3.98:4242</nats.servers><nats.topics desc="nats的topic，接收哪套集群的topic">></nats.topics><es.host desc="es的host">172.18.3.98</es.host><es.port desc="es的端口">9600</es.port><mysql.on desc="是否入mysql的开关">true</mysql.on><mysql.collect.topics desc="采集哪些信息">cpu,gpu,meminfo,dskio,nfs,net,ipmi,df,croarch2</mysql.collect.topics><collect.to.es.on desc="es的开关">true</collect.to.es.on><as.base.url desc="域名">http://private.paratera.com</as.base.url><as.ignore desc="as是否进行认证">false</as.ignore><permission.on desc="as是否进行权限认证">true</permission.on><alarm.cluster.name desc="告警的集群ID,这个位置修改了，在安装的时候需要在createdb.sql中所有的初始化表名前加上clusterId_,然后再初始化表">1491</alarm.cluster.name><alarm.on desc="告警开关">true</alarm.on><alarm.push.url desc="告警推送消息url">https://172.18.3.98/pushservice/push/internal/message/rule/push</alarm.push.url><alarm.rule.url desc="获取告警规则的url">https://172.18.3.98/pushservice/push/internal/monitor/warning/rule/list</alarm.rule.url><offline.may.time desc="离线时间多久认为是可能离线">60000</offline.may.time><offline.time desc="离线多久认为是真的离线">120000</offline.time><offline.alarm.on desc="离线告警开关">true</offline.alarm.on><alarm.offline.url desc="离线告警推送消息">https://172.18.3.98/pushservice/push/internal/message/rule/push</alarm.offline.url></profile><profile name="createdb.sql" type="sql"></profile><profile name="start.sh" type="sh"><MEMORY>4g</MEMORY><Xmn>256m</Xmn></profile></profiles></project></projects></root>'
        var xotree = new XML.ObjTree();
        var tree = xotree.parseXML( xml );       	// source to tree
        console.log( JSON.stringify(tree) );
    }

    render(){
        return (
            <div>

            </div>
        )
    }
}