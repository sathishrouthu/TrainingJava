package practice1;
import java.util.*;
public class Demo {
	public static void main(String args[]) {
		Scanner sc = new Scanner(System.in);
		String t1 = sc.nextLine();
		String t2 = sc.nextLine();
		if( ( !t1.equals("Present") && !t1.equals("Absent") ) && ( !t2.equals("Present") && !t2.equals("Absent") ) ){
			System.out.println("Invalid Input");
			System.exit(0);
		}
		boolean a = t1.equals("Present");
		boolean b = t2.equals("Absent");
		if(a^b) {
			System.out.println("Not in Trouble");
		}
		else {
			System.out.println("In Trouble");
		}
		sc.close();
	}
}
