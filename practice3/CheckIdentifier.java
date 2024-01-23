package practice3;
import java.util.*;

public class CheckIdentifier {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		String str = sc.nextLine();
		boolean error1 = false,error2=false;
		char firstChar = str.charAt(0);
		
		if( !(firstChar=='_' || Character.isAlphabetic(firstChar)) ) {
			error1=true;
		}
		for(int i=0;i<str.length();i++) {
			char c = str.charAt(i);
			if( !(c=='_' || Character.isAlphabetic(c) || Character.isDigit(c)) ) {
				error2=true;
			}
		}
		if(error1) System.out.println("Error 1");
		if(error2) System.out.println("Error 2");
		if(!error1 && !error2) System.out.println("No Error");
	}

}
