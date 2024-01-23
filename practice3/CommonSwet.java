package practice3;
import java.util.Scanner;

public class CommonSwet {
	public static boolean find(int[][] arr,int x,int row) {
		if(row==4) return true;
		for(int i : arr[row]) {
			if(i==x) return find(arr,x,row+1);
		}
		return false;
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int arr[][] = new int[4][4];
		for(int i=0;i<4;i++) {
			for(int j=0;j<4;j++) {
				arr[i][j] = sc.nextInt();
			}
		}
		boolean found = false;
		for(int i=0;i<4;i++) {
			int x = arr[0][i];
			if(find(arr,x,1)) {
				found=true;
				System.out.println(x);
			}
		}
		if(!found) System.out.println(-1);
		sc.close();
	}
}
