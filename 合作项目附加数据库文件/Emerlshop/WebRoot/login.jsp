<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'login.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<script src="js/jquery-1.8.3.js" type="text/javascript" charset="utf-8"></script>
	<script type="text/javascript">
		$(document).ready(function(){
		 	$("#name").blur(function(){
				$.ajax({
					type:"get",
					url:"http://172.25.5.43:8080/Emerlshop/NameServlet",
					data:{name:"北"}, 
					success:function(result){
					  	alert(result);
						/* $("#ajax").load(id.jsp); */
					} ,
					error:function(){
					alert("失败");
					}
				 });
			}); 
		}); 
	</script>
  </head>
  <body>
  <body>
	 	<div id="dicz" align="center">
			<table border="">
				<tr >
					<td colspan="2" align="center">
						信息表
					</td>
				</tr>
				<tr>
					<td>
						名称
					</td>
					<td>
						价格
					</td>
				</tr>
				<c:forEach var = "eme" items = "${list}" varStatus = "i" >
					<tr >
						<td><a href="Idservlet?id=${i.index+1}">${eme.name}</a></td>
						<td>${eme.price}</td>
					</tr>
				</c:forEach>
				
			</table>
		</div>
		<div>
		<h2>搜索框</h2>
			<form method="post" id="searchform" action="NameServlet">
			     <input type="text" id="name" name="name" value=""  placeholder=""  />
			     <input type="submit" value="搜索">
			</form>
		</div>
		
		<div id="ajax">
		
		</div> 
		
	</body>
   
  </body>
</html>
