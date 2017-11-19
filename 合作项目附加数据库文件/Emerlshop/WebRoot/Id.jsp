<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'Id.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  <body>
  <div id="div2" align="center">
			<table border="0"  style="line-height: 30px;width: 400px;">
				<tr >
					<td colspan="2" align="center">
						详细信息
					</td>
				</tr>
				<tr>
					<td>
						名称：
					</td>
					<td>
						${list[0].name}
					</td>
				</tr>
				
				<tr>
					<td >
						价格（元）：
					</td>
					<td >
						${list[0].price}
					</td>
				</tr>
			</table>
			<a href="index.jsp">返回</a>
		</div>
  	
  
  
    
  </body>
</html>
