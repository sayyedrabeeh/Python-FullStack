class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word_end = False

class Node:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self,word):
        current = self.root
        for i in word:
            if i not in current.children:
                current.children[i] = TrieNode()
            current = current.children[i] 
        current.is_word_end = True 
    
    def display(self,node = None,perfix = ''):
        if node is None:
            node = self.root
        if node.is_word_end:
            print(perfix)
        for i in node.children:
            self.display(node.children[i],perfix + i)
    
    def autocomplete(self,prefix):
        node = self.root
        for i in prefix:
            if i in node.children:
                node =  node.children[i]
            else:
                return []
        
        def dfs(current_node,path,result):
            if current_node.is_word_end:
                result.append(path)
            for i,child in current_node.children.items():
                dfs(child,path + i ,result)
        
        
        result = []
        dfs(node,prefix,result)
        return result 
        
        
    
t = Node()
t.insert('hi')
t.insert('hello')
t.insert('sss')
t.insert('how are u')
t.display()

print(t.autocomplete('ssss')) 
                
            