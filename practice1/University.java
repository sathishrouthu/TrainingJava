package practice1;
import java.util.*;

public class University {
	public static boolean validateWebsite(String website) {
	
		String arr[] = website.split("\\.");

		if(arr.length < 3) return false;
		
		//Protocol
		String protocol = arr[0].split("//")[0];

		if( !protocol.equals("http:") && !protocol.equals("https:")) return false;
		
		//Domain 
		String domain = arr.length==4?arr[1]:arr[0].split("//")[1];
		
		for(char c : domain.toCharArray()) {
			if(!Character.isAlphabetic(c)) return false;
		}
		
		// STLD
		String stld = arr.length==4?arr[2]: arr[1];
		if(stld.length()<2 || stld.length() >6) return false;
		String cctld=null;
		
		//CCTLD
		if(arr.length == 4 ) {
			cctld = arr[3];
			if(cctld.length()<2 || cctld.length()>6) return false;
		}
		return true;
	}
	public static boolean validateMobile(String mobileNo) {
		if(mobileNo.length()<13 || mobileNo.length()>13 ) return false;
		if(!mobileNo.startsWith("+91", 0)) return false;
		for(int i=3;i<13;i++) {
			if(!Character.isDigit(mobileNo.charAt(i))) return false;
		}
		return true;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Enter Website : ");
		Scanner sc = new Scanner(System.in);
		String website = sc.nextLine();
		if(validateWebsite(website)) System.out.println("Website is Valid");
		else System.out.println("Website is invalid");
		System.out.println("Enter Mobile Number : ");
		String mobileNo = sc.nextLine();
		if(validateMobile(mobileNo)) System.out.println("Mobile Number is Valid");
		else	System.out.println("Mobile Number is Invalid");

	}
}

//https://www . ii .edu .in
