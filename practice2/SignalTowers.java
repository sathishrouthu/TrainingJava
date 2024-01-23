package practice2;

import java.util.Scanner;

public class SignalTowers {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int[][] arr = new int[n][n];
		int t = sc.nextInt();
		for(int i=0;i<t;i++) {
			int x = sc.nextInt();
			int y = sc.nextInt();
			arr[x][y] = 1;
			for(int a=x-1;a<=x+1;a++) {
				for(int b=y-1;b<=y+1;b++) {
					if(a<0 || a>=n || b<0 || b>=n) continue;
					arr[a][b]=1;
				}
			}
		}
		int count=0;
		for(int[] temp: arr) {
			for(int k:temp) {
				count+=k;
			}
		}
		
		if(count==n*n) {
			System.out.println("Yes");
		}
		else {
			System.out.println("No");
			System.out.println(n*n - count);
		}
	}

}
