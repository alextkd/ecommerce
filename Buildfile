# ===========================================================================
# Project:   Ecommerce
# Copyright: ©2010 My Company, Inc.
# ===========================================================================

# Add initial buildfile information here
config :all, :required => [:sproutcore, :scui]

config :Ecommerce do |c|
c[:theme_name] = 'sc/standard-theme'
end