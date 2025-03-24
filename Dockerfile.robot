# FROM python:3.9-slim

# # Install certificates and dependencies
# RUN apt-get update && apt-get install -y \
#     wget \
#     gnupg \
#     unzip \
#     ca-certificates \
#     apt-transport-https \
#     chromium \
#     chromium-driver \
#     --no-install-recommends \
#     && rm -rf /var/lib/apt/lists/*

# # Create symbolic links for compatibility
# RUN ln -s /usr/bin/chromium /usr/bin/google-chrome \
#     && ln -s /usr/bin/chromedriver /usr/local/bin/chromedriver

# # Install Python dependencies
# COPY requirements.txt .
# RUN pip install --no-cache-dir -r requirements.txt

FROM python:3
RUN pip install robotframework

# Set working directory
WORKDIR /tests

# Set environment variables
ENV CHROME_BIN=/usr/bin/chromium
ENV CHROMEDRIVER_PATH=/usr/local/bin/chromedriver
ENV PATH="/usr/local/bin:/usr/bin:${PATH}"

# Copy test files
COPY tests/robot /tests

CMD ["robot", "--outputdir", "results", "tests"]