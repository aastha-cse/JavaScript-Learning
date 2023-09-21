class Solution {
public:
    bool isPalindrome(string s) {
        string a="";
        for(char c:s){
            if(c>='A' && c<='Z'){
                c=tolower(c);
                a+=c;
            }
            else if((c>='a' && c<='z') || (c>='0' && c<='9')) a+=c;
        }
        cout<<a;
        string b="";
        for(int i=a.length()-1;i>=0;i--)
        {
            b+=a[i];
        }
        return a==b;
    }
};