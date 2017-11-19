package entity;

public class emerlJiHe {
	private int id;//ID
	private String name ;//商品名称
	private int price;//商品价格
	private String picpath;//图片路径
	
	
	
	
	
	
	public int getId() {
		return id;
	}






	public void setId(int id) {
		this.id = id;
	}






	public String getName() {
		return name;
	}






	public void setName(String name) {
		this.name = name;
	}






	public int getPrice() {
		return price;
	}






	public void setPrice(int price) {
		this.price = price;
	}






	public String getPicpath() {
		return picpath;
	}






	public void setPicpath(String picpath) {
		this.picpath = picpath;
	}






	@Override
	public String toString() {
		return "emerlJiHe [id=" + id + ", name=" + name + ", price=" + price
				+ ", picpath=" + picpath + "]";
	}



}
