import re

def parse_log_file(file_path):
    log_entries = []
    log_pattern = re.compile(
        r'(?P<ip>\S+) \[(?P<timestamp>[^\]]+)\] "(?P<method>\S+) (?P<path>[^ ]+) [^\"]+" '
        r'(?P<status>\d+) (?P<size>\d+) "(?P<user_agent>[^"]+)" (?P<response_time>[\d\.]+)s'
    )
    
    with open(file_path, 'r') as file:
        for line in file:
            match = log_pattern.match(line)
            if match:
                log_entries.append({
                    'ip': match.group('ip'),
                    'timestamp': match.group('timestamp'),
                    'method': match.group('method'),
                    'path': match.group('path'),
                    'status': int(match.group('status')),
                    'size': int(match.group('size')),
                    'user_agent': match.group('user_agent'),
                    'response_time': float(match.group('response_time'))
                })
    
    return log_entries

# Exemplo de uso
log_data = parse_log_file("serve_access.log")
for entry in log_data:
    print(entry)
