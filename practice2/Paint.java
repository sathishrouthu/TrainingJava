package practice2;

import java.util.Scanner;
public class Paint {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int L = sc.nextInt();
		int W = sc.nextInt();
		int H = sc.nextInt();
		
		int d = sc.nextInt();
		int w = sc.nextInt();
		int dl = sc.nextInt();
		int dw = sc.nextInt();
		int wl = sc.nextInt();
		int wh = sc.nextInt();
		int cost = sc.nextInt();
		
		
		int totalArea = 2*(L*H)+2*(W*H);
		int nonPaint = d*dl*dw + w*wl*wh;
		System.out.println(cost*(totalArea-nonPaint));
		
	}

}
