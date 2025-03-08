
# Assignment - 01

## 01

```cpp
#include <iostream>
using namespace std;
#define nl '\n'

int *binary_search(int *a, int *b, int k) {
	int *i = a;
	for (int j = (b-a)/2; j >= 1; j /= 2) { // half jump distance
		while (i+j < b and *(i+j) <= k) i += j; // keep jumping forward
	}
	return *i == k ? i : i+1;
}

int main() {
	int n; cin >> n;
	int ar[n];
	for (int i = 0; i < n; i++)
		cin >> ar[i];
	int k; cin >> k;

	cout << binary_search(ar, ar+n, k) - ar << nl;
}
```


## 02

```cpp
#include <iostream>
using namespace std;
#define nl '\n'

int *lower_bound(int *a, int *b, int k) {
	int *mid = a + (b-a)/2;
	for (; a < b; mid = a + (b-a)/2) {
		if (k <= *mid) b = mid;
		else if (k > *mid) a = mid+1;
	}
	return mid;
}

int *upper_bound(int *a, int *b, int k) {
	int *mid = a + (b-a)/2;
	for (; a < b; mid = a + (b-a)/2) {
		if (k < *mid) b = mid;
		else if (k >= *mid) a = mid+1;
	}
	return mid;
}

int main() {
	int n; cin >> n;
	int ar[n];
	for (int i = 0; i < n; i++)
		cin >> ar[i];
	int k; cin >> k;

	int *a = lower_bound(ar, ar+n, k);
	int *b = upper_bound(ar, ar+n, k);
	if (a == b) cout << "-1 -1" << nl;
	else cout << a-ar << ' ' << b-1-ar << nl;
}
```


## 03

```cpp
#include <iostream>
using namespace std;
#define nl '\n'

int main() {
	string s, t; cin >> s >> t;

	int ar[26] = {0}, br[26] = {0};
	for (int i = 0; i < s.size(); i++) {
		ar[s[i] - 'a']++;
		br[t[i] - 'a']++;
	}

	for (int i = 0; i < 26; i++) {
		if (ar[i] != br[i]) {
			cout << "NO" << nl;
			return 0;
		}
	}
	cout << "YES" << nl;
}
```


## 04

```cpp
#include <iostream>
using namespace std;
#define nl '\n'

int main() {
	int n; cin >> n;
	int ar[n+1] = {0}, a;
	for (int i = 0; i < n; i++)
		cin >> a, ar[a]++;

	for (int i = 0; i <= n; i++) {
		if (!ar[i]) {
			cout << i << nl;
			return 0;
		}
	}
}
```


## 05

```cpp
#include <iostream>
using namespace std;
#define nl '\n'

int main() {
	int n; cin >> n;
	int ar[n];
	for (int i = 0; i < n; i++)
		cin >> ar[i];

	int i = -1;
	for (int j = n-1; j >= 1; j /= 2) {
		while (i+j < n and ar[i+j] == i+j) i += j;
	}

	cout << i+1 << nl;
}
```


## 06

```cpp
#include <iostream>
using namespace std;
#define nl '\n'

int main() {
	int n; cin >> n;

	int i = 1;
	for (int j = n/2; j >= 1; j /= 2) {
		while ((i+j)*(i+j) <= n) i += j;
	}

	cout << (i*i == n ? "YES" : "NO") << nl;
}
```


## 07

```cpp
#include <iostream>
using namespace std;
#define nl '\n'

float sqrt(float n, float guess) {
	if (abs(guess*guess - n) <= 10e-4)
		return guess;
	return sqrt(n, (guess + n/guess)/2);
}

int main() {
	float n; cin >> n;
	cout << setprecision(4) << sqrt(n, n/2) << nl;
}
```
