
dict = {
    "name": "Rabeeh",
    123: "not allowed",
    (1, 2): "also not allowed",
    "age": 22
}

def remove_non_string_keys(dict):
    result={}
    for k in dict:
        if isinstance(k,str):
            result[k]=dict[k]
    return result
print(remove_non_string_keys(dict))


def remove_non_string_keys_dict_compersion(dict):
    return { k:v for k,v in dict.items() if isinstance(k,str)}

print(remove_non_string_keys_dict_compersion(dict))