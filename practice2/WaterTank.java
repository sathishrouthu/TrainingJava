package practice2;

import java.util.Scanner;

public class WaterTank {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int inflow = sc.nextInt();
		int c = sc.nextInt();
		int out = sc.nextInt();
		int outflow=0;
		for(int i=0;i<out;i++) {
			outflow += sc.nextInt();
		}
		int net = inflow-outflow;
		if(net<0) System.out.println("Impossible");
		else {
			System.out.println(c/net);
		}
	}

}
