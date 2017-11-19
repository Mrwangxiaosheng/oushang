package dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import dao.BaseDao;
import dao.emerlDao;



import entity.emerlJiHe;

public class emerlDaoimpl extends BaseDao implements emerlDao{
	
	public List<emerlJiHe> selectAllemerl(){
		Connection conn = GetSQL();
		PreparedStatement ptement = null;
		ResultSet rs = null;
		List<emerlJiHe> list = new ArrayList<emerlJiHe>();
		String sql = "SELECT * FROM product_brief";
		try {
			ptement= conn.prepareStatement(sql);
			rs = ptement.executeQuery();
			//控制台显示测试
			while(rs.next()){
				emerlJiHe sjh =new emerlJiHe();
				sjh.setId(rs.getInt("id"));
				sjh.setName(rs.getString("name"));
				sjh.setPrice(rs.getInt("price"));
				sjh.setPicpath(rs.getString("picpath"));
				list.add(sjh);
				
//				int id = rs.getInt("ID");
//				String name = rs.getString("NAME");
//				int price = rs.getInt("PRICE");
//				System.out.println(id+"\t"+name+"\t"+price);
				
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			CloseSQL(rs, ptement, conn);
		}
		return list;
	}
	
	
	public List<emerlJiHe> selectIdemerl(int id){
		Connection conn = GetSQL();
		ResultSet rs = null;
		PreparedStatement ptement = null;
		List<emerlJiHe> list = new ArrayList<emerlJiHe>();
		String sql = "SELECT ID,NAME,PRICE,picpath FROM product_brief WHERE ID='"+id+"'";
		try {
			ptement = conn.prepareStatement(sql);
			rs = ptement.executeQuery();
			//控制台显示测试
			while(rs.next()){
			
				emerlJiHe sjh =new emerlJiHe();
				sjh.setId(rs.getInt("id"));
				sjh.setName(rs.getString("name"));
				sjh.setPrice(rs.getInt("price"));
				sjh.setPicpath(rs.getString("picpath"));
				list.add(sjh);
			
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			CloseSQL(rs, ptement, conn);
		}
		return list;
	
	
	}
	
	public List<emerlJiHe> selectname(String name){
		Connection conn = GetSQL();
		ResultSet rs = null;
		PreparedStatement ptement = null;
		List<emerlJiHe> list = new ArrayList<emerlJiHe>();
//		String sql = "SELECT ID,NAME,PRICE FROM product_brief WHERE ID='"+id+"'";
		String sql = "SELECT ID,NAME,PRICE,picpath FROM product_brief WHERE name like ?";
		try {
			ptement = conn.prepareStatement(sql);
			ptement.setString(1,"%"+name+"%");
			rs = ptement.executeQuery();
			//控制台显示测试
			while(rs.next()){
			
				emerlJiHe sjh =new emerlJiHe();
				sjh.setId(rs.getInt("id"));
				sjh.setName(rs.getString("name"));
				sjh.setPrice(rs.getInt("price"));
				sjh.setPicpath(rs.getString("picpath"));
				list.add(sjh);
				
//				int id = rs.getInt("ID");
//				String name1 = rs.getString("NAME");
//				int price = rs.getInt("PRICE");
//				String picpath = rs.getString("picpath");
//				System.out.println(id+"\t"+name1+"\t"+price+"\t"+picpath);
			
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			CloseSQL(rs, ptement, conn);
		}
		return list;
	
	
	}
	
//	测试main
//	public static void main(String[] args) {
//		emerlDao ed = new emerlDaoimpl();
//		ed.selectname("a");
//	}
//	

}
