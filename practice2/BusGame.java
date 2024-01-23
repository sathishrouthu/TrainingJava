package practice2;

import java.util.Scanner;

public class BusGame {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int x = sc.nextInt();
		int num = 0;
		int studentNo = 0;
		while(true) {
			String s = sc.nextLine();
			if(s.equals("")) s  = sc.nextLine();
			num++;
			studentNo++;
			if(num%x==0 && !s.equals("bus")) {
				System.out.println(studentNo);
				break;
			}
			if(studentNo >= n) {
				studentNo=0;
			}
		}
	}

}
