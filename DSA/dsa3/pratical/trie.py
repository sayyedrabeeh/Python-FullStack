


class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        current =  self.root
        for i in word:
            if i not in current.children:
                current.children[i] = TrieNode()
            current = current.children[i]
        current.is_word_end =True

    def search(self,word):
        node = self.root
        for i in word:
            if i not in node.children:
                return False
            node = node.children[i]

        return node.is_word_end
    
    def starts_with(self,word):
        node = self.root
        for i in word:
            if i not in node.children:
                return False
            node = node.children[i]

        return True
    
    def delete(self,word):
        node = self.root
        stack = []
        for i in word:
            if i not in node.children:
                return
            stack.append((node,i))
            node = node.children[i]
        
        if not node.is_word_end:
            return
        
        node.is_word_end = False

        while stack:
            parent,ch = stack.pop()
            child = parent.children[ch]
            if not child.children and not child.is_word_end:
                del parent.children[ch]
            else:
                break


    def display(self,node=None,pefix=''):
        if node is None:
            node = self.root
        
        if node.is_word_end:
            print(pefix)
        
        for i in node.children:
            self.display(node.children[i],pefix+i)




trie = Trie()
trie.insert("apple")
trie.insert("app")
trie.insert("bat")
      
print(trie.search("bat"))      
print(trie.search("batman"))  
print(trie.starts_with("ap")) 

print(trie.starts_with("ba")) 
trie.delete("app")
print(trie.search("app"))     # False
print(trie.search("apple")) 
    
print("Words in Trie:")
trie.display()