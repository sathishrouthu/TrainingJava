package practice1;

import java.util.Arrays;
import java.util.Scanner;

public class SmallNumbers {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		int[] arr = new int[N];
		for(int i=0;i<N;i++) {
			arr[i] = sc.nextInt();
		}
		int n= sc.nextInt();
		int g = N-n;
		for(int i : arr) {
			int c=0;
			for(int j : arr) {
				if(j>i) c++;
				if(c>=g) {
					System.out.print(i+"  ");
					break;
				}
			}
		}
	}

}
