package practice4;

import java.util.Scanner;

public class CharAtIndex {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		String str = sc.nextLine();
		int i = sc.nextInt();
		if(i<0) System.out.println("Invalid");
		else{
			i = i%str.length();
			System.out.println(str.charAt(i));
		}
	}

}
