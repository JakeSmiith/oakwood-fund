mkdir -p scripts

cat > scripts/update-stocks.sh <<'EOF'
#!/usr/bin/env bash
set -e

# write your Kaggle credentials
mkdir -p ~/.kaggle
cat > ~/.kaggle/kaggle.json <<EOK
{"username":"${KAGGLE_USERNAME}","key":"${KAGGLE_KEY}"}
EOK
chmod 600 ~/.kaggle/kaggle.json

# download & unzip the dataset into data/stocks
kaggle datasets download \
  -d nidulali/world-stock-prices-daily-updating \
  --unzip \
  -p data/stocks
EOF

chmod +x scripts/update-stocks.sh
